'use client';

import { createContext, useCallback, useContext, useState } from 'react';

const AuthLayoutContext = createContext(null);

export const AuthLayoutProvider = ({ children }) => {
  const [bannerImage, setBannerImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(null);
  }, []);

  return (
    <AuthLayoutContext.Provider
      value={{
        bannerImage,
        setBannerImage,
        isLoading,
        setIsLoading,
        errorMessage,
        setErrorMessage,
        resetErrorMessage,
      }}
    >
      {children}
    </AuthLayoutContext.Provider>
  );
};

export const useAuthLayout = () => useContext(AuthLayoutContext);
