'use client';

import { useRegister } from '@/contexts/RegisterContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RegisterPage() {
  const { setIsLoading, resetFormData } = useRegister();

  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    resetFormData();
    router.push('/register/account-info');

    return () => setIsLoading(false);
  }, [setIsLoading, resetFormData, router]);

  return null;
}
