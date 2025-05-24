'use client';

import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { getProgramming } from '@/lib/api';
import { useLanguage } from '@/contexts/LanguageContext';

// formata ISO para "dd/mm/aaaa hh:mm"
function formatDateTimeBR(isoString) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(date);
}

export default function ProgramacaoPage() {
  const [sessions, setSessions] = useState([]);
  const { texts } = useLanguage();

  useEffect(() => {
    const getSessions = async () => {
      const response = await getProgramming();

      if (response.success) {
        setSessions(response.data);
      }
    };

    getSessions();
  }, []);

  return (
    <main className='container'>
      <div className='background' />
      <Header />

      <section className='schedule-section'>
        <div className='cards-container'>
          {sessions.length > 0 ? (
            sessions.map((sessao, i) => {
              const dateBR = formatDateTimeBR(sessao.dateTime);
              return (
                <div key={sessao.id ?? i} className='event-card'>
                  <div className='card-top-bar' />
                  <div className='card-body'>
                    <div className='title'>{sessao.title}</div>
                    <div className='speaker'>{sessao.speaker || '—'}</div>
                    <div className='theme'>{sessao.theme}</div>
                  </div>
                  <div className='date-pill'>{dateBR}</div>
                </div>
              );
            })
          ) : (
            <p style={{ color: '#fff', textAlign: 'center', width: '100%' }}>
              {texts.programming.noSessions}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
