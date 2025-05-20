import { AtSign, Lock } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';
import { Form } from '@/components/Form';
import PasswordIcon from '@/components/PasswordIcon';
import formStyles from '@/components/Form/Form.module.css';
import { useState } from 'react';

export default function AccountStage({ styles, formFunctions }) {
  if (!formFunctions) return null;

  const { texts } = useLanguage();

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

  const { register, errors } = formFunctions;

  return (
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
  );
}
