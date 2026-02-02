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
    // Vérifier si ce thème doit avoir le widget DiscutAI
    if (theme.id !== 'restaurante' && theme.id !== 'generico') {
      // Si ce n'est pas un thème avec DiscutAI, nettoyer tout widget existant
      const widgetContainers = [
        document.getElementById('discutai-widget-container'),
        document.querySelector('[id^="discutai"]'),
        document.querySelector('[class*="discutai"]'),
        document.querySelector('iframe[src*="discutai"]'),
      ];

      widgetContainers.forEach(container => {
        if (container && container.parentNode) {
          container.parentNode.removeChild(container);
        }
      });

      return;
    }

    const config = getWidgetConfig(theme.id);
    if (!config) return;

    // Nettoyer TOUS les widgets précédents de manière agressive
    const existingScript = document.getElementById('discutai-widget-loader');
    if (existingScript) {
      existingScript.remove();
    }

    // Supprimer tous les conteneurs de widget existants
    const existingWidgets = [
      document.getElementById('discutai-widget-container'),
      document.querySelector('[id^="discutai"]'),
      document.querySelector('[class*="discutai"]'),
      document.querySelector('iframe[src*="discutai"]'),
    ];

    existingWidgets.forEach(widget => {
      if (widget && widget.parentNode) {
        widget.parentNode.removeChild(widget);
      }
    });

    // Nettoyer la config précédente
    if (window.DiscutAIWidget) {
      delete window.DiscutAIWidget;
    }

    // Configurer le widget avant de charger le script
    console.log('🔧 Configuration DiscutAI Widget:', config);
    window.DiscutAIWidget = { config };

    // Attendre un peu pour s'assurer que la config est bien définie
    setTimeout(() => {
      // Charger le script DiscutAI
      const script = document.createElement('script');
      script.id = 'discutai-widget-loader';
      script.src = 'https://v2.discutai.com/widget/loader.js';
      script.async = true;

      script.onload = () => {
        console.log('✅ DiscutAI Widget chargé pour le thème:', theme.id);
        console.log('📋 Config finale:', window.DiscutAIWidget);
      };

      script.onerror = () => {
        console.error('❌ Erreur de chargement du widget DiscutAI');
      };

      document.body.appendChild(script);
    }, 100);

    // Cleanup au démontage du composant
    return () => {
      console.log('🧹 Nettoyage du widget DiscutAI');

      // Supprimer le script
      const scriptToRemove = document.getElementById('discutai-widget-loader');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }

      // Supprimer tous les éléments DOM du widget DiscutAI
      // Chercher tous les conteneurs possibles du widget
      const widgetContainers = [
        document.getElementById('discutai-widget-container'),
        document.querySelector('[id^="discutai"]'),
        document.querySelector('[class*="discutai"]'),
        document.querySelector('iframe[src*="discutai"]'),
        document.querySelector('[data-discutai]'),
      ];

      widgetContainers.forEach(container => {
        if (container && container.parentNode) {
          container.parentNode.removeChild(container);
        }
      });

      // Nettoyer la config
      if (window.DiscutAIWidget) {
        delete window.DiscutAIWidget;
      }

      console.log('✅ Widget DiscutAI nettoyé');
    };
  }, [theme.id]);

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
