import styles from '@/components/Form/Select/Select.module.css';
import formStyles from '@/components/Form.module.css';

export default function Select({ label, name, options, placeholder }) {
  return (
    <div className={`${formStyles.formInput} ${styles.select}`}>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        <option value='' disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
