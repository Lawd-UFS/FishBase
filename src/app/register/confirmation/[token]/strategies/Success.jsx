import pageStyles from '@/app/register/confirmation/page.module.css';
import styles from '@/app/register/RegisterForm/RegisterForm.module.css';
import Button from '@/components/Button';
import { FormattedText } from '@/components/FormattedText';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Success() {
  const { texts } = useLanguage();

  const router = useRouter();

  const handleGoToLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <div className={pageStyles.content}>
        <Image src='/crab.svg' alt='Crab' width={62} height={62} />
        <h1>{texts.register.confirmation.success.title}</h1>
        <p>
          <FormattedText
            text={texts.register.confirmation.success.description}
            boldText={{
              text: texts.register.confirmation.success.eventName,
              placeholder: '{eventName}',
            }}
          />
        </p>
      </div>
      <div className={styles.buttons} style={{ justifyContent: 'flex-end' }}>
        <Button variant='filled' onClick={handleGoToLogin}>
          <span>{texts.register.buttons.login}</span>
          <ChevronRight size={24} />
        </Button>
      </div>
    </>
  );
}
