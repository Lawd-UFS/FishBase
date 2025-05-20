import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useMemo } from 'react';

export function useFormStage(schema, defaultValues) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    getValues,
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues,
  });

  const validate = useCallback(async () => {
    const isFormValid = await trigger();
    return isFormValid;
  }, [trigger]);

  const validateStage = async () => {
    if (validate) {
      return await validate();
    }

    return true;
  };

  const formFunctions = useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      isValid,
      validate,
      validateStage,
    }),
    [register, handleSubmit, errors, isValid, validate, validateStage]
  );

  return { ...formFunctions, getValues };
}
