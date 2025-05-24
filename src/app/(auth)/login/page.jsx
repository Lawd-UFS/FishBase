'use client';

import styles from '@/app/(auth)/layout.module.css';

import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Form } from '@/components/Form';
import { createLoginSchema } from '@/schemas/login.schema';
import { useFormStage } from '@/hooks/useFormStage';
import { AtSign, Lock } from 'lucide-react';
import PasswordIcon from '@/components/PasswordIcon';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useApp } from '@/contexts/AppContext';
import { useAuthLayout } from '@/contexts/AuthLayoutContext';

export default function LoginPage() {
  const { setIsLoading, setErrorMessage } = useApp();
  const { setBannerImage } = useAuthLayout();

  const { login } = useAuth();
  const { texts, language } = useLanguage();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const defaultValues = {
    email: '',
    password: '',
  };

  const schema = useMemo(() => createLoginSchema(language), [language]);

  const { register, errors, getValues } = useFormStage(schema, defaultValues);

  useEffect(() => {
    setBannerImage('/register-banner.png');
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);

    const data = getValues();

    const response = await login(data.email, data.password);

    if (response.success) {
      setIsLoading(false);
      router.push('/');
      return;
    }

    setErrorMessage(response.error.message);

    setIsLoading(false);
  };

  return (
    <>
      <header className={styles.header}>
        <h1>{texts.login.title}</h1>
      </header>
      <div
        className={styles.form}
        style={{ justifyContent: 'normal', gap: '4.2rem' }}
      >
        <form className={styles.stage}>
          <Form.Input
            label={texts.register.fields.email}
            type='text'
            name='email'
            {...register('email')}
            error={errors.email?.message}
            leftIcon={<AtSign size={24} color='#5F84A7' />}
          />
          <Form.Input
            label={texts.register.fields.password}
            type={isPasswordVisible ? 'text' : 'password'}
            name='password'
            {...register('password')}
            error={errors.password?.message}
            leftIcon={<Lock size={24} color='#5F84A7' />}
            rightIcon={
              <PasswordIcon
                isVisible={isPasswordVisible}
                setIsVisible={handlePasswordVisibility}
                color='#5F84A7'
              />
            }
          />
        </form>

        <div className={styles.buttons}>
          <Button
            variant='filled'
            style={{ width: '100%', paddingBlock: '1rem' }}
            onClick={handleLogin}
          >
            <span>{texts.login.button}</span>
          </Button>
        </div>
      </div>
    </>
  );
}
