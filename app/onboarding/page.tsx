import type { Metadata } from 'next';
import OnboardingClient from './OnboardingClient';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'Onboarding DiscutAI — Crie seu Funcionário Virtual | TPRC',
  description:
    'Lance seu assistente virtual DiscutAI em 3 etapas: formulário de onboarding, envio de documentos e briefing em áudio. Processo guiado pela equipe TPRC.',
  alternates: {
    canonical: '/onboarding',
    languages: { 'pt-BR': `${baseUrl}/onboarding` },
  },
  openGraph: {
    title: 'Onboarding DiscutAI — Crie seu Funcionário Virtual | TPRC',
    description: 'Lance seu assistente virtual DiscutAI em 3 etapas guiadas.',
    url: `${baseUrl}/onboarding`,
    siteName: 'The Pimentão Rouge Company',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/images/pimentao-rouge-logo.png', width: 1200, height: 1200, alt: 'DiscutAI Onboarding TPRC' }],
  },
};

export default function OnboardingPage() {
  return <OnboardingClient />;
}
