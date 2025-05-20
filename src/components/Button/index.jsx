import styles from '@/components/Button/Button.module.css';

const variants = {
  filled: styles.filled,
  ghost: styles.ghost,
};

export default function Button({ children, variant = 'filled' }) {
  return (
    <button className={`${styles.button} ${variants[variant]}`}>
      {children}
    </button>
  );
}
