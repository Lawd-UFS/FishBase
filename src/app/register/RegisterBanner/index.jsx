'use client';

import Button from '@/components/Button';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/app/register/RegisterBanner/RegisterBanner.module.css';
import LanguageSwitch from '@/components/LanguageSwitch';

export function RegisterBanner() {
  const { texts } = useLanguage();

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Button variant='ghost' color='white'>
          <ChevronLeft />
          <span>{texts.register.buttons.back}</span>
        </Button>
        <LanguageSwitch />
      </header>
      <div className={styles.content}></div>
    </section>
  );
}
