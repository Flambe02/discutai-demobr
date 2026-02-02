#!/usr/bin/env node

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Configuration des images à télécharger
const imageSources = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'image-sources.json'), 'utf-8')
);

/**
 * Télécharge une image depuis une URL
 */
function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);

    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        file.close();
        fs.unlinkSync(dest);
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(dest);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(dest);
      reject(err);
    });
  });
}

/**
 * Optimise une image avec sharp
 */
async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width, height, quality = 85, format = 'webp' } = options;

  let pipeline = sharp(inputPath);

  if (width || height) {
    pipeline = pipeline.resize(width, height, {
      fit: 'cover',
      position: 'center'
    });
  }

  // Convert to WebP
  if (format === 'webp') {
    pipeline = pipeline.webp({ quality });
  } else if (format === 'jpeg' || format === 'jpg') {
    pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  }

  await pipeline.toFile(outputPath);

  const stats = fs.statSync(outputPath);
  return stats.size;
}

/**
 * Processus principal
 */
async function main() {
  console.log('🚀 Début de l\'optimisation des images...\n');

  const tempDir = path.join(rootDir, 'temp-images');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  let totalSize = 0;
  let processedCount = 0;

  for (const theme of imageSources.themes) {
    console.log(`\n📁 Thème: ${theme.name}`);
    console.log('━'.repeat(50));

    const outputDir = path.join(rootDir, 'public', 'images', 'themes', theme.id);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Process hero image
    if (theme.hero) {
      console.log(`\n  Hero: ${theme.hero.filename}`);
      const tempPath = path.join(tempDir, `temp-hero-${theme.id}.jpg`);
      const outputPath = path.join(outputDir, theme.hero.filename);

      try {
        console.log(`    ⬇️  Téléchargement depuis ${theme.hero.url.substring(0, 50)}...`);
        await downloadImage(theme.hero.url, tempPath);

        console.log('    🔧 Optimisation...');
        const size = await optimizeImage(tempPath, outputPath, {
          width: 1920,
          height: 1280,
          quality: 85,
          format: 'webp'
        });

        totalSize += size;
        processedCount++;
        console.log(`    ✅ Terminé! Taille: ${(size / 1024).toFixed(1)} KB`);

        fs.unlinkSync(tempPath);
      } catch (error) {
        console.error(`    ❌ Erreur: ${error.message}`);
      }
    }

    // Process gallery images
    if (theme.gallery && theme.gallery.length > 0) {
      console.log(`\n  Galerie: ${theme.gallery.length} images`);

      for (let i = 0; i < theme.gallery.length; i++) {
        const image = theme.gallery[i];
        console.log(`\n    ${i + 1}/${theme.gallery.length}: ${image.filename}`);
        const tempPath = path.join(tempDir, `temp-gallery-${theme.id}-${i}.jpg`);
        const outputPath = path.join(outputDir, image.filename);

        try {
          console.log(`      ⬇️  Téléchargement...`);
          await downloadImage(image.url, tempPath);

          console.log('      🔧 Optimisation...');
          const size = await optimizeImage(tempPath, outputPath, {
            width: 800,
            height: 600,
            quality: 85,
            format: 'webp'
          });

          totalSize += size;
          processedCount++;
          console.log(`      ✅ Terminé! Taille: ${(size / 1024).toFixed(1)} KB`);

          fs.unlinkSync(tempPath);
        } catch (error) {
          console.error(`      ❌ Erreur: ${error.message}`);
        }
      }
    }
  }

  // Cleanup temp directory
  if (fs.existsSync(tempDir)) {
    fs.rmdirSync(tempDir, { recursive: true });
  }

  console.log('\n' + '━'.repeat(50));
  console.log(`\n✨ Optimisation terminée!`);
  console.log(`   Images traitées: ${processedCount}`);
  console.log(`   Taille totale: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Taille moyenne: ${(totalSize / processedCount / 1024).toFixed(1)} KB\n`);
}

main().catch(console.error);
