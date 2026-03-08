import type { Metadata } from 'next';
import OnboardingClient from './OnboardingClient';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'Onboarding DiscutAI | TPRC',
  description: 'Processo de onboarding DiscutAI — uso interno.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OnboardingPage() {
  return <OnboardingClient />;
}
