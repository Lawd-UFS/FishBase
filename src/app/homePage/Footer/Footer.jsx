'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/homePage/Footer/Footer.module.css';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight, ExternalLink, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { texts } = useLanguage();

  return (
    <section className={`${styles.section} ${styles.background}`}>
      <div className={styles.spacing}>
        <div className={styles.header}>
          <div className={styles.headline}>
            <h1>
              <span className={styles.highlight}>23rd</span>
              FishBase &amp; SeaLifeBase
            </h1>
            <h2>Symposium</h2>
          </div>
          <div className={styles.logosFishbase}>
            <img src={'/fishbase-logo-white.png'} alt='fishbase' />
            <img src={'/seaLifeBase-logo-white.png'} alt='seaLifeBase' />
            <img src={'/seaAroundUs-logo-white.png'} alt='seaAroundUs' />
            <img src={'/aquaMaps-logo-white.png'} alt='aquaMaps' />
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.subtitleContainer}>
            <p className={styles.subtitle}>{texts.contact}</p>
            <div className={styles.subitem}>
              <Mail />
              fbbrazilscientificcommittee@gmail.com
            </div>
            <div className={styles.subitem}>
              <Phone />
              +0055 79 8156-5745
            </div>
            <div className={styles.subitem}>
              <ExternalLink />
              <Link
                href='https://maps.app.goo.gl/jbZs6hRdx2rpUWhA8'
                className={styles.link}
              >
                Departamento de Pesca
              </Link>
            </div>
          </div>
          <div className={styles.subtitleContainer}>
            <p className={styles.subtitle}>{texts.support}</p>
            <div className={styles.logosSuport}>
              <img src={'/cnpq.png'} alt='cnpq' />
              <img src={'/depaq.png'} alt='depaq' />
              <img src={'/ufs.png'} alt='ufs' />
            </div>
          </div>
        </footer>
      </div>
      <img src={'/fish-footer.png'} alt='fishs' style={{ width: '100%' }} />
      <img
        className={styles.lawd}
        src={'/lawd.svg'}
        alt='made with love by lawd'
      />
    </section>
  );
}
