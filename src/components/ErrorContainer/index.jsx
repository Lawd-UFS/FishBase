'use client';

import { useApp } from '@/contexts/AppContext';
import { Error } from '@/components/Error';
import styles from '@/components/ErrorContainer/ErrorContainer.module.css';

export function ErrorContainer() {
  const { errorMessage, resetErrorMessage } = useApp();

  if (!errorMessage) return null;

  return (
    <div className={styles.container}>
      <Error message={errorMessage} onClick={resetErrorMessage} />
    </div>
  );
}
