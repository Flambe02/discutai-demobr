import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.pimentaorouge.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Pages principales (haute priorité) ──────────────────────
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/musica`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/advisory`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/formacao`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/onboarding`,
      lastModified: new Date('2026-03-08'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // ── Pages démo produit ───────────────────────────────────────
    // Note: ces routes ont des URLs propres, sans paramètre ?theme=
    // Les URLs /?theme=xxx ne sont PAS incluses car elles ont un
    // canonical pointant vers / (duplicates pour Google).
    {
      url: `${baseUrl}/cabeleireiro`,
      lastModified: new Date('2025-03-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
