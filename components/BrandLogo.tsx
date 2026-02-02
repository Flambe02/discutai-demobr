import { logos } from '@/lib/logos';
import { ThemeId } from '@/lib/themes';

interface BrandLogoProps {
  themeId: ThemeId;
  variant: 'mark' | 'mono';
  className?: string;
}

export default function BrandLogo({ themeId, variant, className = '' }: BrandLogoProps) {
  const svgContent = logos[themeId][variant];
  const logoAlt = variant === 'mark'
    ? `Logo ${themeId}`
    : `Monograma ${themeId}`;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={logoAlt}
    />
  );
}
