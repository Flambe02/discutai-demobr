'use client';

import dynamic from 'next/dynamic';

const GTranslateWidget = dynamic(() => import('@/components/GTranslateWidget'), {
  ssr: false,
});

export default function GTranslateLoader() {
  return <GTranslateWidget />;
}
