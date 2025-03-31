
import { useSound as useSoundHook } from './sounds/use-sound';
import { SoundType, AudioOptions, UseSoundReturn } from '@/types/sound-types';

/**
 * A wrapper around the sound hook to provide a simplified API
 * This maintains backward compatibility while using the new system
 */
export const useSound = (
  defaultSound?: SoundType,
  options?: AudioOptions
): UseSoundReturn => {
  return useSoundHook(defaultSound, options);
};

export default useSound;
