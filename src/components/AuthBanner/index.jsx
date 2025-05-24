'use client';

import Button from '@/components/Button';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/components/AuthBanner/AuthBanner.module.css';
import LanguageSwitch from '@/components/LanguageSwitch';
import { useRouter } from 'next/navigation';
import { useAuthLayout } from '@/contexts/AuthLayoutContext';
import { useEffect, useState } from 'react';

export function AuthBanner() {
  const { bannerImage } = useAuthLayout();
  const { texts } = useLanguage();

  const [bgImage, setBgImage] = useState(null);

  const router = useRouter();

  useEffect(() => {
    if (bannerImage) {
      setBgImage(bannerImage);
    }
  }, [bannerImage]);

  return (
    <section
      className={styles.container}
      style={{ backgroundImage: bgImage ? `url(${bannerImage})` : 'none' }}
    >
      <header className={styles.header}>
        <Button variant='ghost' color='white' onClick={() => router.push('/')}>
          <ChevronLeft />
          <span>{texts.register.buttons.back}</span>
        </Button>
        <LanguageSwitch />
      </header>
    </section>
  );
}
