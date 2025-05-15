'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link href="/">
          <Image src="/fishbase-logo.png" alt="FishBase" width={160} height={40} />
        </Link>
        <Link href="/">
          <Image src="/sealifebase-logo.png" alt="SeaLifeBase" width={160} height={40} />
        </Link>
      </div>
      <div className="nav-container">
        <nav className="nav-links">
          <Link href="/sobre">Sobre o evento</Link>
          <Link href="/programacao">Programação</Link>
          <Link href="/login">Login</Link>
          <Link href="/registro">Registro</Link>
        </nav>
        <div className="lang-switch">
          <Link href="#" >EN</Link>
          <Link href="#" className="active">PT</Link>
        </div>
      </div>
    </header>
  );
}
