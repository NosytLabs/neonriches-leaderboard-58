
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
  const { playSound } = useSounds();
  
  const wrappedPlaySound = useCallback((sound: SoundType, options?: NotificationSoundOptions) => {
    playSound(sound, options);
  }, [playSound]);
  
  return { playSound: wrappedPlaySound };
}

export default useNotificationSounds;
