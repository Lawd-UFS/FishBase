import styles from '@/components/Form/Radio/Radio.module.css';
import formStyles from '@/components/Form/Form.module.css';
import { useState } from 'react';

export default function Radio({
  label,
  name,
  options,
  error = null,
  ...props
}) {
  const { onChange, ...restProps } = props;

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e, value) => {
    if (onChange) {
      onChange(e);
    }

    setSelectedOption(value);
  };

  return (
    <div className={formStyles.formInput}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.options}>
        {options.map((option) => (
          <div key={option.value}>
            <input
              type='radio'
              name={name}
              id={`${name}-${option.value}`}
              value={option.value}
              checked={selectedOption === option.value}
              onChange={(e) => handleChange(e, option.value)}
              {...restProps}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className={`${styles.option} ${
                selectedOption === option.value && styles.selected
              }`}
            >
              {option.icon}
              <span>{option.label}</span>
            </label>
          </div>
        ))}
      </div>
      {error && <p className={formStyles.errorMessage}>{error}</p>}
    </div>
  );
}
