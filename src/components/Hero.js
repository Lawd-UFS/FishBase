'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const { texts, toggleLanguage, language } = useLanguage();

  return (
    <section className='hero'>
      <div className='nav-container'>
        <nav className='nav-links'>
          <Link href='/about'>{texts.navbar.aboutEvent}</Link>
          <Link href='/schedule'>{texts.navbar.programming}</Link>
          <Link href='/login'>Login</Link>
          <Link href='/register'>{texts.navbar.register}</Link>
        </nav>
        <div className='lang-switch'>
          <button
            onClick={() => toggleLanguage('en')}
            className={language === 'en' ? 'active' : ''}
          >
            EN
          </button>
          <button
            onClick={() => toggleLanguage('pt')}
            className={language === 'pt' ? 'active' : ''}
          >
            PT
          </button>
        </div>
      </div>
      <div className='headline'>
        <h1>
          <span className='highlight'>23rd</span>
          FishBase &amp; SeaLifeBase
        </h1>
        <h2>Symposium</h2>
        <div className='buttons-container'>
          <Link href='/register' className='btn-primary'>
            {texts.hero.registerButton}
            <ChevronRight />
          </Link>
          <Link href='/schedule' className='btn-secondary'>
            {texts.hero.checkEventButton}
            <ChevronDown />
          </Link>
        </div>
      </div>
    </section>
  );
}
