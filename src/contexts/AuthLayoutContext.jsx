'use client';

import { createContext, useCallback, useContext, useState } from 'react';

const AuthLayoutContext = createContext(null);

export const AuthLayoutProvider = ({ children }) => {
  const [bannerImage, setBannerImage] = useState(null);

  return (
    <AuthLayoutContext.Provider
      value={{
        bannerImage,
        setBannerImage,
      }}
    >
      {children}
    </AuthLayoutContext.Provider>
  );
};

export const useAuthLayout = () => useContext(AuthLayoutContext);
