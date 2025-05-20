import styles from '@/components/Form/Select/Select.module.css';
import formStyles from '@/components/Form/Form.module.css';

export default function Select({
  label,
  name,
  options,
  error = null,
  ...props
}) {
  return (
    <div className={`${formStyles.formInput} ${styles.select}`}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className={formStyles.errorMessage}>{error}</p>}
    </div>
  );
}
