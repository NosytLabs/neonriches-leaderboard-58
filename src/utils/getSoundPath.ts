
import { SoundType } from '@/types/sound-types';

/**
 * Get the appropriate sound file path for a given sound type
 * @param sound The type of sound to get the path for
 * @returns The path to the sound file
 */
export const getSoundPath = (sound: SoundType): string => {
  const soundPaths: Record<string, string> = {
    achievement: '/sounds/achievement.mp3',
    boost: '/sounds/boost.mp3',
    click: '/sounds/click.mp3',
    coin: '/sounds/coin.mp3',
    coinDrop: '/sounds/coin_drop.mp3',
    deposit: '/sounds/deposit.mp3',
    error: '/sounds/error.mp3',
    level_up: '/sounds/level_up.mp3',
    message: '/sounds/message.mp3',
    mockery: '/sounds/mockery.mp3',
    notification: '/sounds/notification.mp3',
    purchase: '/sounds/purchase.mp3',
    rank_up: '/sounds/rank_up.mp3',
    reward: '/sounds/reward.mp3',
    royal: '/sounds/royal.mp3',
    royalAnnouncement: '/sounds/royal_announcement.mp3',
    seal: '/sounds/seal.mp3',
    shame: '/sounds/shame.mp3',
    success: '/sounds/success.mp3',
    trumpet: '/sounds/trumpet.mp3',
    trumpets: '/sounds/trumpets.mp3',
    withdrawal: '/sounds/withdrawal.mp3'
  };

  return soundPaths[sound] || '/sounds/notification.mp3';
};

export default getSoundPath;
