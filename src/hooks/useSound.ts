
import { useSoundsContext } from './sounds/use-sounds-context';
import { SoundType, SoundOptions, SoundHook } from '@/types/sound-types';

/**
 * Hook for playing sound effects in the application
 * @returns Sound utilities for playing, stopping, and controlling sound effects
 */
function useSoundHook(): SoundHook {
  const soundContext = useSoundsContext();
  
  // Return the sound context directly - it already implements the full SoundHook interface
  return soundContext;
}

// Export the hook function
export const useSound = useSoundHook;

export default useSoundHook;
