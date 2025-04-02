
import { useContext } from 'react';
import { SoundContext } from '../../contexts/SoundContext';
import { SoundType, SoundOptions, SoundHook } from '@/types/sound-types';

/**
 * Custom hook for sound functionality
 * Provides methods to play, control, and configure sounds in the application
 * @returns Sound control methods and state
 */
export const useSound = (): SoundHook => {
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
      currentVolume: 0,
      play: () => {},
      isPlaying: false,
      isSoundEnabled: false
    };
  }
  
  return context;
};

export default useSound;
