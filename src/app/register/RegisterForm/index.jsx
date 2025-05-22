'use client';

import styles from '@/app/register/RegisterForm/RegisterForm.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

import Image from 'next/image';

import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';
import { useRegister } from '@/contexts/RegisterContext';
import { useRouter } from 'next/navigation';

const stageRoutes = ['account-info', 'additional-info', 'confirmation'];

export function RegisterForm({ children }) {
  const { texts } = useLanguage();
  const {
    isLoading,
    errorMessage,
    resetErrorMessage,
    currentStage,
    goToStage,
  } = useRegister();

  const router = useRouter();

  const stages = texts.register.steps;

  const handleStageClick = async (index) => {
    const success = await goToStage(index);

    if (success) router.push(`/register/${stageRoutes[index]}`);
  };

  return (
    <section className={styles.container}>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
      {errorMessage && (
        <div className={styles.errorMessage}>
          <Error message={errorMessage} onClick={resetErrorMessage} />
        </div>
      )}
      <div className={styles.images}>
        <Image
          src='/fishbase-logo.png'
          alt='FishBase logo'
          width={170}
          height={40}
        />
        <Image
          src='/sealifebase-logo.png'
          alt='SeaLifeBase logo'
          width={200}
          height={45}
        />
      </div>
      <header className={styles.header}>
        <h1>{texts.register.title}</h1>
        <nav className={styles.nav}>
          <ul>
            {stages.map((stage, index) => (
              <li
                key={stage}
                className={`${styles.navItem} ${index === currentStage ? styles.active : ''}`}
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
    </section>
  );
}
