
import { useCallback } from 'react';
import { useSounds } from './useSounds';
import { SoundType } from '@/types/sound-types';

/**
 * Hook for playing notification sounds - redirecting to useSounds for a unified implementation
 */
export function useNotificationSounds() {
  const sounds = useSounds();
  
  const playSound = useCallback((sound: SoundType) => {
    sounds.play(sound);
  }, [sounds]);
  
  return { playSound };
}

export default useNotificationSounds;
