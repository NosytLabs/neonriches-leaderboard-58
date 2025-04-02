
// This file needs to import from the correct path
import { useContext } from 'react';
import { SoundContext } from '@/contexts/SoundContext';
import { SoundType, SoundOptions } from '@/types/sound-types';

/**
 * Hook for playing sounds in the application
 */
export const useSound = () => {
  const context = useContext(SoundContext);
  
  if (!context) {
    console.warn('useSound must be used within a SoundProvider');
    
    // Return a fallback implementation when used outside of context
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

export default useSound;
