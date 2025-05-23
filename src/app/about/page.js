'use client';

import Header from '@/components/Header';
import { useLanguage } from '../../contexts/LanguageContext';

export default function SobrePage() {
  const { texts } = useLanguage();
  return (
    <main className='p-8'>
      <div className='background'>
        <Header />
        <div className='about-content'>
          <div className='about-content-container-1'>
            <img
              src='Mapa fishbase.png
            '
              alt='Imagem Exemplo'
            />
            <div className='text-container'>
              <h1>{texts.aboutEvent.title[0]}</h1>
              <p>{texts.aboutEvent.description[0]}</p>
            </div>
          </div>
          <div className='about-content-container-2'>
            <div className='text-container'>
              <h1>{texts.aboutEvent.title[1]}</h1>
              <p>{texts.aboutEvent.description[1]}</p>
            </div>
            <button
              className='fishbase-button'
              onClick={() => window.open('https://www.fishbase.org', '_blank')}
            >
              {texts.btnFishBase}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
