
import { useCallback } from 'react';
import { useSounds } from './useSounds';
import { SoundType, NotificationSoundOptions } from '@/types/sound-types';

export interface UseNotificationSoundsReturn {
  playSound: (sound: SoundType, options?: NotificationSoundOptions) => void;
}

/**
 * Hook for playing notification sounds
 */
export function useNotificationSounds(): UseNotificationSoundsReturn {
  const { playSound: playSoundBase } = useSounds();
  
  const playSound = useCallback((sound: SoundType, options?: NotificationSoundOptions) => {
    playSoundBase(sound, {
      volume: options?.volume,
      interrupt: true,
    });
  }, [playSoundBase]);
  
  return { playSound };
}

export default useNotificationSounds;
