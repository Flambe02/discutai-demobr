import type { Metadata } from 'next';
import Script from 'next/script';
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
  return (
    <>
      <CabeleireiroClient />
      {/*
        Script injecté depuis le server component → échappe totalement à React Strict Mode.
        1) Le script inline définit window.DiscutAIWidget AVANT que loader.js s'exécute.
        2) loader.js est chargé juste après (afterInteractive garantit l'ordre dans Next.js).
      */}
      <Script id="discutai-jessica-config" strategy="afterInteractive">{`
        window.DiscutAIWidget = {
          config: {
            assistantWorkspaceId: "8fd31883-b679-4bbd-a5cd-f159c26aba06",
            assistantName: "Jessica",
            themeColor: "#ff3100",
            position: "bottom-right",
            welcomeMessage: "Ola bom dia",
            showAvatar: true,
            width: 350,
            height: 500,
            logoUrl: "https://veztjskcirpqzdwizxxn.supabase.co/storage/v1/object/public/assistants-avatars/103833e0-68ad-42e3-bf06-add3d4c5bb10.jpg",
            baseUrl: "https://v2.discutai.com"
          }
        };
      `}</Script>
      <Script
        id="discutai-widget-loader"
        src="https://v2.discutai.com/widget/loader.js"
        strategy="afterInteractive"
      />
    </>
  );
}
