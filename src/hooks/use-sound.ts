
import { SoundType, SoundOptions } from '@/types/sound-types';

// Simplified sound hook - this is a compatibility layer
export const useSound = () => {
  const playSound = (type: SoundType, options: SoundOptions = {}) => {
    console.log(`Playing sound: ${type}`);
    
    // Forward this to the real sound hook if it exists in the window
    if (typeof window !== 'undefined' && (window as any).__soundSystem?.playSound) {
      (window as any).__soundSystem.playSound(type, options);
    }
  };

  const stopSound = (type?: SoundType) => {
    // Simplified implementation
    console.log(`Stopping sound: ${type || 'all'}`);
    
    // Forward this to the real sound hook if it exists in the window
    if (typeof window !== 'undefined' && (window as any).__soundSystem?.stopSound) {
      (window as any).__soundSystem.stopSound(type);
    }
  };

  return {
    playSound,
    stopSound,
    play: playSound
  };
};

export default useSound;
