import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <div className='grid'>
        <Hero />
      </div>
    </main>
  );
}
