'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const RoleGuard = ({ children, roles }) => {
  const { user, isAuth, isAuthLoading, refresh } = useAuth();
  const router = useRouter();

  const canAccess = user && roles.includes(user.role);

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    if (isAuthLoading) return;

    if (!isAuth || !canAccess) {
      router.replace('/login');
    }
  }, [isAuthLoading, isAuth, canAccess, router]);

  if (isAuthLoading) return null;
  if (!isAuth || !canAccess) return null;

  return children;
};
