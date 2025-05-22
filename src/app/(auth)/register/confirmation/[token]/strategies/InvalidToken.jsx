import pageStyles from '@/app/(auth)/confirmation/page.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

export function InvalidToken() {
  const { texts } = useLanguage();

  return (
    <div className={pageStyles.content}>
      <h1>{texts.register.confirmation.error.invalidToken.title}</h1>
      <p>{texts.register.confirmation.error.invalidToken.description}</p>
    </div>
  );
}
