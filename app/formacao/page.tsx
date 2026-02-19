import type { Metadata } from 'next';
import FormacaoLoader from './FormacaoLoader';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'Capacitação e Treinamento em IA Generativa | TPRC',
  description:
    'Workshops de IA para executivos, upskilling de equipes, prompt engineering e programas de capacitação corporativa em IA generativa. Treinamento prático com foco em adoção, governança e produtividade.',
  alternates: {
    canonical: '/formacao',
    languages: {
      'pt-BR': `${baseUrl}/formacao`,
    },
  },
  openGraph: {
    title: 'Capacitação e Treinamento em IA Generativa | TPRC',
    description:
      'Workshops práticos de IA para liderança e equipes. Capacitação corporativa em IA generativa com foco em resultado.',
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
      'Workshops de IA para executivos e equipes. Capacitação corporativa prática em IA generativa.',
    images: ['/images/pimentao-rouge-logo.png'],
  },
};

export default function FormacaoPage() {
  return <FormacaoLoader />;
}
