'use client';

import { useEffect } from 'react';
import { Theme } from '@/lib/themes';

interface DiscutAIWidgetProps {
  theme: Theme;
}

// Configuration du widget DiscutAI pour le thème "generico"
const getWidgetConfig = (themeId: string) => {
  const configs: Record<string, object> = {
    generico: {
      assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096",
      assistantName: "TRPC Test",
      apiKey: "discutai_5a75e24f7d924e1b8ec34414e6cbb0be",
      themeColor: "#6366F1",
      position: "bottom-right",
      welcomeMessage: "Olá! Como posso ajudar hoje?",
      showAvatar: true,
      width: 350,
      height: 500,
      baseUrl: "https://v2.discutai.com",
    },
  };

  return configs[themeId];
};

export default function DiscutAIWidget({ theme }: DiscutAIWidgetProps) {
  useEffect(() => {
    const config = getWidgetConfig(theme.id);
    if (!config) return;

    console.log('🔧 Chargement widget DiscutAI pour:', theme.id);

    // Configurer le widget
    (window as any).DiscutAIWidget = { config };

    // Charger le script DiscutAI (toujours, dev et prod)
    const script = document.createElement('script');
    script.id = 'discutai-widget-script';
    script.src = `https://v2.discutai.com/widget/loader.js?t=${Date.now()}`;
    script.async = true;

    script.onload = () => {
      console.log('✅ Widget DiscutAI chargé');
    };

    script.onerror = () => {
      console.error('❌ Erreur chargement widget DiscutAI');
    };

    document.body.appendChild(script);

    // Cleanup au démontage
    return () => {
      console.log('🧹 Cleanup widget DiscutAI');
      const s = document.getElementById('discutai-widget-script');
      if (s) s.remove();
      // Supprimer tous les éléments injectés par le widget
      document.querySelectorAll('[id*="discutai"], [class*="discutai"]').forEach(el => el.remove());
      delete (window as any).DiscutAIWidget;
    };
  }, [theme.id]);

  // Le widget est rendu par le script externe
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
