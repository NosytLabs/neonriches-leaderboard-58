
import { useContext } from 'react';
import { SoundContext } from './SoundProvider';
import { UseSoundHook } from './types';

export const useSoundContext = (): UseSoundHook => {
  const context = useContext(SoundContext);
  
  if (!context) {
    throw new Error('useSoundContext must be used within a SoundProvider');
  }
  
  return context;
};

export default useSoundContext;
