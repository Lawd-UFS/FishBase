'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/homePage/Hero/Hero.module.css';

import { useLanguage } from '../../../contexts/LanguageContext';
import { ChevronDown, ChevronRight } from 'lucide-react';
import LanguageSwitch from '@/components/LanguageSwitch';

export default function Hero() {
  const { texts } = useLanguage();

  return (
    <section className={`${styles.hero} ${styles.backgroundHero}`}>
      <div className={styles.navContainer}>
        <nav className={styles.navLinks}>
          <Link href='/about'>{texts.navbar.aboutEvent}</Link>
          <Link href='/schedule'>{texts.navbar.programming}</Link>
          <Link href='/login'>Login</Link>
          <Link href='/register'>{texts.navbar.register}</Link>
        </nav>
        <LanguageSwitch color='white' />
      </div>
      <div className={styles.headline}>
        <h1>
          <span className={styles.highlight}>23rd</span>
          FishBase &amp; SeaLifeBase
        </h1>
        <h2>Symposium</h2>
        <div className={styles.buttonsContainer}>
          <Link href='/register' className={styles.btnPrimary}>
            {texts.hero.registerButton}
            <ChevronRight />
          </Link>
          <Link href='/schedule' className={styles.btnSecondary}>
            {texts.hero.checkEventButton}
            <ChevronDown />
          </Link>
        </div>
      </div>
      <Image src={'/fish-hero.png'} width={1064} height={492} alt='fish' />
    </section>
  );
}
