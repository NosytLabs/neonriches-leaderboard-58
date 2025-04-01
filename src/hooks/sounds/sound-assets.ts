
// Define a more complete SoundType enum that includes all your sound types
export type SoundType = 
  | 'achievement'
  | 'boost'
  | 'click'
  | 'coin'
  | 'coinDrop'
  | 'deposit'
  | 'error'
  | 'level_up'
  | 'levelUp'
  | 'message'
  | 'mockery'
  | 'notification'
  | 'purchase'
  | 'rankUp'
  | 'reward'
  | 'shame'
  | 'success'
  | 'transfer'
  | 'unlock'
  | 'withdrawal'
  | 'fanfare'
  | 'protection'
  | 'royal'
  | 'sparkle';

// Sound file paths for standard sounds
export const soundPaths: Record<SoundType, string> = {
  achievement: '/sounds/achievement.mp3',
  boost: '/sounds/boost.mp3',
  click: '/sounds/click.mp3',
  coin: '/sounds/coin.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  deposit: '/sounds/deposit.mp3',
  error: '/sounds/error.mp3',
  level_up: '/sounds/level-up.mp3',
  levelUp: '/sounds/level-up.mp3', // Alias for level_up
  message: '/sounds/message.mp3',
  mockery: '/sounds/mockery.mp3',
  notification: '/sounds/notification.mp3',
  purchase: '/sounds/purchase.mp3',
  rankUp: '/sounds/rank-up.mp3',
  reward: '/sounds/reward.mp3',
  shame: '/sounds/shame.mp3',
  success: '/sounds/success.mp3',
  transfer: '/sounds/transfer.mp3',
  unlock: '/sounds/unlock.mp3',
  withdrawal: '/sounds/withdrawal.mp3',
  fanfare: '/sounds/fanfare.mp3',
  protection: '/sounds/protection.mp3',
  royal: '/sounds/royal.mp3',
  sparkle: '/sounds/sparkle.mp3'
};

// Sound file paths for premium sounds
export const premiumSoundPaths: Record<SoundType, string> = {
  achievement: '/sounds/premium/achievement.mp3',
  boost: '/sounds/premium/boost.mp3',
  click: '/sounds/premium/click.mp3',
  coin: '/sounds/premium/coin.mp3',
  coinDrop: '/sounds/premium/coin-drop.mp3',
  deposit: '/sounds/premium/deposit.mp3',
  error: '/sounds/premium/error.mp3',
  level_up: '/sounds/premium/level-up.mp3',
  levelUp: '/sounds/premium/level-up.mp3', // Alias for level_up
  message: '/sounds/premium/message.mp3',
  mockery: '/sounds/premium/mockery.mp3',
  notification: '/sounds/premium/notification.mp3',
  purchase: '/sounds/premium/purchase.mp3',
  rankUp: '/sounds/premium/rank-up.mp3',
  reward: '/sounds/premium/reward.mp3',
  shame: '/sounds/premium/shame.mp3',
  success: '/sounds/premium/success.mp3',
  transfer: '/sounds/premium/transfer.mp3',
  unlock: '/sounds/premium/unlock.mp3',
  withdrawal: '/sounds/premium/withdrawal.mp3',
  fanfare: '/sounds/premium/fanfare.mp3',
  protection: '/sounds/premium/protection.mp3',
  royal: '/sounds/premium/royal.mp3',
  sparkle: '/sounds/premium/sparkle.mp3'
};

// Default volumes for sounds
export const soundVolumes: Record<SoundType, number> = {
  achievement: 0.8,
  boost: 0.6,
  click: 0.3,
  coin: 0.7,
  coinDrop: 0.7,
  deposit: 0.7,
  error: 0.5,
  level_up: 0.8,
  levelUp: 0.8, // Alias for level_up
  message: 0.5,
  mockery: 0.7,
  notification: 0.5,
  purchase: 0.7,
  rankUp: 0.8,
  reward: 0.8,
  shame: 0.7,
  success: 0.6,
  transfer: 0.6,
  unlock: 0.7,
  withdrawal: 0.7,
  fanfare: 0.8,
  protection: 0.7,
  royal: 0.8,
  sparkle: 0.6
};

// Export all for use in other files
export default { soundPaths, premiumSoundPaths, soundVolumes };
