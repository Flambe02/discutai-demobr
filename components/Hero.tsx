import Image from 'next/image';
import { Theme } from '@/lib/themes';

interface HeroProps {
  theme: Theme;
}

export default function Hero({ theme }: HeroProps) {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Colonne gauche : Texte */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {theme.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {theme.heroSubtitle}
            </p>

            {/* KPIs */}
            <div className="flex flex-wrap gap-3 pt-4">
              {theme.kpis.map((kpi, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20 bg-white/5 backdrop-blur-sm"
                  style={{
                    borderColor: `${theme.accentColor}40`,
                    backgroundColor: `${theme.accentColor}10`
                  }}
                >
                  {kpi}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne droite : Image hero avec overlay */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            {/* Image hero */}
            <Image
              src={theme.images.hero.src}
              alt={theme.images.hero.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Overlay gradient sombre */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"
            />

            {/* Badges flottants */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg z-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="font-bold text-gray-900">4,8</div>
                  <div className="text-xs text-gray-600">312 avaliações</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg z-10">
              <div className="font-bold text-gray-900 text-sm">
                {theme.ctaPrimaryLabel}
              </div>
              <div className="text-xs text-gray-600 mt-0.5">
                Agendamento online
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
