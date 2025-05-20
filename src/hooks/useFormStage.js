import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useMemo } from 'react';

export function useFormStage(schema, defaultValues, onValid) {
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

    if (isFormValid) {
      await handleSubmit(onValid)();
      return true;
    }

    return false;
  }, [handleSubmit, onValid, trigger]);

  const formFunctions = useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      isValid,
      validate,
    }),
    [register, handleSubmit, errors, isValid, validate]
  );

  return { ...formFunctions, getValues };
}
