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
    if (langCode === currentLang) {
      setIsOpen(false);
      return;
    }

    setCurrentLang(langCode);
    setIsOpen(false);

    // Si retour au portugais (langue originale), supprimer le cookie et recharger
    if (langCode === 'pt') {
      // Supprimer les cookies Google Translate
      document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = `googtrans=; path=/; domain=.${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      // Recharger pour afficher le contenu original
      window.location.reload();
      return;
    }

    // Pour les autres langues, définir le cookie et recharger
    document.cookie = `googtrans=/pt/${langCode}; path=/`;
    document.cookie = `googtrans=/pt/${langCode}; path=/; domain=.${window.location.hostname}`;

    window.location.reload();
  };

  const currentLanguage = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <>
      {/* Google Translate element caché */}
      <div id="google_translate_element" className="hidden" />

      {/* Notre dropdown custom - Position: bottom right */}
      <div ref={dropdownRef} className="fixed bottom-4 right-4 z-[9998] sm:bottom-5 sm:right-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium
                     bg-black/60 hover:bg-black/80 border border-white/10 hover:border-white/20
                     backdrop-blur-md transition-all duration-200 text-gray-300 hover:text-white
                     shadow-lg shadow-black/20"
          aria-label="Sélectionner la langue"
        >
          <Globe className="w-3.5 h-3.5 opacity-60" />
          <span>{currentLanguage.flag}</span>
          <span>{currentLanguage.name}</span>
          <ChevronDown className={`w-3 h-3 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown - Opens upward */}
        {isOpen && (
          <div className="absolute bottom-full right-0 mb-1.5 py-1 rounded-lg
                          bg-[#0a0a0a]/95 border border-white/10 backdrop-blur-xl
                          shadow-xl shadow-black/30 min-w-[100px] overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs transition-colors
                           ${currentLang === lang.code
                             ? 'bg-white/10 text-white'
                             : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
