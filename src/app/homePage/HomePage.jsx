import Header from './Header/Header';
import Hero from './Hero/Hero';
import Map from './Map/Map';
import styles from '@/app/homePage/HomePage.module.css';
import Schedule from './Schedule/Schedule';
import Footer from './Footer/Footer';

export default function HomePage() {
  return (
    <main className={styles.container}>
      <Header />
      <Hero />
      <Schedule />
      <Map />
      <Footer />
    </main>
  );
}
