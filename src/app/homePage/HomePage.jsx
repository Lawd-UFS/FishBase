import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import styles from "@/app/homePage/HomePage.module.css"


export default function HomePage() {
  return (
    <main className={styles.container}>
      <Header />
      <Hero />
    </main>
  );
}
