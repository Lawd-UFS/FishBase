import Header from '../homePage/Header/Header';
import pt from '../../locales/pt.json';
import en from '../../locales/en.json';

export const dynamic = 'force-dynamic';

async function fetchProgramacao() {
  const res = await fetch('https://fishbase-backend.onrender.com/programming', {
    cache: 'no-store',
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.success ? json.data : [];
}

// formata ISO para "dd/mm/aaaa hh:mm"
function formatDateTimeBR(isoString) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(date);
}

export default async function ProgramacaoPage() {
  const sessoes = await fetchProgramacao();

  // idioma fixo por enquanto (pt ou en)
  const language = 'pt'; // ou 'en'
  const texts = language === 'pt' ? pt : en;

  return (
    <main className='container'>
      <div className='background' />
      <Header />

      <section className='schedule-section'>
        <div className='cards-container'>
          {sessoes.length > 0 ? (
            sessoes.map((sessao, i) => {
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
