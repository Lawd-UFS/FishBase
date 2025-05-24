'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const RoleGuard = ({ children, roles }) => {
  const { user } = useAuth();
  const router = useRouter();

  const canAccess = user && roles.includes(user.role);

  useEffect(() => {
    if (user && !canAccess) {
      router.replace('/login');
    }
  }, [user, canAccess, router]);

  if (!user) return null;

  if (!canAccess) {
    return null;
  }

  return children;
};
