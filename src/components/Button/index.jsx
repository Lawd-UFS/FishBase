import styles from '@/components/Button/Button.module.css';

const variants = {
  filled: styles.filled,
  ghost: styles.ghost,
};

export default function Button({
  children,
  variant = 'filled',
  color = null,
  onClick = null,
  style = null,
}) {
  return (
    <button
      className={`${styles.button} ${variants[variant]}`}
      onClick={onClick}
      style={{ color, ...style }}
    >
      {children}
    </button>
  );
}
