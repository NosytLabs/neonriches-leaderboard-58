
import { useCallback } from 'react';
import { useSound } from './use-sound';
import { SoundType } from '@/types/sound-types';

export interface UseNotificationSoundsReturn {
  playSound: (sound: SoundType) => void;
}

export function useNotificationSounds(): UseNotificationSoundsReturn {
  const { play } = useSound();
  
  const soundMap: Record<string, SoundType> = {
    success: 'success',
    error: 'error',
    warning: 'error', // Map warning to error for backward compatibility
    info: 'notification',
    purchase: 'purchase',
    achievement: 'achievement',
    deposit: 'deposit',
  };
  
  const playSound = useCallback((sound: SoundType) => {
    play(sound);
  }, [play]);
  
  return { playSound };
}

export default useNotificationSounds;
