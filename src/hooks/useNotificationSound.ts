
import { useSounds } from './useSounds';
import { SoundType } from '@/types/sound-types';

// Simple wrapper for backward compatibility
const useNotificationSound = () => {
  const { play } = useSounds();
  
  const playSound = (sound: SoundType) => {
    play(sound);
  };
  
  return { playSound };
};

export default useNotificationSound;
