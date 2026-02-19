import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import { ThemeId } from '@/lib/themes';
import { getDefaultTheme, isValidThemeId } from '@/lib/themeUtils';

type HomePageProps = {
  searchParams?: Promise<{ theme?: string | string[] }>;
};

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'TPRC | Agência Boutique de IA no Brasil',
  description:
    'A Pimentão Rouge (TPRC) é uma agência boutique de IA no Brasil especializada em IA conversacional, AI Music Branding, advisory estratégico e capacitação corporativa em IA generativa.',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': `${baseUrl}/`,
    },
  },
  openGraph: {
    title: 'TPRC | Agência Boutique de IA no Brasil',
    description:
      'Inteligência conversacional, música para sua empresa e advisory estratégico para acelerar crescimento.',
    url: `${baseUrl}/`,
    siteName: 'The Pimentão Rouge Company',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/pimentao-rouge-logo.png',
        width: 1200,
        height: 1200,
        alt: 'The Pimentão Rouge Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TPRC | Agência Boutique de IA no Brasil',
    description:
      'IA conversacional, música para empresas e advisory estratégico com foco em resultado.',
    images: ['/images/pimentao-rouge-logo.png'],
  },
};

export default async function Home({ searchParams }: HomePageProps) {
  const resolvedSearchParams = (await searchParams) ?? {};
  const rawTheme = resolvedSearchParams.theme;
  const firstTheme = Array.isArray(rawTheme) ? rawTheme[0] : rawTheme;
  const initialThemeId: ThemeId = isValidThemeId(firstTheme) ? firstTheme : getDefaultTheme();

  const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#professional-service`,
    name: 'Pimentão Rouge',
    alternateName: 'The Pimentão Rouge Company',
    url: `${baseUrl}/`,
    description:
      'Boutique de IA premium no Brasil. Criação de Digital Employees e AI Agents, AI Music Branding, consultoria estratégica e capacitação corporativa em IA generativa.',
    areaServed: [
      { '@type': 'Country', name: 'Brazil' },
      { '@type': 'ContinentOrRegion', name: 'Europe' },
    ],
    serviceType: [
      'Digital Employees & AI Agents',
      'AI Music Branding',
      'Consultoria Estratégica em IA',
      'Capacitação e Treinamento em IA',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Portfólio Pimentão Rouge',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Digital Employees & AI Agents',
          itemOffered: {
            '@type': 'Service',
            name: 'Implementação de Agentes de IA',
            description:
              'Criação de colaboradores digitais autônomos para suporte, vendas e operações.',
          },
        },
        {
          '@type': 'Offer',
          name: 'AI Music Branding',
          itemOffered: {
            '@type': 'Service',
            name: 'Identidade Sonora com IA',
            description:
              'Composição de identidade sonora algorítmica e música sob medida para marcas.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Advisory',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultoria Estratégica em IA',
            description:
              'Diagnóstico de maturidade, priorização de casos de uso e roadmap de implementação.',
          },
        },
        {
          '@type': 'Offer',
          name: 'Capacitação Executiva em IA',
          itemOffered: {
            '@type': 'Course',
            name: 'Workshop de IA para Executivos e Times',
            description:
              'Treinamento prático para liderança e equipes com foco em adoção, governança e produtividade com IA generativa.',
            provider: {
              '@type': 'Organization',
              name: 'Pimentão Rouge',
              url: `${baseUrl}/`,
            },
          },
        },
      ],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que é a Pimentão Rouge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Pimentão Rouge (TPRC) é uma agência boutique de IA premium no Brasil, especializada em Digital Employees, AI Music Branding, consultoria estratégica e capacitação corporativa em IA generativa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quais serviços a TPRC oferece?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oferecemos quatro frentes integradas: (1) criação de Digital Employees e AI Agents para atendimento, vendas e operações; (2) AI Music Branding para identidade sonora; (3) consultoria estratégica com diagnóstico de maturidade e roadmap; (4) capacitação corporativa com workshops em IA generativa.',
        },
      },
      {
        '@type': 'Question',
        name: 'Em quais regiões a Pimentão Rouge atua?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atuamos no Brasil e na Europa, com foco em empresas que buscam transformação digital com IA de alto impacto.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como funciona o diagnóstico estratégico de IA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O diagnóstico avalia a maturidade da sua empresa em IA, identifica quick wins e gargalos, e entrega um roadmap de implementação com priorização de use cases e baseline de ROI.',
        },
      },
      {
        '@type': 'Question',
        name: 'O que é o DiscutAI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'O DiscutAI é o motor de IA conversacional da Pimentão Rouge. Ele permite criar chatbots inteligentes e Digital Employees para atendimento, vendas e suporte, com integração a sistemas existentes.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* SSR shell: visible above-the-fold content rendered on server for fast FCP/LCP.
          Hidden by the client component once JS hydrates via the #ssr-hero-shell ID. */}
      {initialThemeId === 'tprc' && (
        <div
          id="ssr-hero-shell"
          className="min-h-screen bg-[#050505] text-white antialiased overflow-x-hidden"
        >
          {/* Nav bar */}
          <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/80 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/pimentao-rouge-logo.png"
                  alt="The Pimentão Rouge Company"
                  width={40}
                  height={40}
                />
                <span className="text-lg font-bold tracking-tight hidden sm:block">
                  The Pimentão Rouge Company
                </span>
                <span className="text-lg font-bold tracking-tight sm:hidden">TPRC</span>
              </a>
            </div>
          </nav>

          {/* Hero */}
          <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                Agência de Inteligência Artificial
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                  Inteligência Artificial
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  que gera resultados reais.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                TPRC: agência boutique de IA.{' '}
                <span className="text-white font-medium">Inteligência conversacional</span>,{' '}
                <span className="text-white font-medium">criatividade musical</span> e{' '}
                <span className="text-white font-medium">precisão financeira</span> para escalar
                negócios.
              </p>
            </div>
          </section>

          {/* Crawlable structured content (hidden visually, accessible to crawlers) */}
          <div className="sr-only">
            <h2>Nossas Soluções</h2>
            <h3>IA Conversacional e Digital Employees</h3>
            <p>
              Automação de agenda e suporte com motor DiscutAI. Chatbots inteligentes que entendem
              contexto e entregam resultados. Criação de colaboradores digitais autônomos para
              atendimento, vendas e operações.
            </p>
            <h3>Creative Tech e AI Music Branding</h3>
            <p>
              Produção de conteúdo sonoro viral e estratégico. Jingles, trilhas e sound design que
              marcam sua marca. Composição de identidade sonora algorítmica e música sob medida.
            </p>
            <h3>Payments e Benefits Advisory</h3>
            <p>
              Strategic Advisory: Inteligência de mercado e análise regulatória cross-border
              Brasil-Europa potencializada por IA para investidores e M&amp;A.
            </p>
            <h3>Capacitação Corporativa em IA</h3>
            <p>
              Workshops práticos para liderança e equipes com foco em adoção, governança e
              produtividade com IA generativa. Programas de upskilling e treinamento corporativo.
            </p>
            <nav aria-label="Serviços">
              <a href="/musica">Música para sua empresa com IA</a>
              <a href="/advisory">Advisory em Payments e Benefits</a>
            </nav>
          </div>
        </div>
      )}

      <HomePageClient initialThemeId={initialThemeId} />
    </>
  );
}
