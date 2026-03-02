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
      assistantWorkspaceId: "f1d98b7b-7940-4537-92ce-413af5fff017",
      assistantName: "Jessica",
      themeColor: "#f5a623",
      position: "bottom-right",
      welcomeMessage: "Olá, bom dia! ☺️ \nComo posso te ajudar hoje?",
      inputPlaceholder: "Digite sua mensagem...",
      showAvatar: true,
      width: 350,
      height: 500,
      logoUrl: "https://veztjskcirpqzdwizxxn.supabase.co/storage/v1/object/public/assistants-avatars/c20e5287-def7-47d8-a9b8-f174620e1bd4.jpg",
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
    const desiredInputPlaceholder = runtimeConfig.inputPlaceholder?.trim();
    const localizedLabels = {
      toggleOpen: 'Abrir o chat',
      close: 'Fechar o chat',
      send: 'Enviar mensagem',
    };
    const textOverrides: Record<string, string> = {
      "Je n'ai pas pu générer une réponse. Veuillez réessayer.": 'Nao consegui gerar uma resposta. Tente novamente.',
      "Erreur d'authentification. Veuillez vérifier votre configuration.": 'Erro de autenticacao. Verifique sua configuracao.',
      'Assistant non trouvé. Veuillez vérifier votre configuration.': 'Assistente nao encontrado. Verifique sua configuracao.',
      'Désolé, une erreur est survenue. Veuillez réessayer plus tard.': 'Desculpe, ocorreu um erro. Tente novamente mais tarde.',
    };
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    let cancelled = false;
    let visibilityCheckTimer: ReturnType<typeof setTimeout> | null = null;
    let placeholderSyncTimer: ReturnType<typeof setInterval> | null = null;
    let placeholderObserver: MutationObserver | null = null;

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

    const applyWidgetLocalization = () => {
      const widgetContainer = document.querySelector('.discutai-widget-container');
      if (!widgetContainer) return false;

      const toggleButton = widgetContainer.querySelector<HTMLButtonElement>('.discutai-widget-toggle');
      if (toggleButton && toggleButton.getAttribute('aria-label') !== localizedLabels.toggleOpen) {
        toggleButton.setAttribute('aria-label', localizedLabels.toggleOpen);
      }

      const closeButton = widgetContainer.querySelector<HTMLButtonElement>('.discutai-widget-close');
      if (closeButton && closeButton.getAttribute('aria-label') !== localizedLabels.close) {
        closeButton.setAttribute('aria-label', localizedLabels.close);
      }

      const sendButton = widgetContainer.querySelector<HTMLButtonElement>('.discutai-widget-send');
      if (sendButton && sendButton.getAttribute('aria-label') !== localizedLabels.send) {
        sendButton.setAttribute('aria-label', localizedLabels.send);
      }

      if (desiredInputPlaceholder) {
        const messageInputs = widgetContainer.querySelectorAll<HTMLTextAreaElement>(
          '.discutai-widget-input, textarea'
        );
        messageInputs.forEach(input => {
          if (input.placeholder !== desiredInputPlaceholder) {
            input.placeholder = desiredInputPlaceholder;
            input.setAttribute('placeholder', desiredInputPlaceholder);
          }
        });
      }

      const assistantMessages = widgetContainer.querySelectorAll<HTMLElement>('.discutai-widget-message.assistant');
      assistantMessages.forEach(messageNode => {
        const messageText = messageNode.textContent?.trim();
        if (!messageText) return;

        const localizedText = textOverrides[messageText];
        if (localizedText && messageText !== localizedText) {
          messageNode.textContent = localizedText;
        }
      });

      return true;
    };

    const startPlaceholderSync = () => {
      if (!placeholderSyncTimer) {
        let attempts = 0;
        placeholderSyncTimer = setInterval(() => {
          if (cancelled) return;
          const applied = applyWidgetLocalization();
          attempts += 1;
          if (applied || attempts >= 30) {
            if (placeholderSyncTimer) clearInterval(placeholderSyncTimer);
            placeholderSyncTimer = null;
          }
        }, 250);
      }

      if (!placeholderObserver) {
        placeholderObserver = new MutationObserver(() => {
          applyWidgetLocalization();
        });
        placeholderObserver.observe(document.body, { childList: true, subtree: true });
      }
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
          applyWidgetLocalization();
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

    startPlaceholderSync();
    loadWidget(1);

    // Cleanup au démontage
    return () => {
      cancelled = true;
      if (visibilityCheckTimer) clearTimeout(visibilityCheckTimer);
      if (placeholderSyncTimer) clearInterval(placeholderSyncTimer);
      if (placeholderObserver) placeholderObserver.disconnect();
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
