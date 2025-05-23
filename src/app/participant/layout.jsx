import { ParticipantSidebar } from './ParticipantSidebar';
import { ParticipantHeader } from './ParticipantHeader';
import styles from './page.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <ParticipantHeader />
      <div className={styles.container}>
        <ParticipantSidebar />
        <main className={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}
