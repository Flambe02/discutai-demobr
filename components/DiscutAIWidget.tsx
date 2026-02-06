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
      showAvatar: true,
      width: 350,
      height: 500,
      baseUrl: "https://v2.discutai.com",
    },
    cabeleireiro: {
      assistantWorkspaceId: "d3d97d6e-444b-41ce-8a52-ddd932e129c5",
      assistantName: "Ricar AI",
      themeColor: "#007bff",
      position: "bottom-right",
      welcomeMessage: "Bom dia, como posso ajudar?",
      showAvatar: true,
      width: 350,
      height: 500,
      logoUrl: "https://veztjskcirpqzdwizxxn.supabase.co/storage/v1/object/public/assistants-avatars/c1cb4d5c-bdc5-4d32-8f0f-ee095719f35d.jpg",
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

    // IMPORTANT: Définir la configuration AVANT de charger le script
    (window as any).DiscutAIWidget = { config };
    console.log('📋 Config définie:', (window as any).DiscutAIWidget);

    // Vérifier si le script existe déjà
    let existingScript = document.getElementById('discutai-widget-loader');
    if (existingScript) {
      console.log('ℹ️ Script déjà présent, suppression...');
      existingScript.remove();
    }

    // Charger le script DiscutAI avec le bon ID
    const script = document.createElement('script');
    script.id = 'discutai-widget-loader'; // ID attendu par le loader
    script.src = `https://v2.discutai.com/widget/loader.js?t=${Date.now()}`;
    script.async = true;

    script.onload = () => {
      console.log('✅ Script loader DiscutAI chargé');
    };

    script.onerror = () => {
      console.error('❌ Erreur chargement script loader DiscutAI');
    };

    document.body.appendChild(script);

    // Cleanup au démontage
    return () => {
      console.log('🧹 Cleanup widget DiscutAI');
      const s = document.getElementById('discutai-widget-loader');
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
