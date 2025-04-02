
// Update imports to the correct path
import { createContext, useContext } from 'react';
import { SoundHook } from '@/types/sound-types';

export const SoundsContext = createContext<SoundHook | null>(null);

export const useSoundsContext = (): SoundHook => {
  const context = useContext(SoundsContext);
  
  if (!context) {
    console.warn('useSoundsContext must be used within a SoundsProvider');
    
    // Return a fallback implementation
    return {
      playSound: () => {},
      stopSound: () => {},
      pauseSound: () => {},
      resumeSound: () => {},
      toggleMute: () => false,
      isMuted: false,
      setVolume: () => {},
      getVolume: () => 0,
      isEnabled: false,
      toggleEnabled: () => {},
      soundConfig: {
        enabled: false,
        volume: 0,
        muted: true
      },
      mute: () => {},
      unmute: () => {},
      toggleMuted: () => false,
      currentVolume: 0
    };
  }
  
  return context;
};

export default useSoundsContext;
