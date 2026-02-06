'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import BotWidget from '@/components/BotWidget';
import DiscutAIWidget from '@/components/DiscutAIWidget';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import FooterThemeSwitcher from '@/components/FooterThemeSwitcher';
import BrandLogo from '@/components/BrandLogo';
import TPRCLanding from '@/components/TPRCLanding';
import { ThemeId } from '@/lib/themes';
// Note: LucyLanding a été supprimé - le thème "lucy" n'existe plus
import {
  getThemeFromQuery,
  getThemeFromLocalStorage,
  resolveTheme,
  getTheme,
} from '@/lib/themeUtils';

function HomeContent() {
  const searchParams = useSearchParams();
  const [currentThemeId, setCurrentThemeId] = useState<ThemeId>('tprc');
  const [isClient, setIsClient] = useState(false);

  // Hydration et résolution du thème
  useEffect(() => {
    setIsClient(true);
    const queryTheme = getThemeFromQuery(searchParams);
    const localTheme = getThemeFromLocalStorage();
    const resolvedTheme = resolveTheme(queryTheme, localTheme);
    setCurrentThemeId(resolvedTheme);
  }, [searchParams]);

  const theme = getTheme(currentThemeId);

  // Fonction pour ouvrir le bot/widget
  const openBot = () => {
    // Cette fonction sera appelée par le CTA pour ouvrir le bot
    if (currentThemeId === 'generico') {
      // Pour le thème generico UNIQUEMENT, chercher et cliquer sur le bouton DiscutAI
      const discutaiButton =
        document.querySelector('[id*="discutai"][role="button"]') as HTMLButtonElement ||
        document.querySelector('[class*="discutai"][role="button"]') as HTMLButtonElement ||
        document.querySelector('iframe[src*="discutai"]')?.previousElementSibling as HTMLButtonElement ||
        document.querySelector('[id^="discutai"] button') as HTMLButtonElement;

      if (discutaiButton) {
        discutaiButton.click();
      } else {
        console.log('⚠️ Bouton DiscutAI non trouvé - le widget est peut-être encore en chargement');
      }
    } else {
      // Pour les autres thèmes, utiliser le BotWidget standard
      const botButton = document.querySelector('[aria-label="Abrir assistente virtual"]') as HTMLButtonElement;
      if (botButton) {
        botButton.click();
      }
    }
  };

  // Fonction pour ouvrir le popup Calendly (cabeleireiro)
  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/thepimentaorougecompany/30min'
      });
    }
  };

  // Exposer une fonction globale pour ouvrir le widget (utile pour les boutons CTA)
  useEffect(() => {
    (window as any).openChatWidget = openBot;
    return () => {
      delete (window as any).openChatWidget;
    };
  }, [currentThemeId, openBot]);

  // Config et chargement DiscutAI pour cabeleireiro
  useEffect(() => {
    if (currentThemeId === 'cabeleireiro') {
      // 1. Définir la config
      (window as any).DiscutAIWidget = {
        config: {
          assistantWorkspaceId: "d3d97d6e-444b-41ce-8a52-ddd932e129c5",
          assistantName: "Ricar AI",
          themeColor: "#007bff",
          position: "bottom-right",
          welcomeMessage: "Bom dia, como posso ajudar ? ",
          showAvatar: true,
          width: 350,
          height: 500,
          logoUrl: "https://veztjskcirpqzdwizxxn.supabase.co/storage/v1/object/public/assistants-avatars/c1cb4d5c-bdc5-4d32-8f0f-ee095719f35d.jpg",
          baseUrl: "https://v2.discutai.com"
        }
      };

      // 2. Charger le script seulement s'il n'est pas déjà chargé
      if (!document.getElementById('discutai-widget-loader')) {
        const script = document.createElement('script');
        script.id = 'discutai-widget-loader';
        script.src = 'https://v2.discutai.com/widget/loader.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [currentThemeId]);

  // Éviter le flash de contenu avant hydration
  if (!isClient) {
    return null;
  }

  // Page d'accueil TPRC (Landing page premium de l'agence)
  // Pas de FooterThemeSwitcher sur la homepage TPRC
  if (currentThemeId === 'tprc') {
    return <TPRCLanding />;
  }


  return (
    <div className="min-h-screen">
      {/* Header Sticky */}
      <header className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Logo et brand */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center p-2.5"
                style={{ background: `linear-gradient(135deg, ${theme.accentColor}, ${theme.gradientSecondary})` }}
              >
                <BrandLogo
                  themeId={currentThemeId}
                  variant="mono"
                  className="w-full h-full text-white"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{theme.brandName}</h1>
                <p className="text-sm text-gray-400">{theme.tagline}</p>
              </div>
            </div>

            {/* Badges et info */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <span>📍</span>
                <span className="hidden lg:inline">{theme.address.split(',')[0]}</span>
                <span className="lg:hidden">Ver endereço</span>
              </div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <span>🕐</span>
                <span className="hidden md:inline">{theme.hours.split('|')[0].trim()}</span>
                <span className="md:hidden">Horários</span>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/10 rounded-lg">
                <span>⭐</span>
                <span className="text-sm font-semibold text-yellow-500">4,8</span>
                <span className="text-xs text-gray-400">(312)</span>
              </div>

              {/* CTA principal */}
              {currentThemeId === 'cabeleireiro' ? (
                <button
                  onClick={openCalendly}
                  className="px-5 py-2 rounded-lg font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  Reservar horário
                </button>
              ) : (
                <button
                  onClick={openBot}
                  className="px-5 py-2 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  {theme.ctaPrimaryLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero theme={theme} />

      {/* Gallery Section */}
      <Gallery theme={theme} />

      {/* Section: Deux cards (Services + Infos) */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card Services */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🎯</span>
                Nossos serviços
              </h2>
              <ul className="space-y-3">
                {theme.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5" style={{ color: theme.accentColor }}>✓</span>
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Infos */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>ℹ️</span>
                Informações úteis
              </h2>
              <ul className="space-y-3">
                {theme.infos.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5" style={{ color: theme.accentColor }}>•</span>
                    <span className="text-gray-300">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Événements / Réservation de salle (restaurante uniquement) */}
      {theme.eventsSection && (
        <section className="py-12 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 flex items-center justify-center gap-2">
                <span>🎉</span>
                {theme.eventsSection.title}
              </h2>
              <p className="text-gray-300 text-lg">
                {theme.eventsSection.subtitle}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
              {theme.eventsSection.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl text-left border border-gray-700 bg-gray-800/50 hover:border-gray-600 transition-colors"
                  style={{ borderColor: `${theme.accentColor}30` }}
                >
                  <span className="text-xl shrink-0" style={{ color: theme.accentColor }}>✓</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={openBot}
                className="px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${theme.accentColor}, ${theme.gradientSecondary})` }}
              >
                {theme.eventsSection.ctaLabel}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Section: Trois cards (Pourquoi + Bot Examples + Contact) */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card Pourquoi */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💡</span>
                Por que escolher a gente
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {theme.whyText}
              </p>
            </div>

            {/* Card Bot Examples */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💬</span>
                Peça ao Bot
              </h2>
              <p className="text-sm text-gray-400 mb-4">
                Exemplos do que você pode perguntar:
              </p>
              <ul className="space-y-2">
                {theme.botExamples.map((example, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-300 px-3 py-2 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
                    onClick={openBot}
                  >
                    "{example}"
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Contact */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-colors">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📞</span>
                Contato
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">Telefone:</span>
                  <a href={`tel:${theme.phone}`} className="text-gray-300 hover:text-white">
                    {theme.phone}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">WhatsApp:</span>
                  <a
                    href={`https://wa.me/${theme.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300"
                  >
                    {theme.whatsapp}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">E-mail:</span>
                  <a href={`mailto:${theme.email}`} className="text-gray-300 hover:text-white break-all">
                    {theme.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400">Endereço:</span>
                  <span className="text-gray-300 flex-1">
                    {theme.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {currentThemeId === 'cabeleireiro'
              ? 'Agende seu horário online de forma rápida e prática. Escolha o melhor momento para você!'
              : 'Nosso assistente virtual está disponível 24 horas por dia para atender você. Clique no botão abaixo e comece agora mesmo!'}
          </p>
          {currentThemeId === 'cabeleireiro' ? (
            <button
              onClick={openCalendly}
              className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:scale-105 transition-transform shadow-xl cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${theme.accentColor}, ${theme.gradientSecondary})` }}
            >
              Reservar horário agora
            </button>
          ) : (
            <button
              onClick={openBot}
              className="px-8 py-4 rounded-xl font-bold text-lg text-white hover:scale-105 transition-transform shadow-xl"
              style={{ background: `linear-gradient(135deg, ${theme.accentColor}, ${theme.gradientSecondary})` }}
            >
              {theme.ctaPrimaryLabel} agora
            </button>
          )}
        </div>
      </section>

      {/* Bot Widget - Afficher WhatsApp pour restaurant, DiscutAI pour generico, rien pour cabeleireiro (DiscutAI via script), BotWidget pour les autres */}
      {currentThemeId === 'restaurante' ? (
        <WhatsAppWidget theme={theme} phoneNumber="+5511973953946" />
      ) : currentThemeId === 'generico' ? (
        <DiscutAIWidget theme={theme} />
      ) : currentThemeId === 'cabeleireiro' ? (
        null // DiscutAI Ricar AI chargé via script
      ) : (
        <BotWidget theme={theme} />
      )}

      {/* Calendly Popup Widget - Cabeleireiro uniquement */}
      {currentThemeId === 'cabeleireiro' && (
        <>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </>
      )}

      {/* DiscutAI Widget - Ricar AI - Chargé via useEffect */}

      {/* Footer Theme Switcher */}
      <FooterThemeSwitcher currentTheme={currentThemeId} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-900" />}>
      <HomeContent />
    </Suspense>
  );
}
