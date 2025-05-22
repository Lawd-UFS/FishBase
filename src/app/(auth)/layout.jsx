'use client';

import styles from '@/app/(auth)/layout.module.css';

import { AuthBanner } from '@/components/AuthBanner';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';
import {
  AuthLayoutProvider,
  useAuthLayout,
} from '@/contexts/AuthLayoutContext';
import Image from 'next/image';

function AuthLayout({ children }) {
  const { isLoading, errorMessage, resetErrorMessage } = useAuthLayout();

  return (
    <div className={styles.container}>
      <AuthBanner />
      <section className={styles.content}>
        {isLoading && (
          <div className={styles.loadingContainer}>
            <Loading />
          </div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>
            <Error message={errorMessage} onClick={resetErrorMessage} />
          </div>
        )}
        {children}
      </section>
    </div>
  );
}

export default function AuthLayoutWithContext({ children }) {
  return (
    <AuthLayoutProvider>
      <AuthLayout>
        <div className={styles.images}>
          <Image
            src='/fishbase-logo.png'
            alt='FishBase logo'
            width={170}
            height={40}
          />
          <Image
            src='/sealifebase-logo.png'
            alt='SeaLifeBase logo'
            width={200}
            height={45}
          />
        </div>
        {children}
      </AuthLayout>
    </AuthLayoutProvider>
  );
}
