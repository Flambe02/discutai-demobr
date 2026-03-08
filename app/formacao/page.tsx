import type { Metadata } from 'next';
import FormacaoLoader from './FormacaoLoader';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'Capacitação e Treinamento em IA Generativa | TPRC',
  description:
    'Workshops de IA para executivos, upskilling de equipes, prompt engineering e programas de capacitação corporativa em IA generativa. Palestras sobre IA, tendências, ética e o futuro do trabalho. Treinamento prático com foco em adoção, governança e produtividade.',
  alternates: {
    canonical: '/formacao',
    languages: {
      'pt-BR': `${baseUrl}/formacao`,
    },
  },
  openGraph: {
    title: 'Capacitação e Treinamento em IA Generativa | TPRC',
    description:
      'Workshops práticos de IA para liderança e equipes. Palestras sobre IA, tendências e futuro do trabalho. Capacitação corporativa em IA generativa com foco em resultado.',
    url: `${baseUrl}/formacao`,
    siteName: 'The Pimentão Rouge Company',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/pimentao-rouge-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Capacitação em IA TPRC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capacitação e Treinamento em IA Generativa | TPRC',
    description:
      'Workshops de IA para executivos e equipes. Palestras sobre IA. Capacitação corporativa prática em IA generativa.',
    images: ['/images/pimentao-rouge-logo.png'],
  },
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${baseUrl}/formacao#service`,
  name: 'Capacitação Corporativa em IA Generativa',
  alternateName: ['Workshop IA Executivos', 'Treinamento IA Empresas', 'Palestras sobre IA'],
  description:
    'Programas de capacitação corporativa em IA generativa: workshops para executivos, upskilling de equipes, prompt engineering, palestras sobre tendências e futuro da IA, e programas sob medida para empresas.',
  provider: {
    '@id': `${baseUrl}/#organization`,
  },
  areaServed: [
    { '@type': 'Country', name: 'Brazil' },
    { '@type': 'ContinentOrRegion', name: 'Europe' },
  ],
  serviceType: [
    'Workshop Presencial de IA',
    'Programa Sob Medida',
    'Palestra sobre IA',
    'Upskilling em IA Generativa',
    'Capacitação em Prompt Engineering',
  ],
};

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  '@id': `${baseUrl}/formacao#course`,
  name: 'Programa de Capacitação em IA Generativa para Empresas',
  description:
    'Treinamento corporativo em IA generativa focado em adoção real, governança e produtividade. Inclui workshops para liderança, upskilling de equipes, prompt engineering e programas de aculturamento.',
  provider: {
    '@id': `${baseUrl}/#organization`,
  },
  educationalLevel: 'Executivo e Corporativo',
  teaches: [
    'IA Generativa aplicada a negócios',
    'Prompt Engineering',
    'Governança de IA',
    'Adoção de IA em equipes',
    'Agentes de IA e automação',
  ],
  inLanguage: 'pt-BR',
  availableLanguage: ['pt-BR', 'en', 'fr'],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é a capacitação em IA da TPRC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'São programas de treinamento corporativo em IA generativa que incluem workshops para executivos, upskilling de equipes, prompt engineering e palestras sobre tendências, ética e o futuro do trabalho com IA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Para quem são os workshops de IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os workshops atendem três públicos: liderança e C-Level (decisão estratégica), equipes operacionais (marketing, RH, operações) e times comerciais B2B (produtividade com IA em vendas).',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais são os temas das palestras sobre IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As palestras cobrem: IA no Trabalho e Negócios, Tendências e Futuro da IA, Ética e Criatividade com IA, IA na Prática (casos reais), e Impacto da IA no RH e employee experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais formatos de treinamento estão disponíveis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos Workshop Presencial (1-2 dias, intensivo e hands-on) e Programa Sob Medida (desenhado para as necessidades específicas da empresa, conectado ao roadmap estratégico).',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a capacitação em IA se relaciona com a consultoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A capacitação complementa o Advisory Estratégico. Após o diagnóstico de maturidade em IA, o treinamento prepara as equipes para executar o roadmap com autonomia, garantindo adoção real e resultados mensuráveis.',
      },
    },
  ],
};

export default function FormacaoPage() {
  return (
    <div suppressHydrationWarning>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Server-rendered SEO content for crawlers */}
      <div className="sr-only" aria-hidden="false">
        <h1>Capacitação e Treinamento em IA Generativa para Empresas | TPRC</h1>
        <p>
          Workshops, palestras e programas corporativos de IA generativa. Da liderança às equipes
          operacionais, preparamos sua empresa para adotar a inteligência artificial com governança,
          produtividade e resultados reais.
        </p>

        <h2>Programas de Capacitação em IA</h2>
        <h3>Workshop de IA para Executivos e Liderança</h3>
        <p>
          Imersão estratégica em IA generativa para C-Level e diretores. Foco em tomada de decisão,
          identificação de casos de uso e governança de IA na empresa.
        </p>
        <h3>Upskilling de Equipes em IA</h3>
        <p>
          Capacitação prática para times de marketing, RH, operações e vendas. Prompt engineering,
          automação e uso de agentes de IA no dia a dia.
        </p>
        <h3>Programa Sob Medida</h3>
        <p>
          Treinamento desenhado para as necessidades específicas da sua empresa, conectado ao
          diagnóstico estratégico e roadmap de adoção de IA.
        </p>

        <h2>Palestras sobre Inteligência Artificial</h2>
        <p>
          Palestras que abordam desde tendências, ética e o futuro do trabalho até aplicações
          práticas em negócios. Adaptadas ao setor e público.
        </p>
        <h3>Principais Temas</h3>
        <ul>
          <li>IA no Trabalho e Negócios: transformação de processos, equipes e modelos de negócio</li>
          <li>Tendências e Futuro da IA: panorama global e o que esperar nos próximos anos</li>
          <li>Ética e Criatividade: dilemas éticos, criatividade humana e limites da automação</li>
          <li>IA na Prática: casos reais do diagnóstico ao resultado</li>
          <li>Impacto da IA no RH: recrutamento, development e futuro das equipes</li>
        </ul>

        <nav aria-label="Navegação">
          <a href="/">Página principal TPRC</a>
          <a href="/advisory">Advisory Estratégico em Payments e Benefits</a>
          <a href="/musica">AI Music Branding</a>
        </nav>
      </div>

      <FormacaoLoader />
    </div>
  );
}
