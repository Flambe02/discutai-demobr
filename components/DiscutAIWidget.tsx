'use client';

import { useEffect } from 'react';
import { Theme } from '@/lib/themes';

interface DiscutAIWidgetProps {
  theme: Theme;
}

// Configuration du widget DiscutAI par thème
const getWidgetConfig = (themeId: string) => {
  const configs: Record<string, object> = {
    generico: {
      assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096",
      assistantName: "TRPC Test",
      apiKey: "discutai_5a75e24f7d924e1b8ec34414e6cbb0be",
      themeColor: "#6366F1",
      position: "bottom-right",
      welcomeMessage: "Olá! Como posso ajudar hoje?",
      inputPlaceholder: "Digite sua mensagem...",
      showAvatar: true,
      width: 350,
      height: 500,
      baseUrl: "https://v2.discutai.com",
    },
    cabeleireiro: {
      assistantWorkspaceId: "8fd31883-b679-4bbd-a5cd-f159c26aba06",
      assistantName: "Jessica",
      themeColor: "#ff3100",
      position: "bottom-right",
      welcomeMessage: "Ola bom dia",
      inputPlaceholder: "Digite sua mensagem...",
      showAvatar: true,
      width: 350,
      height: 500,
      logoUrl: "https://veztjskcirpqzdwizxxn.supabase.co/storage/v1/object/public/assistants-avatars/103833e0-68ad-42e3-bf06-add3d4c5bb10.jpg",
      baseUrl: "https://v2.discutai.com",
    },
  };

  return configs[themeId];
};

export default function DiscutAIWidget({ theme }: DiscutAIWidgetProps) {
  useEffect(() => {
    // Ne pas charger le widget sur mobile - nettoyer et quitter
    if (window.innerWidth <= 768) {
      document.querySelectorAll('[id*="discutai"], [class*="discutai"]').forEach(el => el.remove());
      const s = document.getElementById('discutai-widget-loader');
      if (s) s.remove();
      delete (window as any).DiscutAIWidget;
      return;
    }

    const config = getWidgetConfig(theme.id);
    if (!config) return;

    // Nettoyer tout élément précédent
    document.querySelectorAll('[id*="discutai"], [class*="discutai"]').forEach(el => el.remove());
    const oldScript = document.getElementById('discutai-widget-loader');
    if (oldScript) oldScript.remove();
    delete (window as any).DiscutAIWidget;

    // Définir la config
    (window as any).DiscutAIWidget = { config };

    // Charger le script avec cache-busting
    const script = document.createElement('script');
    script.id = 'discutai-widget-loader';
    script.src = `https://v2.discutai.com/widget/loader.js?t=${Date.now()}`;
    document.body.appendChild(script);

    // Cleanup au démontage
    return () => {
      const s = document.getElementById('discutai-widget-loader');
      if (s) s.remove();
      document.querySelectorAll('[id*="discutai"], [class*="discutai"]').forEach(el => el.remove());
      delete (window as any).DiscutAIWidget;
    };
  }, [theme.id]);

  return null;
}

// Déclaration TypeScript pour window.DiscutAIWidget
declare global {
  interface Window {
    DiscutAIWidget?: {
      config: {
        assistantWorkspaceId: string;
        assistantName: string;
        apiKey: string;
        themeColor: string;
        position: string;
        welcomeMessage: string;
        showAvatar: boolean;
        width: number;
        height: number;
        baseUrl: string;
      };
    };
  }
}
