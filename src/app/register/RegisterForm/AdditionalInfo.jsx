import { useLanguage } from '@/contexts/LanguageContext';
import { Form } from '@/components/Form';
import { LaptopMinimal, MapPin } from 'lucide-react';
import formStyles from '@/components/Form/Form.module.css';

export default function AdditionalInfo({ styles, formFunctions }) {
  if (!formFunctions) return null;

  const { texts } = useLanguage();

  const { register, errors } = formFunctions;

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

  return (
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
      />
    </form>
  );
}
