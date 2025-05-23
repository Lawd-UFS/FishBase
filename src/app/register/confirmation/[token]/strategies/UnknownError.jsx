import { useLanguage } from '@/contexts/LanguageContext';

export function UnknownError() {
  const { texts } = useLanguage();

  return (
    <>
      <h1>{texts.register.confirmation.error.unknown.title}</h1>
      <p>{texts.register.confirmation.error.unknown.description}</p>
    </>
  );
}
