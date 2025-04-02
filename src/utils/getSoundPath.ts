
import { SoundType } from '@/hooks/sounds/types';

// Define sound paths
const soundPaths: Record<SoundType, string> = {
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  achievement: '/sounds/achievement.mp3',
  deposit: '/sounds/deposit.mp3',
  withdraw: '/sounds/withdraw.mp3',
  unlock: '/sounds/unlock.mp3',
  level_up: '/sounds/level-up.mp3',
  rank_up: '/sounds/rank-up.mp3',
  click: '/sounds/click.mp3',
  toggle: '/sounds/toggle.mp3',
  alert: '/sounds/alert.mp3',
  badge: '/sounds/badge.mp3',
  coin: '/sounds/coin.mp3',
  upgrade: '/sounds/upgrade.mp3',
  down: '/sounds/down.mp3',
  up: '/sounds/up.mp3',
  fanfare: '/sounds/fanfare.mp3',
  purchase: '/sounds/purchase.mp3',
  withdrawal: '/sounds/withdrawal.mp3',
  boost: '/sounds/boost.mp3',
  message: '/sounds/message.mp3',
  mockery: '/sounds/mockery.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  shame: '/sounds/shame.mp3',
  royal: '/sounds/royal.mp3',
  protection: '/sounds/protection.mp3',
  sparkle: '/sounds/sparkle.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  trumpet: '/sounds/trumpet.mp3',
  medallion: '/sounds/medallion.mp3',
  seal: '/sounds/seal.mp3',
  transfer: '/sounds/transfer.mp3',
  team: '/sounds/team.mp3',
  reward: '/sounds/reward.mp3',
  swordClash: '/sounds/sword-clash.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  pageChange: '/sounds/page-change.mp3',
  wish: '/sounds/wish.mp3',
  inkScribble: '/sounds/ink-scribble.mp3',
  hover: '/sounds/hover.mp3',
  advertisement: '/sounds/advertisement.mp3'
};

/**
 * Get the path for a sound type
 * @param type - Sound type
 * @returns Path to the sound file
 */
const getSoundPath = (type: SoundType): string => {
  return soundPaths[type] || '';
};

export default getSoundPath;
