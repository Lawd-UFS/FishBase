'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Form } from '@/components/Form';
import { ChevronLeft, ChevronRight, LaptopMinimal, MapPin } from 'lucide-react';
import formStyles from '@/components/Form/Form.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { createAdditionalInfoSchema } from '@/schemas/register.schema';
import { useRegister } from '@/contexts/RegisterContext';
import { useFormStage } from '@/hooks/useFormStage';
import Button from '@/components/Button';
import styles from '@/app/(auth)/layout.module.css';
import { useAuthLayout } from '@/contexts/AuthLayoutContext';

export default function AdditionalInfoStep() {
  const { setIsLoading } = useAuthLayout();

  const {
    formData,
    updateFormData,
    submitForm,
    previousStage,
    nextStage,
    setValidateCurrentStage,
    setGetFormData,
    isConfirmation,
  } = useRegister();

  const router = useRouter();

  useEffect(() => {
    if (Object.keys(formData).length === 0) router.push('/register');
  }, [formData, router]);

  const { texts, language } = useLanguage();

  const [shouldSubmit, setShouldSubmit] = useState(false);

  useEffect(() => {
    if (!shouldSubmit) return;

    const submit = async () => {
      setIsLoading(true);
      const response = await submitForm();

      if (response.success) {
        setShouldSubmit(false);
        nextStage();
        return;
      }

      setShouldSubmit(false);
      setIsLoading(false);
    };

    submit();
  }, [shouldSubmit]);

  useEffect(() => {
    if (isConfirmation) {
      setIsLoading(false);
      router.push('/register/confirmation');
    }
  }, [isConfirmation]);

  const defaultValues = {
    institution: formData.institution || '',
    country: formData.country || '',
    state: formData.state || '',
    city: formData.city || '',
    gender: formData.gender || 'not declared',
    modality: formData.modality || '',
  };

  const schema = useMemo(
    () => createAdditionalInfoSchema(language),
    [language]
  );

  const modalityIcons = {
    'in-person': <MapPin />,
    remote: <LaptopMinimal />,
  };

  const genderOptions = Object.entries(texts.register.genderOptions)
    .reverse()
    .map(([key, value]) => {
      return {
        value: key,
        label: value,
      };
    });

  const modalityOptions = Object.entries(texts.register.modalityOptions).map(
    ([key, value]) => {
      return {
        value: key,
        label: value,
        icon: modalityIcons[key],
      };
    }
  );

  // Remove a primeira opção que no caso é o placeholder
  genderOptions.pop();

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

  const handlePreviousStage = () => {
    previousStage();

    router.push('/register/account-info');
  };

  const handleNextStage = async () => {
    const formValues = getValues();

    updateFormData({ ...formValues, language });
    setShouldSubmit(true);
  };

  return (
    <>
      <form className={styles.stage}>
        <Form.Input
          label={texts.register.fields.institution}
          type='text'
          name='institution'
          {...register('institution')}
          error={errors.institution?.message}
        />
        <div className={formStyles.grid}>
          <Form.Input
            label={texts.register.fields.country}
            type='text'
            name='country'
            {...register('country')}
            error={errors.country?.message}
          />
          <Form.Input
            label={texts.register.fields.state}
            type='text'
            name='state'
            {...register('state')}
            error={errors.state?.message}
          />
          <Form.Input
            label={texts.register.fields.city}
            type='text'
            name='city'
            {...register('city')}
            error={errors.city?.message}
          />
          <Form.Select
            label={texts.register.fields.gender}
            name='gender'
            {...register('gender')}
            error={errors.gender?.message}
            options={genderOptions}
          />
        </div>
        <Form.Radio
          label={texts.register.fields.modality}
          name='modality'
          {...register('modality')}
          error={errors.modality?.message}
          options={modalityOptions}
          currentSelectedOption={formData.modality}
        />
      </form>
      <div className={styles.buttons}>
        <Button variant='ghost' onClick={handlePreviousStage}>
          <ChevronLeft size={24} />
          <span>{texts.register.buttons.back}</span>
        </Button>
        <Button variant='filled' onClick={handleNextStage}>
          <span>{texts.register.buttons.continue}</span>
          <ChevronRight size={24} />
        </Button>
      </div>
    </>
  );
}
