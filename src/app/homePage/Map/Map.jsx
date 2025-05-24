'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/homePage/Map/Map.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Map() {
  const { texts } = useLanguage();

  return (
    <section className={`${styles.section} ${styles.background}`}>
      <img src={'/map.svg'} alt='map' style={{ width: '100%' }} />
      <div className={styles.container}>
        <h1 className={styles.title}>{texts.aboutEvent.title[0]}</h1>
        <p className={styles.text}>{texts.aboutEvent.description[0]}</p>
      </div>
    </section>
  );
}
