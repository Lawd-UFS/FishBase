'use client';

import styles from '@/app/register/RegisterForm/RegisterForm.module.css';
import { useMemo, useState } from 'react';
import AccountStage from './AccountStage';
import AdditionalInfo from './AdditionalInfo';
import Button from '@/components/Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useFormStage } from '@/hooks/useFormStage';
import { createAdditionalInfoSchema } from '@/schemas/register.schema';
import { createAccountSchema } from '@/schemas/register.schema';
import { z } from 'zod';
import { registerParticipant } from '@/lib/api';
import { Loading } from '@/components/Loading';
import { Error } from '@/components/Error';

const schemas = [
  {
    create: createAccountSchema,
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  },
  {
    create: createAdditionalInfoSchema,
    defaultValues: {
      institution: '',
      country: '',
      state: '',
      city: '',
      gender: 'not declared',
      modality: '',
    },
  },
];

export function RegisterForm() {
  const { texts, language } = useLanguage();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setFormData] = useState({});

  const stages = texts.register.steps;

  const handleStageValid = (data) => {
    console.log(data);
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const { create: createSchema, defaultValues } = useMemo(
    () =>
      schemas[currentStage] || {
        create: () => z.object({}),
        defaultValues: {},
      },
    [currentStage, language]
  );

  const schema = createSchema ? createSchema(language) : z.object({});

  const formFunctions = useFormStage(schema, defaultValues, handleStageValid);

  const handleValidateStage = async () => {
    if (formFunctions.validate) {
      const isValid = await formFunctions.validate();

      if (!isValid) return false;
    }

    return true;
  };

  const handleChangeToStage = async (stage) => {
    if (stage < 0 || stage > stages.length - 1) return;
    if (stage === currentStage) return;

    if (stage === stages.length - 1) {
      const isValid = await handleValidateStage();

      if (!isValid) return;

      const currentFormData = formFunctions.getValues();
      const allData = { ...formData, ...currentFormData };

      setFormData(allData);

      const { success, error } = await handleSubmit(allData);

      if (success) {
        setCurrentStage(stage);
        setFormData({});
        setErrorMessage(null);
      }

      setErrorMessage(error.message);

      return;
    }

    if (stage > currentStage) {
      const isValid = await handleValidateStage();

      if (!isValid) return;
    }

    setCurrentStage(stage);
  };

  const handleSubmit = async (data) => {
    setIsLoading(true);
    const response = await registerParticipant({ language, ...data });
    setIsLoading(false);

    return response;
  };

  return (
    <section className={styles.container}>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <Loading />
        </div>
      )}
      {errorMessage && (
        <div className={styles.errorMessage}>
          <Error message={errorMessage} onClick={() => setErrorMessage(null)} />
        </div>
      )}
      <div className={styles.images}>
        <Image
          src='/fishbase-logo.png'
          alt='FishBase logo'
          width={170}
          height={40}
        />
        <Image
          src='/sealifebase-logo.png'
          alt='SeaLifeBase logo'
          width={200}
          height={45}
        />
      </div>
      <header className={styles.header}>
        <h1>{texts.register.title}</h1>
        <nav className={styles.nav}>
          <ul>
            {stages.map((stage, index) => (
              <li
                key={stage}
                className={`${styles.navItem} ${index === currentStage ? styles.active : ''}`}
                onClick={() => handleChangeToStage(index)}
              >
                {index === currentStage ? (
                  <Image
                    src='/fish-tail-filled.png'
                    alt='Fish tail'
                    width={16}
                    height={18}
                  />
                ) : (
                  <Image
                    src='/fish-tail.png'
                    alt='Fish tail'
                    width={16}
                    height={18}
                  />
                )}
                <span>{stage}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={styles.form}>
        {currentStage === 0 && (
          <AccountStage styles={styles} formFunctions={formFunctions} />
        )}
        {currentStage === 1 && (
          <AdditionalInfo styles={styles} formFunctions={formFunctions} />
        )}
        <div className={styles.buttons}>
          <Button
            variant='ghost'
            onClick={() => handleChangeToStage(currentStage - 1)}
          >
            <ChevronLeft size={24} />
            <span>{texts.register.buttons.back}</span>
          </Button>
          <Button
            variant='filled'
            onClick={() => handleChangeToStage(currentStage + 1)}
          >
            <span>{texts.register.buttons.continue}</span>
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
}
