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
      assistantName: "Assistente Restaurante",
      themeColor: "#F59E0B",
      position: "bottom-right",
      welcomeMessage: "Bem-vindo ao Restaurante Sabor & Arte! Como posso ajudar com reservas ou cardápio?",
      showAvatar: true,
      width: 350,
      height: 500,
      baseUrl: "https://v2.discutai.com",
    },
    generico: {
      assistantWorkspaceId: "87ab9a2d-8d18-45bd-b349-145f59254096",
      assistantName: "Assistente Empresa Modelo",
      themeColor: "#6366F1",
      position: "bottom-right",
      welcomeMessage: "Olá! Bem-vindo à Empresa Modelo. Como posso ajudar você hoje?",
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
      return;
    }

    const config = getWidgetConfig(theme.id);
    if (!config) return;

    // Nettoyer les widgets précédents si présents
    const existingScript = document.getElementById('discutai-widget-loader');
    if (existingScript) {
      existingScript.remove();
    }

    // Nettoyer la config précédente
    if (window.DiscutAIWidget) {
      delete window.DiscutAIWidget;
    }

    // Configurer le widget avant de charger le script
    window.DiscutAIWidget = { config };

    // Charger le script DiscutAI
    const script = document.createElement('script');
    script.id = 'discutai-widget-loader';
    script.src = 'https://v2.discutai.com/widget/loader.js';
    script.async = true;

    script.onload = () => {
      console.log('✅ DiscutAI Widget chargé pour le thème:', theme.id);
    };

    script.onerror = () => {
      console.error('❌ Erreur de chargement du widget DiscutAI');
    };

    document.body.appendChild(script);

    // Cleanup au démontage du composant
    return () => {
      const scriptToRemove = document.getElementById('discutai-widget-loader');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      if (window.DiscutAIWidget) {
        delete window.DiscutAIWidget;
      }
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
