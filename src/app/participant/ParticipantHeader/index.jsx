'use client';

import styles from './ParticipantHeader.module.css';
import Image from 'next/image';
import { useLanguage } from '../../../contexts/LanguageContext';

export function ParticipantHeader() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/fishbase-logo.png"
          alt="Logo FishBase"
          width={90}
          height={30}
        />
        <Image
          src="/sealifebase-logo.png"
          alt="Logo SeaLifeBase"
          width={110}
          height={30}
        />
      </div>

      <div className={styles.languageSwitch}>
        <button
          className={language === 'en' ? styles.active : ''}
          onClick={() => toggleLanguage('en')}
        >
          EN
        </button>
        <button
          className={language === 'pt' ? styles.active : ''}
          onClick={() => toggleLanguage('pt')}
        >
          PT
        </button>
      </div>
    </header>
  );
}
