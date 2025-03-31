
import { SoundType } from '@/hooks/sounds/types';

// Map sound types to their file paths
const SOUND_PATHS: Record<SoundType, string> = {
  coin: '/sounds/coin.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  click: '/sounds/click.mp3',
  notification: '/sounds/notification.mp3',
  achievement: '/sounds/achievement.mp3',
  purchase: '/sounds/purchase.mp3',
  deposit: '/sounds/deposit.mp3',
  mockery: '/sounds/mockery.mp3',
  fanfare: '/sounds/fanfare.mp3',
  levelUp: '/sounds/level-up.mp3',
  shame: '/sounds/shame.mp3',
  protection: '/sounds/protection.mp3',
  sparkle: '/sounds/sparkle.mp3'
};

/**
 * Gets the file path for a given sound type
 * @param type The type of sound to play
 * @returns The path to the sound file or undefined if not found
 */
export const getSoundPath = (type: SoundType): string | undefined => {
  return SOUND_PATHS[type];
};

export default getSoundPath;
