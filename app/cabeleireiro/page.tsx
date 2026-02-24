import type { Metadata } from 'next';
import CabeleireiroClient from './CabeleireiroClient';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  title: 'Demo Barbearia com IA | DiscutAI – Barbaria do Rei',
  description:
    'Demo de assistente virtual com IA para barbearia. Agendamento online, preços e atendimento automático com Jessica – powered by DiscutAI.',
  alternates: {
    canonical: '/cabeleireiro',
    languages: {
      'pt-BR': `${baseUrl}/cabeleireiro`,
    },
  },
  openGraph: {
    title: 'Demo Barbearia com IA | Barbaria do Rei',
    description:
      'Veja como o DiscutAI automatiza agendamentos e atendimento para barbearias.',
    url: `${baseUrl}/cabeleireiro`,
    siteName: 'The Pimentão Rouge Company',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function CabeleireiroPage() {
  return <CabeleireiroClient />;
}
