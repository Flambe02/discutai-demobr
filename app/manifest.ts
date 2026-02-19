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
    icons: [
      {
        src: '/images/pimentao-rouge-logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
