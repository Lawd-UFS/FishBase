'use client';

import { useApp } from '@/contexts/AppContext';
import styles from '@/components/LoadingContainer/LoadingContainer.module.css';
import { Spinner } from '@/components/Spinner';

export function LoadingContainer() {
  const { isLoading } = useApp();

  if (!isLoading) return null;

  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  );
}
