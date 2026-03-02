'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'vpoq9tpmls';

declare global {
  interface Window {
    __clarityInitialized?: boolean;
  }
}

export function ClarityInit() {
  useEffect(() => {
    if (!clarityProjectId || window.__clarityInitialized) {
      return;
    }

    Clarity.init(clarityProjectId);
    window.__clarityInitialized = true;
  }, []);

  return null;
}
