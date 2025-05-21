"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { texts, toggleLanguage, language } = useLanguage();

  return (
    <header className="header">
      <div className="logo-container">
        <Link href="https://www.fishbase.org">
          <Image
            src="/fishbase-logo.png"
            alt="FishBase"
            width={190}
            height={42}
          />
        </Link>
        <Link href="https://sealifebase.org/">
          <Image
            src="/sealifebase-logo.png"
            alt="SeaLifeBase"
            width={210}
            height={46}
          />
        </Link>
      </div>
      <div className="nav-container">
        <nav className="nav-links">
          <Link href="/sobre">{texts.navbar.aboutEvent}</Link>
          <Link href="/programacao">{texts.navbar.programming}</Link>
          <Link href="/login">Login</Link>
          <Link href="/registro">{texts.navbar.register}</Link>
        </nav>
        <div className="lang-switch">
          <button
            onClick={() => toggleLanguage("en")}
            className={language === "en" ? "active" : ""}
          >
            EN
          </button>
          <button
            onClick={() => toggleLanguage("pt")}
            className={language === "pt" ? "active" : ""}
          >
            PT
          </button>
        </div>
      </div>
    </header>
  );
}
