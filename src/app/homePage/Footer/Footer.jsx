'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/homePage/Footer/Footer.module.css';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';

export default function Footer() {
  const { texts } = useLanguage();

  return (
    <section className={`${styles.section} ${styles.background}`}>
      <div className={styles.container}>
        <div className={styles.headline}>
          <h1>
            <span className={styles.highlight}>23rd</span>
            FishBase &amp; SeaLifeBase
          </h1>
          <h2>Symposium</h2>
        </div>
        <div className={styles.logosFishbase}>
          <img src={'/fish-footer.png'} alt='fishs' style={{ width: '100%' }} />
        </div>
        <p className={styles.text}>{texts.aboutEvent.description[0]}</p>
      </div>
      <img src={'/fish-footer.png'} alt='fishs' style={{ width: '100%' }} />
    </section>
  );
}
