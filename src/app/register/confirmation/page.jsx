'use client';

import { Loading } from '@/components/Loading';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/app/register/RegisterForm/RegisterForm.module.css';
import pageStyles from '@/app/register/confirmation/page.module.css';
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

  return (
    <div className={styles.stage}>
      <div className={pageStyles.content}>
        <Loading className={pageStyles.loading} />
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
