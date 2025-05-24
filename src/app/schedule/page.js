'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Schedule() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#schedule');
  }, [router]);

  return null;
}
