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
        IIFE unique injectée depuis le server component → échappe à React Strict Mode.
        Avantages vs 2 scripts séparés :
        - Pas de race condition : loader.js est créé APRÈS que window.DiscutAIWidget.config soit défini
        - Pas de déduplication Next.js : un seul id, le script loader.js est injecté dynamiquement
        - Cache-buster sur loader.js : évite les anciens bundles mis en cache par le navigateur
        - Nettoyage préalable : supprime tout vestige d'une instance précédente (navigation SPA)
      */}
      <Script id="discutai-jessica-init" strategy="afterInteractive">{`
        (function() {
          // 1. Nettoyer tout vestige d'instance précédente (widget.js + loader.js + DOM)
          document.querySelectorAll('script[src*="discutai.com/widget"]').forEach(function(el) { el.remove(); });
          document.querySelectorAll('[id*="discutai"], [class*="discutai"]').forEach(function(el) { el.remove(); });
          delete window.DiscutAIWidget;

          // 2. Définir la config Jessica AVANT de charger loader.js
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

          // 3. Charger loader.js dynamiquement — config déjà en place, zéro race condition
          var s = document.createElement('script');
          s.id = 'discutai-widget-loader';
          s.src = 'https://v2.discutai.com/widget/loader.js?t=' + Date.now();
          document.body.appendChild(s);
        })();
      `}</Script>
    </>
  );
}
