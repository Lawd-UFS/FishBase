import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero">
      <h1>
        <span className="highlight">23rd&nbsp;</span>
        FishBase &amp; SeaLifeBase
      </h1>
      <h2>Symposium</h2>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/registro" className="btn-primary">
          Inscreva-se →
        </Link>
        <Link href="/programacao" className="btn-secondary" style={{ marginLeft: '1rem' }}>
          Confira o evento ↓
        </Link>
      </div>
    </div>
  );
}
