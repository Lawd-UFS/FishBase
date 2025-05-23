import Button from '@/components/Button';
import pageStyles from '@/app/register/confirmation/page.module.css';
import styles from '@/app/register/RegisterForm/RegisterForm.module.css';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRouter } from 'next/navigation';

export function EnrollmentNotFound() {
  const { texts } = useLanguage();

  const router = useRouter();

  return (
    <>
      <div className={pageStyles.content}>
        <h1>{texts.register.confirmation.error.enrollmentNotFound.title}</h1>
        <p>
          {texts.register.confirmation.error.enrollmentNotFound.description}
        </p>
        <p>{texts.register.confirmation.error.enrollmentNotFound.guide}</p>
      </div>
      <div className={styles.buttons} style={{ justifyContent: 'flex-end' }}>
        <Button onClick={() => router.push('/register')}>
          {texts.register.buttons.register}
        </Button>
      </div>
    </>
  );
}
