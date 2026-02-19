import type { Metadata } from 'next';
import MusicaClient from './MusicaClient';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'Música para sua empresa com IA | TPRC',
  description:
    'Criamos música para sua empresa com IA: identidade sonora algorítmica, jingles, trilhas para eventos, sound design e voiceover. AI Music Branding para marcas no Brasil e Europa.',
  alternates: {
    canonical: '/musica',
    languages: {
      'pt-BR': `${baseUrl}/musica`,
    },
  },
  openGraph: {
    title: 'Música para sua empresa com IA | TPRC',
    description:
      'Creative Tech & Música: trilha sonora para marcas com foco em branding e performance.',
    url: `${baseUrl}/musica`,
    siteName: 'The Pimentão Rouge Company',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/pimentao-rouge-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Música para empresas TPRC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Música para sua empresa com IA | TPRC',
    description:
      'Projetos sonoros com IA para branding, campanhas e experiências de marca.',
    images: ['/images/pimentao-rouge-logo.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${baseUrl}/musica#service`,
  name: 'AI Music Branding',
  alternateName: 'Música para sua empresa com IA',
  description:
    'Criação de identidade sonora algorítmica, jingles, trilhas para eventos, sound design e voiceover com Inteligência Artificial. AI Music Branding para marcas no Brasil e Europa.',
  provider: {
    '@id': `${baseUrl}/#organization`,
  },
  areaServed: [
    { '@type': 'Country', name: 'Brazil' },
    { '@type': 'ContinentOrRegion', name: 'Europe' },
  ],
  serviceType: [
    'Identidade Sonora & Branding',
    'Jingles & Slogans com IA',
    'Trilhas para Eventos',
    'Podcasts & Voiceover',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é AI Music Branding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI Music Branding é a criação de identidade sonora para marcas usando Inteligência Artificial generativa. Inclui composição de logos sonoros, jingles, trilhas para eventos e sound design sob medida.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais tipos de música a TPRC cria para empresas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Criamos identidade sonora e branding, jingles e slogans otimizados para redes sociais (TikTok/Reels), trilhas para eventos e convenções, e podcasts com voiceover profissional.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é A Música da Segunda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Música da Segunda é um projeto semanal da TPRC que produz músicas baseadas nos fatos que movem o Brasil, demonstrando a capacidade de produção rápida e engajamento cultural usando IA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como solicitar um orçamento para música com IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre em contato pelo e-mail florent.lambert@pimentaorouge.com com detalhes do seu projeto. Oferecemos orçamentos personalizados para identidade sonora, jingles, trilhas e produções de áudio.',
      },
    },
  ],
};

export default function MusicaPage() {
  return (
    <div suppressHydrationWarning>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only" aria-hidden="false">
        <h1>Música para sua empresa com IA | AI Music Branding | TPRC</h1>
        <p>
          Na TPRC, transformamos conceitos em som. Unimos Inteligência Artificial Generativa e
          expertise musical para criar identidades sonoras únicas que engajam e convertem.
        </p>
        <h2>Nossos Serviços de Música com IA</h2>
        <h3>Identidade Sonora e Branding</h3>
        <p>
          Criamos o logo sonoro e o tema oficial da sua marca para que ela seja reconhecida
          de olhos fechados.
        </p>
        <h3>Jingles e Slogans com IA</h3>
        <p>
          Produção em escala de músicas publicitárias otimizadas para redes sociais TikTok e Reels.
        </p>
        <h3>Trilhas para Eventos</h3>
        <p>
          Música personalizada para convenções, lançamentos de produtos e experiências imersivas.
        </p>
        <h3>Podcasts e Voiceover</h3>
        <p>
          Criação de vinhetas e tratamento de voz profissional com tecnologia de ponta.
        </p>
        <h2>Portfólio de Impacto</h2>
        <p>
          A Música da Segunda: toda semana, uma nova música baseada nos fatos que movem o Brasil.
          Pimentão Rouge (pimentao.fr): música infantil que une tradição e inovação tecnológica.
        </p>
        <nav aria-label="Navegação">
          <a href="/">Página principal TPRC</a>
          <a href="/advisory">Advisory em Payments</a>
        </nav>
      </div>

      <MusicaClient />
    </div>
  );
}
