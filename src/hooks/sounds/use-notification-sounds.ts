
import { useCallback } from 'react';
import { SoundType, SoundOptions } from '@/types/sound-types';
import { useSound } from './use-sound';

interface UseNotificationSoundsReturn {
  playSound: (type: SoundType, options?: SoundOptions) => void;
  mute: () => void;
  unmute: () => void;
  isMuted: boolean;
}

/**
 * Hook for playing notification sounds
 */
const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const { playSound: playSoundFn, toggleMuted, soundConfig } = useSound();
  
  const playSound = useCallback((type: SoundType, options: SoundOptions = {}) => {
    // Default options for notification sounds
    const notificationOptions: SoundOptions = {
      volume: 0.5,
      ...options
    };
    
    playSoundFn(type, notificationOptions);
  }, [playSoundFn]);
  
  const mute = useCallback(() => {
    if (soundConfig?.muted === false) {
      toggleMuted();
    }
  }, [toggleMuted, soundConfig?.muted]);
  
  const unmute = useCallback(() => {
    if (soundConfig?.muted === true) {
      toggleMuted();
    }
  }, [toggleMuted, soundConfig?.muted]);
  
  return {
    playSound,
    mute,
    unmute,
    isMuted: soundConfig?.muted || false
  };
};

export default useNotificationSounds;
