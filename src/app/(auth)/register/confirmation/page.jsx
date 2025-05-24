'use client';

import { Spinner } from '@/components/Spinner';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/app/(auth)/layout.module.css';
import pageStyles from '@/app/(auth)/register/confirmation/page.module.css';
import { useRegister } from '@/contexts/RegisterContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ConfirmationStep() {
  const { isConfirmation } = useRegister();

  const { texts } = useLanguage();

  const router = useRouter();

  useEffect(() => {
    if (!isConfirmation) {
      router.push('/register');
    }
  }, [isConfirmation, router]);

  if (!isConfirmation) return null;

  return (
    <div className={styles.stage}>
      <div className={pageStyles.content}>
        <Spinner className={pageStyles.loading} />
        <h1>{texts.register.confirmation.title}</h1>
        <p>{texts.register.confirmation.description}</p>
      </div>
      <div className={pageStyles.warning}>
        <h2>{texts.register.confirmation.warning.title}</h2>
        <ul>
          {texts.register.confirmation.warning.list.map((warning) => (
            <li key={warning}>{warning}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
