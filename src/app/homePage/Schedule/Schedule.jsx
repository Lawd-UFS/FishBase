'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/homePage/Schedule/Schedule.module.css';
import homeStyles from '@/app/homePage/HomePage.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Schedule() {
  const { texts } = useLanguage();

  return (
    <section className={styles.background}>
      <div className={`${styles.subtitleEventInfo} ${homeStyles.grid}`}>
        <div className={styles.SymposiumDate}>September 1-2, 2025</div>
        <div className={styles.SymposiumLocation}>
          São Cristóvão – Sergipe – Brazil
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{texts.navbar.programming}</h2>
        <div className={styles.scheduleItems}>
          <div className={styles.dateItem}>
            <p className={styles.date}>55</p>
            <p className={styles.time}>10</p>
          </div>
          <p className={styles.infoItem}>
            FishBase and SeaLifeBase in Brazil: what is going on? – Kátia Freire
            FishBase
          </p>
          <p className={styles.theme}>FishBase</p>
        </div>
      </div>
    </section>
  );
}
