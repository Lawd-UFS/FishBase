import { useLanguage } from '@/contexts/LanguageContext';
import styles from '@/components/RegisterFormStage/RegisterFormStage.module.css';
import { Form } from '../Form';
import { LaptopMinimal, MapPin } from 'lucide-react';

export default function AdditionalInfo() {
  const { texts } = useLanguage();

  const modalityIcons = {
    'in-person': <MapPin />,
    remote: <LaptopMinimal />,
  };

  const genderOptions = Object.entries(texts.register.genderOptions).map(
    ([key, value]) => {
      return {
        value: key,
        label: value,
      };
    }
  );

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
  genderOptions.shift();

  return (
    <section className={styles.stage}>
      <Form.Input
        label={texts.register.fields.institution}
        type='text'
        name='institution'
      />
      <div className={styles.grid}>
        <Form.Input
          label={texts.register.fields.country}
          type='text'
          name='country'
        />
        <Form.Input
          label={texts.register.fields.state}
          type='text'
          name='state'
        />
        <Form.Input
          label={texts.register.fields.city}
          type='text'
          name='city'
        />
        <Form.Select
          label={texts.register.fields.gender}
          name='gender'
          options={genderOptions}
          placeholder={texts.register.genderOptions.placeholder}
        />
      </div>
      <Form.Radio
        label={texts.register.fields.modality}
        name='modality'
        options={modalityOptions}
      />
    </section>
  );
}
