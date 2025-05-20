import { AtSign, EyeOff, Lock } from 'lucide-react';

import styles from '@/components/RegisterFormStage/RegisterFormStage.module.css';
import { useLanguage } from '@/contexts/LanguageContext';
import { Form } from '@/components/Form';
import PasswordIcon from '../PasswordIcon';
import { useState } from 'react';

export default function AccountStage() {
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

  return (
    <section className={styles.stage}>
      <Form.Input
        label={texts.register.fields.firstName}
        type='text'
        name='firstName'
      />
      <Form.Input
        label={texts.register.fields.lastName}
        type='text'
        name='lastName'
      />
      <Form.Input
        label={texts.register.fields.email}
        type='text'
        name='email'
        leftIcon={<AtSign size={24} color='#5F84A7' />}
      />
      <Form.Input
        label={texts.register.fields.password}
        type={isPasswordVisible.password ? 'text' : 'password'}
        name='password'
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
        leftIcon={<Lock size={24} color='#5F84A7' />}
        rightIcon={
          <PasswordIcon
            isVisible={isPasswordVisible.confirmPassword}
            setIsVisible={() => handlePasswordVisibility('confirmPassword')}
            color='#5F84A7'
          />
        }
      />
    </section>
  );
}
