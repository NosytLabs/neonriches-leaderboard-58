
import { useCallback } from 'react';
import { useSounds } from '@/hooks/useSounds';
import { SoundType } from '@/types/sound-types';

/**
 * Hook for playing notification sounds
 */
export function useNotificationSounds() {
  const { play } = useSounds();
  
  const playSound = useCallback((sound: SoundType) => {
    // Forward to the correct sound type
    play(sound);
  }, [play]);
  
  return { playSound };
}

export type UseNotificationSoundsReturn = ReturnType<typeof useNotificationSounds>;

export default useNotificationSounds;
