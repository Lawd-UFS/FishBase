'use client';

import { AtSign, ChevronRight, Lock } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';
import { Form } from '@/components/Form';
import PasswordIcon from '@/components/PasswordIcon';
import formStyles from '@/components/Form/Form.module.css';
import styles from '@/app/register/RegisterForm/RegisterForm.module.css';
import { useEffect, useMemo, useState } from 'react';
import { useRegister } from '@/contexts/RegisterContext';
import { useFormStage } from '@/hooks/useFormStage';
import { createAccountSchema } from '@/schemas/register.schema';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function AccountInfoStep() {
  const {
    formData,
    updateFormData,
    setValidateCurrentStage,
    nextStage,
    setGetFormData,
  } = useRegister();
  const { texts, language } = useLanguage();

  const router = useRouter();

  const defaultValues = {
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    email: formData.email || '',
    password: formData.password || '',
    confirmPassword: formData.confirmPassword || '',
  };

  const schema = useMemo(() => createAccountSchema(language), [language]);

  const [isPasswordVisible, setIsPasswordVisible] = useState({
    password: false,
    confirmPassword: false,
  });

  const handlePasswordVisibility = (field) => {
    setIsPasswordVisible((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const { register, errors, validateStage, getValues } = useFormStage(
    schema,
    defaultValues
  );

  useEffect(() => {
    setValidateCurrentStage(() => validateStage);
    return () => setValidateCurrentStage(null);
  }, []);

  useEffect(() => {
    setGetFormData(() => getValues);
    return () => setGetFormData(null);
  }, []);

  const handleNextStage = async () => {
    updateFormData(getValues());

    const success = await nextStage();

    if (success) router.push('/register/additional-info');
  };

  return (
    <>
      <form className={styles.stage}>
        <Form.Input
          label={texts.register.fields.firstName}
          type='text'
          name='firstName'
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Form.Input
          label={texts.register.fields.lastName}
          type='text'
          name='lastName'
          {...register('lastName')}
          error={errors.lastName?.message}
        />
        <Form.Input
          label={texts.register.fields.email}
          type='text'
          name='email'
          {...register('email')}
          error={errors.email?.message}
          leftIcon={<AtSign size={24} color='#5F84A7' />}
        />
        <div className={formStyles.grid}>
          <Form.Input
            label={texts.register.fields.password}
            type={isPasswordVisible.password ? 'text' : 'password'}
            name='password'
            {...register('password')}
            error={errors.password?.message}
            leftIcon={<Lock size={24} color='#5F84A7' />}
            rightIcon={
              <PasswordIcon
                isVisible={isPasswordVisible.password}
                setIsVisible={() => handlePasswordVisibility('password')}
                color='#5F84A7'
              />
            }
          />
          <Form.Input
            label={texts.register.fields.confirmPassword}
            type={isPasswordVisible.confirmPassword ? 'text' : 'password'}
            name='confirmPassword'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
            leftIcon={<Lock size={24} color='#5F84A7' />}
            rightIcon={
              <PasswordIcon
                isVisible={isPasswordVisible.confirmPassword}
                setIsVisible={() => handlePasswordVisibility('confirmPassword')}
                color='#5F84A7'
              />
            }
          />
        </div>
      </form>

      <div className={styles.buttons} style={{ justifyContent: 'flex-end' }}>
        <Button variant='filled' onClick={handleNextStage}>
          <span>{texts.register.buttons.continue}</span>
          <ChevronRight size={24} />
        </Button>
      </div>
    </>
  );
}
