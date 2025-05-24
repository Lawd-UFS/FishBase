import styles from '@/components/Spinner/Spinner.module.css';

export function Spinner({ size = 24, className = null }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.spinner}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.ray}
            style={{
              transform: `rotate(${i * 45}deg)`,
              animationDelay: `${i * 0.1}s`,
              transformOrigin: `50% ${size}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
