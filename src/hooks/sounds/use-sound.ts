
import { useContext } from 'react';
import { SoundContext } from './SoundProvider';
import { SoundHook, SoundOptions, SoundType } from '../sound-types';

/**
 * Hook to use sound effects
 */
export const useSound = (): SoundHook => {
  const context = useContext(SoundContext);
  
  if (!context) {
    console.error('useSound must be used within a SoundProvider');
    
    // Return a no-op implementation
    return {
      playSound: () => {},
      stopSound: () => {},
      pauseSound: () => {},
      resumeSound: () => {},
      toggleMute: () => {},
      isMuted: false,
      setVolume: () => {},
      getVolume: () => 0,
      isEnabled: false,
      toggleEnabled: () => {}
    };
  }
  
  return context;
};

/**
 * Shorthand hook for just playing sounds
 */
export const usePlaySound = (): (sound: SoundType, options?: SoundOptions) => void => {
  const { playSound } = useSound();
  return playSound;
};

export default useSound;
