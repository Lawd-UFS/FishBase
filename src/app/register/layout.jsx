import styles from '@/app/register/page.module.css';

import { RegisterProvider } from '@/contexts/RegisterContext';
import { RegisterBanner } from '@/app/register/RegisterBanner';
import { RegisterForm } from '@/app/register/RegisterForm';

export default function RegisterLayout({ children }) {
  return (
    <RegisterProvider>
      <div className={styles.container}>
        <RegisterBanner />
        <RegisterForm>{children}</RegisterForm>
      </div>
    </RegisterProvider>
  );
}
