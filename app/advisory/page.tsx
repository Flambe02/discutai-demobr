import type { Metadata } from 'next';
import AdvisoryClient from './AdvisoryClient';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'Advisory em Payments e Benefits | TPRC',
  description:
    'Advisory estratégico em payments e benefits no Brasil e Europa para investidores, fintechs e empresas. Diagnóstico de maturidade, análise regulatória cross-border e roadmap de implementação.',
  alternates: {
    canonical: '/advisory',
    languages: {
      'pt-BR': `${baseUrl}/advisory`,
    },
  },
  openGraph: {
    title: 'Advisory em Payments e Benefits | TPRC',
    description:
      'Inteligência de mercado, regulação e tecnologia para decisões em payments e benefits.',
    url: `${baseUrl}/advisory`,
    siteName: 'The Pimentão Rouge Company',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/pimentao-rouge-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Advisory TPRC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advisory em Payments e Benefits | TPRC',
    description:
      'Advisory estratégico para decisões de investimento, produto e M&A.',
    images: ['/images/pimentao-rouge-logo.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${baseUrl}/advisory#service`,
  name: 'Advisory Estratégico em Payments e Benefits',
  alternateName: 'Strategic Advisory',
  description:
    'Advisory estratégico em payments e benefits no Brasil e Europa. Inteligência de mercado, análise regulatória cross-border, due diligence e roadmap para investidores, fintechs e empresas.',
  provider: {
    '@id': `${baseUrl}/#organization`,
  },
  areaServed: [
    { '@type': 'Country', name: 'Brazil' },
    { '@type': 'ContinentOrRegion', name: 'Europe' },
  ],
  serviceType: [
    'Legislativo e Regulação',
    'Tecnologia e Infraestrutura',
    'Mercado e Dinâmica Competitiva',
    'Go-to-market e Distribuição',
    'M&A e Diligência',
    'Uso e Comportamento',
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é o advisory em payments da TPRC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É um serviço de consultoria estratégica focado no ecossistema de pagamentos e benefícios, cobrindo regulação, tecnologia, mercado, go-to-market e M&A, com expertise bicultural Brasil-Europa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quem é o advisory em payments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos investidores e fundos (tese de investimento, due diligence), fintechs e operadoras (estratégia de produto, pricing, GTM), e empresas e RH (pacotes de benefícios, otimização fiscal).',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais são as áreas de expertise do advisory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cobrimos seis áreas: legislativo e regulação (Bacen, PSD2/PSD3, Open Finance), tecnologia (APIs, Pix, tokenização), uso e comportamento, mercado e dinâmica competitiva, go-to-market e distribuição, e M&A e diligência.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais são os formatos de engajamento disponíveis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos três formatos: Sprint de Inteligência (2-4 semanas para deep-dive focado), Diligência e M&A (sob demanda para decisões de investimento) e Advisory Mensal (suporte estratégico contínuo).',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é a experiência do advisor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mais de 25 anos de experiência em payments, benefits e fintech nos dois lados do Atlântico. Expertise bicultural real Brasil-Europa com abordagem hands-on focada em insights acionáveis.',
      },
    },
  ],
};

export default function AdvisoryPage() {
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
        <h1>Advisory Estratégico em Payments e Benefits | Brasil e Europa | TPRC</h1>
        <p>
          Inteligência de mercado, regulação e tecnologia para decisões de investimento, produto e
          M&amp;A. Brasil e Europa. O mercado está mudando: Pix, tokenização, Open Finance, regulação
          cross-border. Ajudamos você a identificar os ganhadores reais e evitar armadilhas.
        </p>

        <h2>Para quem é</h2>
        <h3>Investidores e Fundos</h3>
        <p>
          Tese de investimento, screening de oportunidades e diligência de risco regulatório no
          setor de payments e benefits. Avaliação de portfólio, due diligence técnica, mapeamento
          regulatório.
        </p>
        <h3>Fintechs e Operadoras</h3>
        <p>
          Estratégia de portfólio de produtos, pricing competitivo e canais de distribuição B2B e
          B2C. Estratégia de produto, modelo de pricing, go-to-market.
        </p>
        <h3>Empresas e RH</h3>
        <p>
          Desenho de pacotes de benefícios e experiência do colaborador com foco em retenção e
          engajamento. Benchmark de mercado, otimização fiscal, employee experience.
        </p>

        <h2>Áreas de Expertise</h2>
        <ul>
          <li>Legislativo e Regulação: Bacen, PSD2/PSD3, Open Finance, compliance cross-border</li>
          <li>Tecnologia e Infraestrutura: APIs, Pix, tokenização, arquiteturas de custo</li>
          <li>Uso e Comportamento: churn, adoção mobile-first, especificidades culturais</li>
          <li>Mercado e Dinâmica Competitiva: mapping de players, wedges estratégicos</li>
          <li>Go-to-market e Distribuição: B2B sales, PLG, onboarding</li>
          <li>M&amp;A e Diligência: unit economics, CAC/LTV, riscos ocultos, PMI</li>
        </ul>

        <h2>Formatos de Engajamento</h2>
        <p>Sprint de Inteligência (2-4 semanas), Diligência e M&amp;A (sob demanda), Advisory Mensal (contínuo).</p>
        <p>25+ anos de experiência em payments e fintech. Expertise bicultural Brasil-Europa.</p>

        <nav aria-label="Navegação">
          <a href="/">Página principal TPRC</a>
          <a href="/musica">Música para empresas com IA</a>
        </nav>
      </div>

      <AdvisoryClient />
    </div>
  );
}
