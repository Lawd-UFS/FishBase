'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { texts } = useLanguage();

  return (
    <div className='hero'>
      <h1>
        <span className='highlight'>23rd&nbsp;</span>
        FishBase &amp; SeaLifeBase
      </h1>
      <h2>Symposium</h2>
      <div style={{ marginTop: '2rem' }}>
        <Link href='/register' className='btn-primary'>
          {texts.hero.registerButton}
        </Link>
        <Link
          href='/schedule'
          className='btn-secondary'
          style={{ marginLeft: '1rem' }}
        >
          {texts.hero.checkEventButton}
        </Link>
      </div>
    </div>
  );
}
