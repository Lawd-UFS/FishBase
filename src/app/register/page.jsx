'use client';

import styles from '@/app/register/page.module.css';
import { RegisterBanner } from '@/app/register/RegisterBanner';
import { RegisterForm } from '@/app/register/RegisterForm';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <RegisterBanner />
      <RegisterForm />
    </div>
  );
}
