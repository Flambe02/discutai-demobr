import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Pimentão Rouge Company',
    short_name: 'TPRC',
    description:
      'Agência boutique de IA com inteligência conversacional, música para empresas e advisory estratégico.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    lang: 'pt-BR',
    // Tab/touch icons come from the app/ file conventions (favicon.ico, icon.png, apple-icon.png).
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
