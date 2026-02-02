'use client';

import { useEffect } from 'react';
import { Theme } from '@/lib/themes';

interface DiscutAIWidgetProps {
  theme: Theme;
}

// Configuration du widget par thème
const getWidgetConfig = (themeId: string) => {
  const configs = {
    restaurante: {
      assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096",
      assistantName: "TRPC Test",
      apiKey: "discutai_5a75e24f7d924e1b8ec34414e6cbb0be",
      themeColor: "#F59E0B",
      position: "bottom-right",
      welcomeMessage: "Bom dia, como posso ajudar hoje?",
      showAvatar: true,
      width: 350,
      height: 500,
      baseUrl: "https://v2.discutai.com",
    },
    generico: {
      assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096",
      assistantName: "TRPC Test",
      apiKey: "discutai_5a75e24f7d924e1b8ec34414e6cbb0be",
      themeColor: "#6366F1",
      position: "bottom-right",
      welcomeMessage: "Bom dia, como posso ajudar hoje?",
      showAvatar: true,
      width: 350,
      height: 500,
      baseUrl: "https://v2.discutai.com",
    },
  };

  return configs[themeId as keyof typeof configs];
};

export default function DiscutAIWidget({ theme }: DiscutAIWidgetProps) {
  useEffect(() => {
    const config = getWidgetConfig(theme.id);
    if (!config) return;

    console.log('🔧 Initialisation DiscutAI Widget');

    // Configurer le widget
    window.DiscutAIWidget = { config };

    // Vérifier si le script existe déjà
    let script = document.getElementById('discutai-widget-loader') as HTMLScriptElement;

    if (!script) {
      console.log('📦 Chargement du script DiscutAI');
      // Charger le script seulement s'il n'existe pas
      script = document.createElement('script');
      script.id = 'discutai-widget-loader';
      script.src = 'https://v2.discutai.com/widget/loader.js';
      script.async = true;

      script.onload = () => {
        console.log('✅ Script DiscutAI chargé');
      };

      script.onerror = () => {
        console.error('❌ Erreur de chargement du script DiscutAI');
      };

      document.body.appendChild(script);
    } else {
      console.log('ℹ️ Script DiscutAI déjà présent');
    }

    // Cleanup quand le composant est démonté
    return () => {
      console.log('🧹 Cleanup DiscutAI Widget');

      // NE PAS supprimer le script - le laisser en place
      // Supprimer seulement les éléments du widget
      const widgetContainer = document.querySelector('[id^="discutai-widget"]');
      if (widgetContainer && widgetContainer.parentNode) {
        widgetContainer.parentNode.removeChild(widgetContainer);
      }

      // Nettoyer la config
      if (window.DiscutAIWidget) {
        delete window.DiscutAIWidget;
      }
    };
  }, []); // Exécuter seulement au montage/démontage

  // Ce composant ne rend rien (le widget est injecté par le script)
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
