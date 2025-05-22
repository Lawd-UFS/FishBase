import { X } from 'lucide-react';
import styles from './Error.module.css';

export function Error({ message, onClick }) {
  return (
    <div className={styles.error}>
      <p>{message}</p>
      <X size={16} onClick={onClick} className={styles.close} />
    </div>
  );
}
