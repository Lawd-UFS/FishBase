import React, { createContext, useContext, useState, useEffect } from 'react';

import './AlertProvider.css'


const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [message, setMessage] = useState('');
  const [action, setAction] = useState('');
  const [visible, setVisible] = useState(false);

  const notify = (msg, act) => {
    setMessage(msg);
    setAction(act);
    setVisible(true);
  };

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AlertContext.Provider value={{ notify }}>
      {children}
      {visible && (
        <div className={`AlertCustom ${action}`}>
          {message}
          <img src={`public/images/${action}.png`}/>
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);