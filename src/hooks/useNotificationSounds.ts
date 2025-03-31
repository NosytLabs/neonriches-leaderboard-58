
import { useCallback } from 'react';
import { useSounds } from './useSounds';
import { SoundType } from '@/types/sound-types';

export interface UseNotificationSoundsReturn {
  playSound: (sound: SoundType, options?: { volume?: number; interrupt?: boolean }) => void;
}

/**
 * Hook for playing notification sounds
 */
export function useNotificationSounds(): UseNotificationSoundsReturn {
  const { play: playSoundBase } = useSounds();
  
  const playSound = useCallback((sound: SoundType, options?: { volume?: number; interrupt?: boolean }) => {
    playSoundBase(sound, {
      volume: options?.volume,
      interrupt: options?.interrupt ?? true,
    });
  }, [playSoundBase]);
  
  return { playSound };
}

export default useNotificationSounds;
