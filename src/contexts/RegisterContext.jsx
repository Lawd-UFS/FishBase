'use client';

import { registerParticipant, resendConfirmationLink } from '@/lib/api';
import { createContext, useCallback, useContext, useState } from 'react';
import { useAuthLayout } from './AuthLayoutContext';

const RegisterContext = createContext(null);

export const RegisterProvider = ({ children }) => {
  const { setErrorMessage, resetErrorMessage } = useAuthLayout();

  const [formData, setFormData] = useState({});
  const [currentStage, setCurrentStage] = useState(0);
  const [validateCurrentStage, setValidateCurrentStage] = useState(null);
  const [getFormData, setGetFormData] = useState(null);
  const [isConfirmation, setIsConfirmation] = useState(false);

  const updateFormData = useCallback(async (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const resetFormData = useCallback(() => {
    setFormData({});
  }, []);

  const resetRegister = useCallback(() => {
    setCurrentStage(0);
    setValidateCurrentStage(null);
    setGetFormData(null);
    setIsConfirmation(false);
    setErrorMessage(null);
    resetFormData();
  }, []);

  const nextStage = useCallback(async () => {
    setIsLoading(true);

    if (validateCurrentStage) {
      const isValid = await validateCurrentStage();

      if (!isValid) {
        setIsLoading(false);
        return false;
      }
    }

    setCurrentStage((prev) => prev + 1);
    setIsLoading(false);
    return true;
  }, [validateCurrentStage]);

  const previousStage = useCallback(() => {
    if (getFormData) {
      updateFormData(getFormData());
    }

    setCurrentStage((prev) => prev - 1);
  }, [getFormData]);

  const goToStage = useCallback(
    async (stage) => {
      if (stage === currentStage) return false;

      if (stage < currentStage && getFormData) {
        updateFormData(getFormData());
        setValidateCurrentStage(null);
        setCurrentStage(stage);
        return true;
      }

      if (validateCurrentStage) {
        const isValid = await validateCurrentStage();

        if (!isValid) return false;
      }

      setCurrentStage(stage);
      setValidateCurrentStage(null);
      return true;
    },
    [validateCurrentStage, getFormData]
  );

  const submitForm = useCallback(async () => {
    const response = await registerParticipant(formData);

    if (response.success) {
      setIsConfirmation(true);
      resetErrorMessage();
      resetFormData();
    } else {
      setErrorMessage(response.error.message);
    }

    return response;
  }, [formData]);

  const requestNewLink = useCallback(
    async (token) => {
      const response = await resendConfirmationLink(token);

      if (response.success) {
        setIsConfirmation(true);
        resetErrorMessage();
        resetFormData();
      } else {
        setErrorMessage(response.error.message);
      }

      return response;
    },
    [formData]
  );

  return (
    <RegisterContext.Provider
      value={{
        formData,
        currentStage,
        updateFormData,
        nextStage,
        previousStage,
        submitForm,
        goToStage,
        setValidateCurrentStage,
        setGetFormData,
        resetFormData,
        isConfirmation,
        resetRegister,
        requestNewLink,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
