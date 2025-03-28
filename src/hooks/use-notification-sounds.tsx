
import { useCallback, useState } from 'react';
import type { SoundType } from './sounds/types';

const useNotificationSounds = () => {
  const [isMuted, setIsMuted] = useState(false);
  
  const playSound = useCallback((type: SoundType, volume = 0.5) => {
    if (isMuted) return;
    
    try {
      console.log(`Playing sound: ${type} at volume ${volume}`);
      // Implementation would play actual sounds
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }, [isMuted]);
  
  const toggleMute = useCallback(() => {
    setIsMuted(prev => !prev);
    console.log('Toggle mute functionality');
  }, []);
  
  const preloadSounds = useCallback(() => {
    console.log('Preloading sounds');
  }, []);

  return { 
    playSound,
    isMuted,
    toggleMute,
    preloadSounds
  };
};

export default useNotificationSounds;
