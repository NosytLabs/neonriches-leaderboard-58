
import { useCallback } from 'react';
import { useSound } from './use-sound';
import { SoundType } from '@/types/sound-types';

/**
 * Hook for playing notification sounds
 */
export function useNotificationSounds() {
  const { play } = useSound('notification');
  
  const playSound = useCallback((sound: SoundType) => {
    // Forward to the correct sound type
    play();
  }, [play]);
  
  return { playSound };
}

export default useNotificationSounds;
