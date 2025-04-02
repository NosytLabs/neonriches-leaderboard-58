
import React, { createContext } from 'react';

interface HelmetProviderProps {
  children: React.ReactNode;
  context?: object;
}

export const HelmetContext = createContext({});

// This is a fallback component that mimics react-helmet-async's HelmetProvider
// It will be used until the real package is properly loaded
const HelmetProvider: React.FC<HelmetProviderProps> = ({ children, context = {} }) => {
  return (
    <HelmetContext.Provider value={context}>
      {children}
    </HelmetContext.Provider>
  );
};

export default HelmetProvider;
