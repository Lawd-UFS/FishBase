'use client';

import styles from '@/app/(auth)/layout.module.css';
import { useRegister } from '@/contexts/RegisterContext';
import { confirmRegistration } from '@/lib/api';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ConfirmationStrategy } from '@/app/(auth)/register/confirmation/[token]/strategies/ConfirmationStrategy';
import { useAuthLayout } from '@/contexts/AuthLayoutContext';

export default function ConfirmationPage() {
  const { token } = useParams();
  const { isLoading, setIsLoading, resetErrorMessage } = useAuthLayout();
  const { goToStage } = useRegister();

  const [strategy, setStrategy] = useState(null);

  useEffect(() => {
    goToStage(2);

    const confirm = async () => {
      setIsLoading(true);

      const response = await confirmRegistration(token);

      if (response.success || response.error.statusCode === 409) {
        setStrategy('success');
        setIsLoading(false);
        resetErrorMessage();
        return;
      }

      if (response.error.statusCode === 400) {
        setStrategy('invalidToken');
      }

      if (response.error.statusCode === 401) {
        setStrategy('expiredToken');
      }

      if (response.error.statusCode === 404) {
        setStrategy('enrollmentNotFound');
      }

      if (response.error.statusCode === 500) {
        setStrategy('unknownError');
      }

      setIsLoading(false);
    };

    confirm();
  }, [goToStage, setIsLoading]);

  if (isLoading) return null;

  return (
    <div className={styles.stage}>
      <ConfirmationStrategy strategy={strategy} />
    </div>
  );
}
