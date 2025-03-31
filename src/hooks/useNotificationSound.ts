
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

// Re-export the unified sound hook for backward compatibility
export default useNotificationSound;
