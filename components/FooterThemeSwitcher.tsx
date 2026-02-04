'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ThemeId, themeLabels, themeIds } from '@/lib/themes';
import { setThemeInLocalStorage } from '@/lib/themeUtils';
import { useState } from 'react';

interface FooterThemeSwitcherProps {
  currentTheme: ThemeId;
}

export default function FooterThemeSwitcher({ currentTheme }: FooterThemeSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [copySuccess, setCopySuccess] = useState(false);

  const handleThemeChange = (newTheme: ThemeId) => {
    if (newTheme === currentTheme) return;

    // Mettre à jour localStorage
    setThemeInLocalStorage(newTheme);

    // Mettre à jour l'URL sans reload complet (shallow routing)
    const params = new URLSearchParams(searchParams.toString());
    params.set('theme', newTheme);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleCopyLink = async () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}?theme=${currentTheme}`;
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Erro ao copiar link:', error);
    }
  };

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 py-4 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-3">
          {/* Ligne 1 : Sélecteur de thème */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
            {/* Logo + Label */}
            <div className="flex items-center gap-3">
              <Link
                href="/?theme=tprc"
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
                title="Voltar para a home TPRC"
              >
                <img
                  src="/images/pimentao-rouge-logo.png"
                  alt="The Pimentão Rouge Company"
                  className="h-7 w-auto"
                />
              </Link>
              <div className="text-gray-400 text-sm font-medium">
                Modo Demo:
              </div>
            </div>

            {/* Boutons de thème (exclure TPRC car c'est la landing page de l'agence) */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {themeIds
                .filter((id) => id !== 'tprc') // Exclure TPRC du sélecteur de démo
                .map((themeId) => (
                <button
                  key={themeId}
                  onClick={() => handleThemeChange(themeId)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    currentTheme === themeId
                      ? 'bg-white text-gray-900 shadow-lg scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {themeLabels[themeId]}
                </button>
              ))}
            </div>

            {/* Bouton copier lien */}
            <button
              onClick={handleCopyLink}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2"
              title="Copiar link da demo"
            >
              {copySuccess ? (
                <>
                  <span>✓</span>
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <span>🔗</span>
                  <span className="hidden sm:inline">Copiar link</span>
                </>
              )}
            </button>
          </div>

          {/* Ligne 2 : Disclaimer */}
          <div className="text-gray-500 text-xs text-center">
            Para TPRC (2026) Demo site - DiscutaiBR
          </div>
        </div>
      </div>
    </footer>
  );
}
