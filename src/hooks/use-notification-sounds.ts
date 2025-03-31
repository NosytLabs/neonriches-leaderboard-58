
import { useCallback } from 'react';
import { useSounds } from './useSounds';
import { SoundType } from '@/types/sound-types';

export interface UseNotificationSoundsReturn {
  playSound: (sound: SoundType) => void;
}

export function useNotificationSounds(): UseNotificationSoundsReturn {
  const { playSound } = useSounds();
  
  const wrappedPlaySound = useCallback((sound: SoundType) => {
    playSound(sound);
  }, [playSound]);
  
  return { playSound: wrappedPlaySound };
}

export default useNotificationSounds;
