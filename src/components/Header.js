'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { texts, toggleLanguage, language } = useLanguage();

  return (
    <header className='header'>
      <div className='logo-container'>
        <Link href='/'>
          <Image
            src='/fishbase-logo.png'
            alt='FishBase'
            width={160}
            height={40}
          />
        </Link>
        <Link href='/'>
          <Image
            src='/sealifebase-logo.png'
            alt='SeaLifeBase'
            width={160}
            height={40}
          />
        </Link>
      </div>
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
    </header>
  );
}
