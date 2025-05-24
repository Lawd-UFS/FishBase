'use client';

import User from '@/components/UserComponents/User';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.pageCard}>
      <User />
    </div>
  );
}
