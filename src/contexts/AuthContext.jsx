'use client';

import { executelogin, refreshToken } from '@/lib/api';
import { createContext, useContext, useState } from 'react';
import { useApp } from './AppContext';
import { useLanguage } from './LanguageContext';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const { setIsLoading } = useApp();
  const { toggleLanguage } = useLanguage();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const refresh = async () => {
    setIsLoading(true);

    const response = await refreshToken();

    if (response.success) {
      setToken(response.data.access_token);
      setUser(response.data.user);
      toggleLanguage(response.data.user.language);
      setIsLoading(false);
      return;
    }

    setUser({
      role: undefined,
      email: undefined,
      language: undefined,
    });
    setIsLoading(false);
  };

  const login = async (email, password) => {
    const response = await executelogin(email, password);

    const { success, data, error, metadata } = response;

    if (success) {
      setToken(data.access_token);
      setUser(data.user);

      return { success };
    }

    return {
      success,
      error,
    };
  };

  const isAuth = !!token;

  const isAuthLoading = user === null;

  return (
    <AuthContext.Provider
      value={{ user, login, token, refresh, isAuth, isAuthLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
