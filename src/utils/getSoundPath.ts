
import { SoundType } from '@/types/sound-types';

// Define the sound paths for each sound type
const soundPaths: Record<SoundType, string> = {
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
  sparkle: '/sounds/sparkle.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  trumpet: '/sounds/trumpet.mp3',
  medallion: '/sounds/medallion.mp3',
  seal: '/sounds/seal.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  swordClash: '/sounds/sword-clash.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  // Legacy mappings for backward compatibility
  boost: '/sounds/boost.mp3',
  level_up: '/sounds/level_up.mp3',
  message: '/sounds/message.mp3',
  rank_up: '/sounds/rank_up.mp3',
  reward: '/sounds/reward.mp3',
  royal: '/sounds/royal.mp3',
  trumpets: '/sounds/trumpets.mp3',
  withdrawal: '/sounds/withdrawal.mp3',
};

/**
 * Get the file path for a specific sound
 */
export const getSoundPath = (type: SoundType): string => {
  return soundPaths[type] || '/sounds/notification.mp3';
};

export default getSoundPath;
