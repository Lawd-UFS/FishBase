'use client';

import { useAuthLayout } from '@/contexts/AuthLayoutContext';
import { useEffect } from 'react';

export default function LoginPage() {
  const { setBannerImage } = useAuthLayout();

  useEffect(() => {
    setBannerImage('/register-banner.png');
  }, []);

  return null;
}
