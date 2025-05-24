import { ParticipantSidebar } from './ParticipantSidebar';
import { ParticipantHeader } from './ParticipantHeader';
import styles from './page.module.css';
import { RoleGuard } from '@/components/RoleGuard';

export default function Layout({ children }) {
  return (
    <RoleGuard roles={['participant']}>
      <ParticipantHeader />
      <div className={styles.container}>
        <ParticipantSidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </RoleGuard>
  );
}
