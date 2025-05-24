'use client';

import styles from './ParticipantHeader.module.css';
import Image from 'next/image';
import LanguageSwitch from '@/components/LanguageSwitch';

export function ParticipantHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src='/fishbase-logo.png'
          alt='Logo FishBase'
          width={90}
          height={30}
        />
        <Image
          src='/sealifebase-logo.png'
          alt='Logo SeaLifeBase'
          width={110}
          height={30}
        />
      </div>

      <LanguageSwitch color='blue' />
    </header>
  );
}
