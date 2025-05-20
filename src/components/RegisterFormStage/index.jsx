'use client';

import styles from '@/components/RegisterFormStage/RegisterFormStage.module.css';
import { useState } from 'react';
import AccountStage from './AccountStage';
import AdditionalInfo from './AdditionalInfo';
import Button from '../Button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FishTail from '@/assets/fish-tail.svg';

export default function RegisterForm() {
  const { texts } = useLanguage();

  const [stage, setStage] = useState(0);

  const stages = texts.register.steps;

  return (
    <div style={{ height: '100vh' }}>
      <header>
        <h1>{texts.register.title}</h1>
        <nav>
          <ul>
            {stages.map((stage, index) => (
              <li key={stage} className={index === stage ? styles.active : ''}>
                <FishTail className={styles.fishTail} />
                <span>{stage}</span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className={styles.form}>
        {stage === 0 && <AccountStage />}
        {stage === 1 && <AdditionalInfo />}
        <div className={styles.buttons}>
          <Button variant='ghost'>
            <ChevronLeft size={24} />
            <span>{texts.register.buttons.back}</span>
          </Button>
          <Button variant='filled'>
            <span>{texts.register.buttons.continue}</span>
            <ChevronRight size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
}
