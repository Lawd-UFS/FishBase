import styles from '@/components/Form/Input/Input.module.css';
import formStyles from '@/components/Form/Form.module.css';

export default function Input({
  label,
  type,
  name,
  leftIcon = null,
  rightIcon = null,
  onChange = null,
  onFocus = null,
  error = null,
  ...props
}) {
  return (
    <div className={`${formStyles.formInput} ${error && styles.error}`}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.inputContainer}>
        {leftIcon}
        <input
          id={name}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          {...props}
        />
        {rightIcon}
      </div>
      {error && <p className={formStyles.errorMessage}>{error}</p>}
    </div>
  );
}
