'use client';

import { useEffect } from 'react';
import { Theme } from '@/lib/themes';

interface DiscutAIWidgetProps {
  theme: Theme;
}

interface DiscutAIWidgetConfig {
  assistantWorkspaceId: string;
  assistantName: string;
  apiKey?: string;
  themeColor: string;
  position: string;
  welcomeMessage: string;
  inputPlaceholder?: string;
  showAvatar: boolean;
  width?: number;
  height?: number;
  logoUrl?: string;
  baseUrl: string;
}

// Configuration du widget DiscutAI par thème
const getWidgetConfig = (themeId: string) => {
  const configs: Record<string, DiscutAIWidgetConfig> = {
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

  return configs[themeId] ?? null;
};

/** Supprime tous les scripts et éléments DOM liés à DiscutAI */
function cleanupDiscutAI() {
  // Supprime loader.js ET widget.js (chargé dynamiquement par loader.js)
  document.querySelectorAll('script[src*="discutai"]').forEach(el => el.remove());
  // Supprime les éléments UI du widget (bouton flottant, chat, iframes…)
  document.querySelectorAll('[id*="discutai"], [class*="discutai"]').forEach(el => el.remove());
  delete (window as any).DiscutAIWidget;
  delete (window as any).DiscutAIWidgetLoaded; // ← flag anti-double-init de loader.js — doit être reset
}

export default function DiscutAIWidget({ theme }: DiscutAIWidgetProps) {
  useEffect(() => {
    const config = getWidgetConfig(theme.id);
    if (!config) return;
    const runtimeConfig = { ...config };
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    let cancelled = false;
    let visibilityCheckTimer: ReturnType<typeof setTimeout> | null = null;

    // Mobile: laisser le widget appliquer sa taille par défaut.
    if (isMobile) {
      delete runtimeConfig.width;
      delete runtimeConfig.height;
    }

    const hasWidgetMounted = () => {
      return Boolean(
        document.querySelector('#discutai-widget-container') ||
          document.querySelector('[id*="discutai-widget"]') ||
          document.querySelector('[class*="discutai-widget"]') ||
          document.querySelector('iframe[src*="discutai"]')
      );
    };

    const loadWidget = (attempt: number) => {
      if (cancelled) return;

      // Nettoyer tout vestige d'une instance précédente
      cleanupDiscutAI();

      // Définir la config AVANT de charger le script
      (window as any).DiscutAIWidget = { config: runtimeConfig };

      const script = document.createElement('script');
      script.id = 'discutai-widget-loader';
      script.async = true;
      script.src = `https://v2.discutai.com/widget/loader.js?t=${Date.now()}-${attempt}`;

      script.onload = () => {
        if (cancelled) return;
        if (visibilityCheckTimer) clearTimeout(visibilityCheckTimer);

        // Vérifie que le widget est réellement rendu après chargement.
        visibilityCheckTimer = setTimeout(() => {
          if (cancelled) return;
          if (!hasWidgetMounted() && attempt < 2) {
            loadWidget(attempt + 1);
          }
        }, 1500);
      };

      script.onerror = () => {
        if (cancelled) return;
        if (attempt < 2) {
          loadWidget(attempt + 1);
        }
      };

      document.body.appendChild(script);
    };

    loadWidget(1);

    // Cleanup au démontage
    return () => {
      cancelled = true;
      if (visibilityCheckTimer) clearTimeout(visibilityCheckTimer);
      cleanupDiscutAI();
    };
  }, [theme.id]);

  return null;
}

// Déclaration TypeScript pour window.DiscutAIWidget
declare global {
  interface Window {
    DiscutAIWidget?: {
      config: DiscutAIWidgetConfig;
    };
  }
}
