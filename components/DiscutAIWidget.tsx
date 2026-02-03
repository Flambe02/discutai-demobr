'use client';

import { useState, useEffect } from 'react';
import { Theme } from '@/lib/themes';

interface DiscutAIWidgetProps {
  theme: Theme;
}

// Configuration du widget par thème pour le vrai script DiscutAI
// Note: Widget DiscutAI uniquement sur le thème "generico"
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

// Configuration pour le widget de simulation (fallback en dev)
// Note: Widget DiscutAI uniquement sur le thème "generico"
const getSimulationConfig = (themeId: string) => {
  const configs: Record<string, { themeColor: string; welcomeMessage: string; brandName: string }> = {
    generico: {
      themeColor: "#6366F1",
      welcomeMessage: "Olá! Como posso ajudar hoje?",
      brandName: "Nexa Soluções",
    },
  };
  return configs[themeId];
};

// Composant de simulation du widget (pour localhost)
function SimulatedWidget({ config }: { config: { themeColor: string; welcomeMessage: string; brandName: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: `Obrigado pela sua mensagem! Este é um widget de demonstração. Em produção, o widget DiscutAI real será carregado.` 
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: config.themeColor }}
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div 
          className="fixed bottom-36 right-6 z-50 w-[350px] h-[450px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ border: `2px solid ${config.themeColor}` }}
        >
          <div className="px-4 py-3 text-white flex items-center gap-3" style={{ backgroundColor: config.themeColor }}>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm">Assistente Virtual</p>
              <p className="text-xs opacity-80">Modo Dev • Localhost</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto hover:bg-white/20 p-1 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3">
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: config.themeColor }}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                <p className="text-sm text-gray-700">{config.welcomeMessage}</p>
                <p className="text-xs text-orange-500 mt-2">⚠️ Mode développement (localhost)</p>
              </div>
            </div>

            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'bot' && (
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: config.themeColor }}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div 
                  className={`p-3 rounded-lg shadow-sm max-w-[80%] ${msg.role === 'user' ? 'text-white rounded-tr-none' : 'bg-white text-gray-700 rounded-tl-none'}`}
                  style={msg.role === 'user' ? { backgroundColor: config.themeColor } : undefined}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 text-gray-700"
              />
              <button onClick={handleSend} className="px-4 py-2 text-white rounded-lg" style={{ backgroundColor: config.themeColor }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-orange-500 mt-2 text-center">
              🔧 Widget simulé • En production, DiscutAI sera chargé
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default function DiscutAIWidget({ theme }: DiscutAIWidgetProps) {
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    // Détecter si on est en localhost
    const hostname = window.location.hostname;
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
    setIsLocalhost(isLocal);

    // Si pas en localhost, charger le vrai script DiscutAI
    if (!isLocal) {
      const config = getWidgetConfig(theme.id);
      if (!config) return;

      // Configurer le widget
      (window as any).DiscutAIWidget = { config };

      // Charger le script
      const script = document.createElement('script');
      script.id = 'discutai-widget-script';
      script.src = `https://v2.discutai.com/widget/loader.js?t=${Date.now()}`;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const s = document.getElementById('discutai-widget-script');
        if (s) s.remove();
        document.querySelectorAll('[id*="discutai"], [class*="discutai"]').forEach(el => el.remove());
        delete (window as any).DiscutAIWidget;
      };
    }
  }, [theme.id]);

  // En localhost, afficher le widget simulé
  if (isLocalhost) {
    const simConfig = getSimulationConfig(theme.id);
    if (!simConfig) return null;
    return <SimulatedWidget config={simConfig} />;
  }

  // En production, le widget est chargé par le script externe
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
