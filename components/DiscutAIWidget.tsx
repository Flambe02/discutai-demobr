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
    console.log('🔄 DiscutAIWidget useEffect - theme:', theme.id);

    // Fonction de nettoyage agressive
    const cleanupWidget = () => {
      console.log('🧹 Nettoyage complet du widget DiscutAI');

      // Supprimer le script
      const scriptToRemove = document.getElementById('discutai-widget-loader');
      if (scriptToRemove) {
        scriptToRemove.remove();
        console.log('  ✓ Script supprimé');
      }

      // Supprimer TOUS les éléments du widget (utiliser querySelectorAll pour tout supprimer)
      const selectors = [
        '[id*="discutai"]',
        '[class*="discutai"]',
        'iframe[src*="discutai"]',
        '[data-discutai]',
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (el && el.parentNode) {
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

    // Vérifier si ce thème doit avoir le widget DiscutAI
    if (theme.id !== 'restaurante' && theme.id !== 'generico') {
      console.log('⚠️ Thème sans DiscutAI - nettoyage seulement');
      cleanupWidget();
      return;
    }

    const config = getWidgetConfig(theme.id);
    if (!config) {
      console.log('❌ Pas de config pour ce thème');
      return;
    }

    // Nettoyer complètement avant de charger le nouveau widget
    cleanupWidget();

    // Configurer le widget avant de charger le script
    console.log('🔧 Configuration DiscutAI Widget:', config);
    window.DiscutAIWidget = { config };

    // Attendre pour s'assurer que le cleanup est terminé
    const loadTimeout = setTimeout(() => {
      console.log('📦 Chargement du script DiscutAI...');

      // Charger le script DiscutAI avec cache-busting pour forcer le rechargement
      const script = document.createElement('script');
      script.id = 'discutai-widget-loader';
      script.src = `https://v2.discutai.com/widget/loader.js?v=${Date.now()}`;
      script.async = true;

      script.onload = () => {
        console.log('✅ DiscutAI Widget chargé pour le thème:', theme.id);
        console.log('📋 Config finale:', window.DiscutAIWidget);
      };

      script.onerror = () => {
        console.error('❌ Erreur de chargement du widget DiscutAI');
      };

      document.body.appendChild(script);
    }, 300);

    // Cleanup au changement de thème ou démontage du composant
    return () => {
      console.log('🔄 Changement de thème - cleanup');
      clearTimeout(loadTimeout);
      cleanupWidget();
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
