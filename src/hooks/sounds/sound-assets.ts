
import { SoundType } from '@/types/sound-types';

/**
 * Standard sound assets paths
 */
export const soundAssets: Record<SoundType, string> = {
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

/**
 * Premium sound assets paths
 */
export const premiumSoundAssets: Record<SoundType, string> = {
  achievement: '/sounds/premium/achievement.mp3',
  boost: '/sounds/premium/boost.mp3',
  click: '/sounds/premium/click.mp3',
  coin: '/sounds/premium/coin.mp3',
  coinDrop: '/sounds/premium/coin_drop.mp3',
  deposit: '/sounds/premium/deposit.mp3',
  error: '/sounds/premium/error.mp3',
  level_up: '/sounds/premium/level_up.mp3',
  message: '/sounds/premium/message.mp3',
  mockery: '/sounds/premium/mockery.mp3',
  notification: '/sounds/premium/notification.mp3',
  purchase: '/sounds/premium/purchase.mp3',
  rank_up: '/sounds/premium/rank_up.mp3',
  reward: '/sounds/premium/reward.mp3',
  royal: '/sounds/premium/royal.mp3',
  royalAnnouncement: '/sounds/premium/royal_announcement.mp3',
  seal: '/sounds/premium/seal.mp3',
  shame: '/sounds/premium/shame.mp3',
  success: '/sounds/premium/success.mp3',
  trumpet: '/sounds/premium/trumpet.mp3',
  trumpets: '/sounds/premium/trumpets.mp3',
  withdrawal: '/sounds/premium/withdrawal.mp3'
};

/**
 * Default volume levels for different sound types
 */
export const soundVolumes: Record<SoundType, number> = {
  achievement: 0.6,
  boost: 0.5,
  click: 0.4,
  coin: 0.5,
  coinDrop: 0.5,
  deposit: 0.6,
  error: 0.5,
  level_up: 0.6,
  message: 0.4,
  mockery: 0.5,
  notification: 0.5,
  purchase: 0.6,
  rank_up: 0.7,
  reward: 0.6,
  royal: 0.6,
  royalAnnouncement: 0.7,
  seal: 0.5,
  shame: 0.4,
  success: 0.5,
  trumpet: 0.5,
  trumpets: 0.6,
  withdrawal: 0.5
};
