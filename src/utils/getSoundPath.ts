
import { SoundType } from '@/types/sound-types';

/**
 * Get the path to a sound file based on its type
 * @param type Sound type
 * @returns Path to the sound file or undefined if not found
 */
const getSoundPath = (type: SoundType): string | undefined => {
  // Sound paths mapping
  const soundPaths: Record<string, string> = {
    // Basic sounds
    click: '/sounds/click.mp3',
    success: '/sounds/success.mp3',
    error: '/sounds/error.mp3',
    notification: '/sounds/notification.mp3',
    achievement: '/sounds/achievement.mp3',
    
    // Financial sounds
    coin: '/sounds/coin.mp3',
    purchase: '/sounds/purchase.mp3',
    deposit: '/sounds/deposit.mp3',
    withdrawal: '/sounds/withdrawal.mp3',
    
    // Progress sounds
    levelUp: '/sounds/level-up.mp3',
    level_up: '/sounds/level-up.mp3',
    rankUp: '/sounds/rank-up.mp3',
    rank_up: '/sounds/rank-up.mp3',
    
    // Special effects
    boost: '/sounds/boost.mp3',
    message: '/sounds/message.mp3',
    mockery: '/sounds/mockery.mp3',
    shame: '/sounds/shame.mp3',
    fanfare: '/sounds/fanfare.mp3',
    royal: '/sounds/royal.mp3',
    protection: '/sounds/protection.mp3',
    sparkle: '/sounds/sparkle.mp3',
    
    // Additional sounds
    coinDrop: '/sounds/coin-drop.mp3',
    royalAnnouncement: '/sounds/royal-announcement.mp3',
    trumpet: '/sounds/trumpet.mp3',
    medallion: '/sounds/medallion.mp3',
    seal: '/sounds/seal.mp3',
    transfer: '/sounds/transfer.mp3',
    unlock: '/sounds/unlock.mp3',
    team: '/sounds/team.mp3',
    reward: '/sounds/reward.mp3',
    chime: '/sounds/chime.mp3',
    alert: '/sounds/alert.mp3',
    complete: '/sounds/complete.mp3',
    loading: '/sounds/loading.mp3',
    
    // Medieval themed sounds
    swordClash: '/sounds/sword-clash.mp3',
    noblesLaugh: '/sounds/nobles-laugh.mp3',
    parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
    pageChange: '/sounds/page-change.mp3',
    wish: '/sounds/wish.mp3',
    inkScribble: '/sounds/ink-scribble.mp3',
    hover: '/sounds/hover.mp3'
  };
  
  return soundPaths[type];
};

export default getSoundPath;
