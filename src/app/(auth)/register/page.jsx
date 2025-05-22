'use client';

import { useAuthLayout } from '@/contexts/AuthLayoutContext';
import { useRegister } from '@/contexts/RegisterContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RegisterPage() {
  const { setIsLoading } = useAuthLayout();
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
