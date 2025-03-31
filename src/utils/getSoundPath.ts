
import { SoundType } from '@/types/sound-types';
import { soundAssets } from '@/hooks/sounds/sound-assets';

/**
 * Get the appropriate sound file path for a given sound type
 * @param sound The type of sound to get the path for
 * @returns The path to the sound file
 */
export const getSoundPath = (sound: SoundType): string => {
  return soundAssets[sound] || '/sounds/notification.mp3';
};

export default getSoundPath;
