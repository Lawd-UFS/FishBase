'use client';

import styles from '@/app/(auth)/layout.module.css';

import { AuthBanner } from '@/components/AuthBanner';
import { AuthLayoutProvider } from '@/contexts/AuthLayoutContext';
import Image from 'next/image';

export default function AuthLayout({ children }) {
  return (
    <div className={styles.container}>
      <AuthLayoutProvider>
        <AuthBanner />
        <section className={styles.content}>
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
        </section>
      </AuthLayoutProvider>
    </div>
  );
}
