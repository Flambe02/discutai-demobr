import type { Metadata } from 'next';
import OnboardingClient from './OnboardingClient';

export const metadata: Metadata = {
  title: 'Onboarding — Crie seu Funcionário Virtual | DiscutAI by TPRC',
  description:
    'Lance seu assistente virtual DiscutAI em 3 etapas: formulário de onboarding, envio de documentos e briefing em áudio.',
};

export default function OnboardingPage() {
  return <OnboardingClient />;
}
