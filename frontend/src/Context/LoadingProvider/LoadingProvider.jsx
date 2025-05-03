import React, { createContext, useContext, useState, useEffect } from 'react';

import './LoadingProvider.css'


const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {

  const [load, setLoad] = useState(false);

  const loading = (load) => {
    setLoad(load);
  };

  return (
    <LoadingContext.Provider value={{ loading }}>
      {children}
      {load && (
        <div className='LoadingProvider'>
            <h1>CARREGANDO!</h1>
        </div>
      )}
    </LoadingContext.Provider>
  );
};

export const useLoad = () => useContext(LoadingContext);