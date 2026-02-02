'use client';

import { useState, useEffect } from 'react';
import { Theme } from '@/lib/themes';

interface BotWidgetProps {
  theme: Theme;
}

type EmbedMode = 'placeholder' | 'iframe' | 'script';

interface DemoMessage {
  role: 'user' | 'bot';
  content: string;
}

export default function BotWidget({ theme }: BotWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [demoMessages, setDemoMessages] = useState<DemoMessage[]>([]);
  const [demoInput, setDemoInput] = useState('');

  // Récupérer les variables d'environnement
  const embedMode: EmbedMode = (process.env.NEXT_PUBLIC_BOT_EMBED_MODE as EmbedMode) || 'placeholder';
  const iframeUrl = process.env.NEXT_PUBLIC_BOT_IFRAME_URL;
  const scriptSrc = process.env.NEXT_PUBLIC_BOT_SCRIPT_SRC;

  // Initialiser la conversation en mode demo
  useEffect(() => {
    if (isDemoMode && isOpen && demoMessages.length === 0) {
      setDemoMessages([
        { role: 'bot', content: theme.botGreeting }
      ]);
    }
  }, [isDemoMode, isOpen, theme.botGreeting, demoMessages.length]);

  const handleDemoSend = () => {
    if (!demoInput.trim()) return;

    // Ajouter le message utilisateur
    const userMessage: DemoMessage = { role: 'user', content: demoInput };
    setDemoMessages(prev => [...prev, userMessage]);

    // Simuler une réponse du bot
    setTimeout(() => {
      const botResponse: DemoMessage = {
        role: 'bot',
        content: `Entendi! Você perguntou sobre: "${demoInput}". Em uma integração real, nosso assistente processaria isso e responderia adequadamente. ${theme.botSubtitle}`
      };
      setDemoMessages(prev => [...prev, botResponse]);
    }, 800);

    setDemoInput('');
  };

  const renderEmbedContent = () => {
    // Mode démo avec messages scriptés
    if (isDemoMode) {
      return (
        <div className="flex-1 flex flex-col bg-gray-50 rounded-lg overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[400px]">
            {demoMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm'
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={demoInput}
                onChange={(e) => setDemoInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleDemoSend()}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              />
              <button
                onClick={handleDemoSend}
                className="px-4 py-2 text-sm font-medium text-white rounded-lg"
                style={{ backgroundColor: theme.accentColor }}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Mode live - embed réel
    if (embedMode === 'iframe' && iframeUrl) {
      return (
        <iframe
          src={iframeUrl}
          className="w-full h-[450px] border-0 rounded-lg"
          title="Assistente Virtual"
          allow="microphone"
        />
      );
    }

    if (embedMode === 'script' && scriptSrc) {
      return (
        <div className="flex-1 bg-gray-50 rounded-lg p-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
            <p className="font-semibold mb-2">⚙️ Modo Script</p>
            <p className="mb-2">Para usar o modo script, adicione o seguinte código ao seu site:</p>
            <pre className="bg-white p-3 rounded border border-yellow-300 overflow-x-auto text-xs">
              {`<script src="${scriptSrc}"></script>`}
            </pre>
            <p className="mt-2 text-xs text-yellow-700">
              O widget será carregado automaticamente após a inicialização do script.
            </p>
          </div>
        </div>
      );
    }

    // Placeholder par défaut
    return (
      <div className="flex-1 bg-gray-50 rounded-lg flex items-center justify-center p-6">
        <div className="text-center max-w-sm">
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Cole aqui seu widget
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Configure as variáveis de ambiente para integrar seu chatbot real.
          </p>
          <div className="text-xs text-left bg-white p-3 rounded border border-gray-200">
            <code className="text-gray-700">
              NEXT_PUBLIC_BOT_EMBED_MODE=iframe<br />
              NEXT_PUBLIC_BOT_IFRAME_URL=https://...
            </code>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 shadow-2xl rounded-full p-4 text-white font-medium flex items-center gap-2 hover:scale-105 transition-transform z-50"
          style={{ backgroundColor: theme.accentColor }}
          aria-label="Abrir assistente virtual"
        >
          <span className="text-2xl">💬</span>
          <span className="hidden sm:inline">Assistente</span>
        </button>
      )}

      {/* Widget ouvert */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col z-50"
          style={{ height: '600px', maxHeight: 'calc(100vh - 3rem)' }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 text-white rounded-t-2xl"
            style={{ background: `linear-gradient(135deg, ${theme.accentColor}, ${theme.gradientSecondary})` }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-bold text-lg">{theme.botTitle}</h3>
                <p className="text-sm text-white/90 mt-0.5">{theme.botSubtitle}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:text-white text-2xl leading-none -mt-1"
                aria-label="Fechar assistente"
              >
                ×
              </button>
            </div>

            {/* Toggle Modo Demo / Live */}
            <div className="flex items-center gap-2 mt-3 text-sm">
              <button
                onClick={() => {
                  setIsDemoMode(!isDemoMode);
                  setDemoMessages([]);
                }}
                className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors text-xs font-medium"
              >
                {isDemoMode ? '📱 Modo Demo' : '🔴 Modo Live'}
              </button>
              <span className="text-xs text-white/70">
                {isDemoMode ? 'Respostas simuladas' : 'Bot integrado'}
              </span>
            </div>
          </div>

          {/* Contenu */}
          <div className="flex-1 p-4 overflow-hidden flex flex-col">
            {renderEmbedContent()}
          </div>
        </div>
      )}
    </>
  );
}
