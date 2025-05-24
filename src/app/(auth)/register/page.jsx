'use client';

import { useApp } from '@/contexts/AppContext';
import { useRegister } from '@/contexts/RegisterContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RegisterPage() {
  const { setIsLoading } = useApp();
  const { resetRegister } = useRegister();

  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    resetRegister();
    router.replace('/register/account-info');

    return () => setIsLoading(false);
  }, [setIsLoading, resetRegister, router]);

  return null;
}
