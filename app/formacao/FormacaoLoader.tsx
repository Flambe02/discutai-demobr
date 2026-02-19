'use client';

import dynamic from 'next/dynamic';

const FormacaoClient = dynamic(() => import('./FormacaoClient'), { ssr: false });

export default function FormacaoLoader() {
  return <FormacaoClient />;
}
