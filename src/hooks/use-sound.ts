
import { useSound as useSoundHook } from './sounds/use-sound';
import type { SoundOptions, SoundType, UseSoundHook } from './sounds/types';

/**
 * Enhanced useSound hook with backward compatibility
 * This is a wrapper around the core sound hook that provides
 * backward compatibility with both naming conventions
 */
export const useSound = (): UseSoundHook => {
  const sound = useSoundHook();
  
  // Add backward compatibility for play method
  return {
    ...sound,
    play: sound.playSound
  };
};

export default useSound;
