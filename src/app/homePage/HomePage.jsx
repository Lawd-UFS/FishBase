import Header from './Header/Header';
import Hero from './Hero/Hero';
import Map from './Map/Map';
import styles from '@/app/homePage/HomePage.module.css';
import Schedule from './Schedule/Schedule';
import { fetchSchedule } from './Schedule/fetchSchedule';

export default async function HomePage() {
  const schedule = await fetchSchedule();
  return (
    <main className={styles.container}>
      <Header />
      <Hero />
      <Schedule schedule={schedule} />
      <Map />
    </main>
  );
}
