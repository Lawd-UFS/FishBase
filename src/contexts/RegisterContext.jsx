'use client';

import { registerParticipant, resendConfirmationLink } from '@/lib/api';
import { createContext, useCallback, useContext, useState } from 'react';

const RegisterContext = createContext(null);

export const RegisterProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [currentStage, setCurrentStage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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
    if (validateCurrentStage) {
      const isValid = await validateCurrentStage();

      if (!isValid) return false;
    }

    setCurrentStage((prev) => prev + 1);
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

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(null);
  }, []);

  const submitForm = useCallback(async () => {
    setIsLoading(true);
    const response = await registerParticipant(formData);
    setIsLoading(false);

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
      setIsLoading(true);
      const response = await resendConfirmationLink(token);
      setIsLoading(false);

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
        isLoading,
        setIsLoading,
        errorMessage,
        resetErrorMessage,
        goToStage,
        setValidateCurrentStage,
        setGetFormData,
        resetFormData,
        isConfirmation,
        setErrorMessage,
        resetRegister,
        requestNewLink,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
