'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <Link href='https://www.fishbase.org'>
          <Image
            src='/fishbase-logo.png'
            alt='FishBase'
            width={190}
            height={42}
          />
        </Link>
        <Link href='https://sealifebase.org/'>
          <Image
            src='/sealifebase-logo.png'
            alt='SeaLifeBase'
            width={210}
            height={46}
          />
        </Link>
      </div>
    </header>
  );
}
