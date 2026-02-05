'use client';

import { useEffect, useState, useRef } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const languages = [
  { code: 'pt', name: 'PT', flag: '🇧🇷' },
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'it', name: 'IT', flag: '🇮🇹' },
];

declare global {
  interface Window {
    doGTranslate: (langPair: string) => void;
    google?: {
      translate?: {
        TranslateElement?: any;
      };
    };
  }
}

export default function GTranslateWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('pt');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Détecter la langue actuelle depuis le cookie Google Translate
    const detectCurrentLanguage = () => {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'googtrans' && value) {
          const langCode = value.split('/').pop();
          if (langCode && languages.some(l => l.code === langCode)) {
            setCurrentLang(langCode);
            return;
          }
        }
      }
    };

    detectCurrentLanguage();

    // Charger Google Translate
    if (!document.getElementById('gtranslate-script')) {
      (window as any).googleTranslateElementInit = function() {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'pt',
          includedLanguages: 'pt,en,fr,es,it',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        }, 'google_translate_element');
      };

      const script = document.createElement('script');
      script.id = 'gtranslate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    }

    // Fermer dropdown si clic extérieur
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false);

    // Si retour au portugais (langue originale), supprimer le cookie et recharger
    if (langCode === 'pt') {
      // Supprimer les cookies Google Translate - toujours le faire même si déjà sur PT
      document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = `googtrans=; path=/; domain=.${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      // Aussi essayer avec le domaine racine
      document.cookie = 'googtrans=; path=/; domain=.pimentaorouge.com; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      // Forcer le reload
      window.location.href = window.location.pathname;
      return;
    }

    // Pour les autres langues
    if (langCode !== currentLang) {
      setCurrentLang(langCode);
      document.cookie = `googtrans=/pt/${langCode}; path=/`;
      document.cookie = `googtrans=/pt/${langCode}; path=/; domain=.${window.location.hostname}`;
      window.location.reload();
    }
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <>
      {/* Google Translate element caché */}
      <div id="google_translate_element" className="hidden" />

      {/* Notre dropdown custom - Position: bottom right - notranslate empêche Google de traduire */}
      <div ref={dropdownRef} className="notranslate fixed bottom-4 right-4 z-[99999] sm:bottom-5 sm:right-5" translate="no">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onTouchStart={(e) => { e.stopPropagation(); }}
          onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
          className="flex items-center gap-2 px-3 py-2.5 sm:px-2.5 sm:py-1.5 rounded-lg text-sm sm:text-xs font-medium
                     bg-black/80 hover:bg-black/90 border border-white/20 hover:border-white/30
                     backdrop-blur-md transition-all duration-200 text-gray-200 hover:text-white
                     shadow-lg shadow-black/30 touch-manipulation select-none cursor-pointer"
          aria-label="Sélectionner la langue"
          style={{ WebkitTapHighlightColor: 'transparent', WebkitUserSelect: 'none' }}
        >
          <Globe className="w-4 h-4 sm:w-3.5 sm:h-3.5 opacity-70 pointer-events-none" />
          <span className="text-base sm:text-xs pointer-events-none">{currentLanguage.flag}</span>
          <span className="pointer-events-none">{currentLanguage.name}</span>
          <ChevronDown className={`w-3.5 h-3.5 sm:w-3 sm:h-3 opacity-50 transition-transform pointer-events-none ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown - Opens upward */}
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-2 py-1.5 rounded-lg
                          bg-[#0a0a0a] border border-white/15 backdrop-blur-xl
                          shadow-xl shadow-black/40 min-w-[120px] overflow-hidden z-[99999]">
            {languages.map((lang) => (
              <button
                type="button"
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                onTouchStart={(e) => { e.stopPropagation(); }}
                onTouchEnd={(e) => { e.preventDefault(); e.stopPropagation(); handleLanguageChange(lang.code); }}
                className={`w-full flex items-center gap-2.5 px-4 py-3 sm:px-3 sm:py-2 text-sm sm:text-xs transition-colors touch-manipulation select-none cursor-pointer
                           ${currentLang === lang.code
                             ? 'bg-white/15 text-white'
                             : 'text-gray-300 hover:text-white hover:bg-white/10 active:bg-white/20'}`}
                style={{ WebkitTapHighlightColor: 'transparent', WebkitUserSelect: 'none' }}
              >
                <span className="text-base sm:text-sm pointer-events-none">{lang.flag}</span>
                <span className="pointer-events-none">{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
