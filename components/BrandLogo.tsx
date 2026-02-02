import { ThemeId } from '@/lib/themes';

interface BrandLogoProps {
  themeId: ThemeId;
  variant: 'mark' | 'mono';
  className?: string;
}

export default function BrandLogo({ themeId, variant, className = '' }: BrandLogoProps) {
  const logoAlt = variant === 'mark'
    ? `Logo ${themeId}`
    : `Monograma ${themeId}`;

  // Logos Mark (icônes complètes)
  const renderMark = () => {
    switch (themeId) {
      case 'cabeleireiro':
        return (
          <svg viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label={logoAlt}>
            <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M8 7L16 12L8 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 12L20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 12L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'restaurante':
        return (
          <svg viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label={logoAlt}>
            <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 4V8C7 9 7.5 10 9 10C9 10 9 10 9 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M15 4V13M15 4C14 4 13 5 13 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M17 4V8C17 9 16.5 10 15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'imobiliaria':
        return (
          <svg viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M3 10L12 3L21 10V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 21V14H15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
            <path d="M12 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'dentista':
        return (
          <svg viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M8 4C8 4 6 4 6 6V12C6 14 7 16 8 18C8.5 19 9 21 9 21C9 21 9.5 19 10 18C11 16 11.5 15 11.5 13.5M16 4C16 4 18 4 18 6V12C18 14 17 16 16 18C15.5 19 15 21 15 21C15 21 14.5 19 14 18C13 16 12.5 15 12.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 6L20 7M20 4L21 4M18 4L18 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case 'generico':
        return (
          <svg viewBox="0 0 24 24" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="18" cy="6" r="1" fill="currentColor"/>
            <circle cx="6" cy="18" r="1" fill="currentColor"/>
          </svg>
        );
    }
  };

  // Logos Mono (monogrammes)
  const renderMono = () => {
    switch (themeId) {
      case 'cabeleireiro':
        return (
          <svg viewBox="0 0 48 48" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M14 16C14 16 14 12 18 12C22 12 22 14 22 16C22 18 20 19 18 19C20 19 23 20 23 23C23 26 20 28 17 28C14 28 12 26 12 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 12V28M28 12C28 12 30 12 32 14M28 28C28 28 30 28 33 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'restaurante':
        return (
          <svg viewBox="0 0 48 48" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M12 12V28M12 12C12 12 14 12 16 14C18 16 18 18 18 19C18 20 18 22 16 24C14 26 12 26 12 26M12 20H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 12L30 28M36 12L30 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'imobiliaria':
        return (
          <svg viewBox="0 0 48 48" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M12 28V12L22 22V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 12V28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="28" cy="20" r="1.5" fill="currentColor"/>
          </svg>
        );
      case 'dentista':
        return (
          <svg viewBox="0 0 48 48" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M14 16C14 16 14 12 18 12C22 12 22 14 22 16C22 18 20 19 18 19C20 19 23 20 23 23C23 26 20 28 17 28C14 28 12 26 12 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28 12V28M28 12H34M28 20H33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'generico':
        return (
          <svg viewBox="0 0 48 48" fill="none" className={className} role="img" aria-label={logoAlt}>
            <path d="M12 28V12L22 22V12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29 16C29 16 29 12 33 12C37 12 37 14 37 16C37 18 35 19 33 19C35 19 38 20 38 23C38 26 35 28 32 28C29 28 27 26 27 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };

  return variant === 'mark' ? renderMark() : renderMono();
}
