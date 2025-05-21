import pageStyles from '@/app/register/confirmation/page.module.css';
import styles from '@/app/register/RegisterForm/RegisterForm.module.css';
import Button from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRegister } from '@/contexts/RegisterContext';
import { useParams, useRouter } from 'next/navigation';

export function ExpiredToken() {
  const { texts } = useLanguage();
  const { token } = useParams();
  const { requestNewLink, isLoading } = useRegister();

  const router = useRouter();

  const handleRequestNewLink = async () => {
    const response = await requestNewLink(token);

    if (response.success) {
      router.push(`/register/confirmation`);
    }
  };

  if (isLoading) return null;

  return (
    <>
      <div className={pageStyles.content}>
        <h1>{texts.register.confirmation.error.expiredToken.title}</h1>
        <p>{texts.register.confirmation.error.expiredToken.description}</p>
        <p>{texts.register.confirmation.error.expiredToken.guide}</p>
      </div>

      <div className={styles.buttons} style={{ justifyContent: 'flex-end' }}>
        <Button variant='filled' onClick={handleRequestNewLink}>
          <span>{texts.register.buttons.requestNewLink}</span>
        </Button>
      </div>
    </>
  );
}
