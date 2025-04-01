
import { SoundType } from '@/hooks/sounds/types';

// Returns the path to the sound file based on the sound type
export const getSoundPath = (type: SoundType): string => {
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
    reward: '/sounds/reward.mp3',
    boost: '/sounds/boost.mp3',
    coinDrop: '/sounds/coin-drop.mp3',
    message: '/sounds/message.mp3',
    royal: '/sounds/royal.mp3',
    withdrawal: '/sounds/withdrawal.mp3',
    sparkle: '/sounds/sparkle.mp3',
    protection: '/sounds/protection.mp3',
    transfer: '/sounds/transfer.mp3',
    unlock: '/sounds/unlock.mp3',
    royalAnnouncement: '/sounds/royal-announcement.mp3',
    team: '/sounds/team.mp3',
    rank_up: '/sounds/rank-up.mp3',
    trumpet: '/sounds/trumpet.mp3',
    medallion: '/sounds/medallion.mp3',
    seal: '/sounds/seal.mp3'
  };

  return soundPaths[type] || '/sounds/notification.mp3';
};

export default getSoundPath;
