
import { SoundType, SoundOptions } from '@/types/sound-types';

// Simplified sound hook
export const useSound = () => {
  const playSound = (type: SoundType, options: SoundOptions = {}) => {
    console.log(`Playing sound: ${type}`);
  };

  const stopSound = (type?: SoundType) => {
    // Simplified implementation
  };

  return {
    playSound,
    stopSound
  };
};

export default useSound;
