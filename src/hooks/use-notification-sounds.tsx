
import { useCallback } from 'react';
import type { SoundType } from './sounds/types';

export const useNotificationSounds = () => {
  const playSound = useCallback((type: SoundType, volume = 0.5) => {
    try {
      console.log(`Playing sound: ${type} at volume ${volume}`);
      // Implementation would play actual sounds
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, []);

  // Added missing functions
  const isMuted = false;
  const toggleMute = () => {
    console.log('Toggle mute functionality');
  };
  
  const preloadSounds = () => {
    console.log('Preloading sounds');
  };

  return { 
    playSound,
    isMuted,
    toggleMute,
    preloadSounds
  };
};

export default useNotificationSounds;
