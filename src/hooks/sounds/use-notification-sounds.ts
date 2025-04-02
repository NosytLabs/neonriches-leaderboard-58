
import { useCallback } from 'react';
import { SoundType, SoundOptions, UseNotificationSoundsReturn } from '@/types/sound-types';
import { useSound } from './use-sound';

/**
 * Hook for playing notification sounds
 */
export const useNotificationSounds = (): UseNotificationSoundsReturn => {
  const { playSound: playSoundFn, toggleMuted, soundConfig } = useSound();
  
  const playSound = useCallback((type: SoundType, options: SoundOptions = {}) => {
    // Default options for notification sounds
    const notificationOptions: SoundOptions = {
      volume: 0.5,
      ...options
    };
    
    playSoundFn(type, notificationOptions);
  }, [playSoundFn]);
  
  const playNotificationSound = useCallback((type: SoundType = 'notification', options: SoundOptions = {}) => {
    playSound(type, options);
  }, [playSound]);
  
  const mute = useCallback(() => {
    if (soundConfig?.muted === false && toggleMuted) {
      toggleMuted();
    }
  }, [toggleMuted, soundConfig?.muted]);
  
  const unmute = useCallback(() => {
    if (soundConfig?.muted === true && toggleMuted) {
      toggleMuted();
    }
  }, [toggleMuted, soundConfig?.muted]);
  
  return {
    playSound,
    playNotificationSound,
    mute,
    unmute,
    isMuted: soundConfig?.muted || false
  };
};

export default useNotificationSounds;
