import Image from 'next/image';
import { Theme } from '@/lib/themes';

interface GalleryProps {
  theme: Theme;
}

export default function Gallery({ theme }: GalleryProps) {
  return (
    <section className="py-12 bg-gray-900/30">
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Conheça nosso ambiente
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja como trabalhamos e o que oferecemos para você
          </p>
        </div>

        {/* Galerie - Desktop: 3 colonnes, Mobile: 1 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {theme.images.gallery.map((image, index) => (
            <div
              key={index}
              className="relative h-[280px] md:h-[320px] rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>

              {/* Border accent on hover */}
              <div
                className="absolute inset-0 border-2 border-transparent group-hover:border-current transition-colors duration-300 rounded-xl pointer-events-none"
                style={{ color: theme.accentColor }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
