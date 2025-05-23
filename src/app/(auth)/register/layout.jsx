'use client';

import styles from '@/app/(auth)/layout.module.css';
import registerStyles from '@/app/(auth)/register/layout.module.css';
import { useLanguage } from '@/contexts/LanguageContext';
import { RegisterProvider } from '@/contexts/RegisterContext';

import Image from 'next/image';

import { useRegister } from '@/contexts/RegisterContext';
import { useRouter } from 'next/navigation';
import { useAuthLayout } from '@/contexts/AuthLayoutContext';
import { useEffect } from 'react';

const stageRoutes = ['account-info', 'additional-info', 'confirmation'];

function RegisterPageLayout({ children }) {
  const { texts } = useLanguage();
  const { setBannerImage } = useAuthLayout();
  const { currentStage, goToStage } = useRegister();

  const router = useRouter();

  const stages = texts.register.steps;

  const handleStageClick = async (index) => {
    const success = await goToStage(index);

    if (success) router.push(`/register/${stageRoutes[index]}`);
  };

  useEffect(() => {
    setBannerImage('/register-banner.png');
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>{texts.register.title}</h1>
        <nav className={registerStyles.nav}>
          <ul>
            {stages.map((stage, index) => (
              <li
                key={stage}
                className={`${registerStyles.navItem} ${index === currentStage ? registerStyles.active : ''}`}
                onClick={() => handleStageClick(index)}
              >
                {index === currentStage ? (
                  <Image
                    src='/fish-tail-filled.png'
                    alt='Fish tail'
                    width={16}
                    height={18}
                  />
                ) : (
                  <Image
                    src='/fish-tail.png'
                    alt='Fish tail'
                    width={16}
                    height={18}
                  />
                )}
                <span>{stage}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={styles.form}>{children}</div>
    </>
  );
}

export default function RegisterPageLayoutWithContext({ children }) {
  return (
    <RegisterProvider>
      <RegisterPageLayout>{children}</RegisterPageLayout>
    </RegisterProvider>
  );
}
