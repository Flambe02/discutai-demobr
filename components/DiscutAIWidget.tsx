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

    // Attendre un peu pour s'assurer que le cleanup précédent est terminé
    const initTimer = setTimeout(() => {
      // Configurer le widget
      window.DiscutAIWidget = { config };
      console.log('📋 Config définie:', config);

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
    }, 100);

    // Cleanup quand le composant est démonté
    return () => {
      console.log('🧹 Cleanup DiscutAI Widget');

      // Supprimer le script
      const scriptToRemove = document.getElementById('discutai-widget-loader');
      if (scriptToRemove) {
        scriptToRemove.remove();
        console.log('  ✓ Script supprimé');
      }

      // Supprimer les éléments du widget
      const widgetSelectors = [
        '[id^="discutai-widget"]',
        '[id*="discutai"]',
        '[class*="discutai"]',
        'iframe[src*="discutai"]',
      ];

      widgetSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el.parentNode && el.id !== 'discutai-widget-loader') {
            el.parentNode.removeChild(el);
          }
        });
      });

      // Nettoyer la config
      if (window.DiscutAIWidget) {
        delete window.DiscutAIWidget;
        console.log('  ✓ Config nettoyée');
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
