'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/components/LanguageSwitch/LanguageSwitch.module.css';

export default function LanguageSwitch({ color = 'white' }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles[color]} ${language === 'en' ? styles.selected : ''}`}
        onClick={() => toggleLanguage('en')}
      >
        <span>EN</span>
      </button>
      <button
        className={`${styles.button} ${styles[color]} ${language === 'pt' ? styles.selected : ''}`}
        onClick={() => toggleLanguage('pt')}
      >
        <span>PT</span>
      </button>
    </div>
  );
}
