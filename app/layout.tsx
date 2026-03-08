import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { ClarityInit } from '@/components/ClarityInit';
import './globals.css';
import './discutai-widget-fix.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });
const gtmContainerId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || 'GTM-TCF2KT3Q';

const baseUrl = 'https://www.pimentaorouge.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'TPRC | Agência Boutique de IA',
    template: '%s | TPRC',
  },
  description:
    'The Pimentão Rouge Company (TPRC): agência boutique de IA premium no Brasil especializada em Digital Employees, AI Music Branding, consultoria estratégica e capacitação em IA generativa.',
  keywords: [
    'TPRC',
    'Pimentão Rouge',
    'agência boutique de IA',
    'agência de inteligência artificial',
    'inteligência artificial Brasil',
    'digital employee',
    'funcionário digital',
    'agente IA',
    'IA conversacional',
    'chatbot inteligente',
    'assistente virtual',
    'AI music branding',
    'música para sua empresa',
    'identidade sonora',
    'advisory payments',
    'consultoria IA',
    'capacitação IA generativa',
    'workshop IA executivos',
    'DiscutAI',
  ],
  icons: {
    icon: [
      { url: '/images/pimentao-rouge-logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/images/pimentao-rouge-logo.png',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'The Pimentão Rouge Company',
  alternateName: ['TPRC', 'Pimentão Rouge'],
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${baseUrl}/images/pimentao-rouge-logo.png`,
    width: 512,
    height: 512,
  },
  email: 'florent.lambert@pimentaorouge.com',
  description:
    'Boutique de IA premium no Brasil especializada em Digital Employees, AI Music Branding, consultoria estratégica e capacitação corporativa em IA generativa.',
  foundingDate: '2024',
  areaServed: [
    { '@type': 'Country', name: 'Brazil' },
    { '@type': 'ContinentOrRegion', name: 'Europe' },
  ],
  knowsLanguage: ['pt-BR', 'en', 'fr'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'florent.lambert@pimentaorouge.com',
      areaServed: ['BR', 'EU'],
      availableLanguage: ['pt-BR', 'en', 'fr'],
    },
  ],
  sameAs: [
    'https://www.youtube.com/@ThePimentaoRougeCompany',
    'https://www.linkedin.com/company/the-pimentao-rouge-company/',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  name: 'The Pimentão Rouge Company',
  alternateName: 'TPRC',
  url: baseUrl,
  inLanguage: 'pt-BR',
  publisher: { '@id': `${baseUrl}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {gtmContainerId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmContainerId}');`,
            }}
          />
        ) : null}
      </head>
      <body className={`${inter.className} ${poppins.variable} antialiased`} suppressHydrationWarning>
        {gtmContainerId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        <ClarityInit />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
