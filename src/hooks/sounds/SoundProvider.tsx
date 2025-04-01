
import React, { createContext, useContext, ReactNode } from 'react';
import { useSound } from './use-sound';
import { UseSoundHook } from './types';

// Create a context for the sound functionalities
export const SoundContext = createContext<UseSoundHook | null>(null);

interface SoundProviderProps {
  children: ReactNode;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const soundFunctions = useSound();
  
  return (
    <SoundContext.Provider value={soundFunctions}>
      {children}
    </SoundContext.Provider>
  );
};

// Custom hook to use the sound context
export const useSoundContext = (): UseSoundHook => {
  const context = useContext(SoundContext);
  
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  
  return context;
};

export default SoundProvider;
