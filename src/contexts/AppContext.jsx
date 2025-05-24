'use client';

import { createContext, useCallback, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const resetErrorMessage = useCallback(() => {
    setErrorMessage(null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        errorMessage,
        setErrorMessage,
        resetErrorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
