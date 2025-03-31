
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
  const { play } = useSounds();
  
  const playSound = useCallback((sound: SoundType, options?: { volume?: number; interrupt?: boolean }) => {
    play(sound, {
      volume: options?.volume,
      interrupt: options?.interrupt ?? true,
    });
  }, [play]);
  
  return { playSound };
}

export default useNotificationSounds;
