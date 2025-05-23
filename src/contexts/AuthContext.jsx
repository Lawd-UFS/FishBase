'use client';

import { executelogin, refreshToken } from '@/lib/api';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const updateToken = async () => {
      const response = await refreshToken();

      if (response.success) {
        setToken(response.data.access_token);
        setUser(response.data.user);
      }
    };

    updateToken();
  }, []);

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

  return (
    <AuthContext.Provider value={{ user, login, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
