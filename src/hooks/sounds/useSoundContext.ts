
import { useContext } from 'react';
import { SoundContext } from '../../contexts/SoundContext';
import { SoundHook } from '@/types/sound-types';

/**
 * Hook to access the sound context
 * @returns The sound context
 */
export const useSoundContext = (): SoundHook => {
  const context = useContext(SoundContext);
  
  if (!context) {
    console.warn('useSoundContext must be used within a SoundProvider');
    
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
      currentVolume: 0,
      play: () => {},
      isPlaying: false,
      isSoundEnabled: false
    };
  }
  
  return context;
};

export default useSoundContext;
