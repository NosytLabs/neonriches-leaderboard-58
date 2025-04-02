
import { SoundType } from '@/types/sound-types';

// Map of sound types to file paths
const soundPaths: Record<string, string> = {
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  purchase: '/sounds/purchase.mp3',
  achievement: '/sounds/achievement.mp3',
  deposit: '/sounds/deposit.mp3',
  withdrawal: '/sounds/withdrawal.mp3',
  rank_up: '/sounds/rank-up.mp3',
  level_up: '/sounds/level-up.mp3',
  levelUp: '/sounds/level-up.mp3',
  coin: '/sounds/coin.mp3',
  shame: '/sounds/shame.mp3',
  mockery: '/sounds/mockery.mp3',
  boost: '/sounds/boost.mp3',
  throne: '/sounds/throne.mp3',
  royal: '/sounds/royal.mp3',
  click: '/sounds/click.mp3',
  message: '/sounds/message.mp3',
  reward: '/sounds/reward.mp3',
  chime: '/sounds/chime.mp3',
  fanfare: '/sounds/fanfare.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  sparkle: '/sounds/sparkle.mp3',
  protection: '/sounds/protection.mp3',
  transfer: '/sounds/transfer.mp3',
  unlock: '/sounds/unlock.mp3',
  // Premium sound mappings
  royal_preview: '/sounds/premium/royal/preview.mp3',
  royal_bell: '/sounds/premium/royal/bell.mp3',
  royal_fanfare: '/sounds/premium/royal/fanfare.mp3',
  royal_announcement: '/sounds/premium/royal/announcement.mp3',
  royal_success: '/sounds/premium/royal/success.mp3',
  epic_preview: '/sounds/premium/epic/preview.mp3',
  epic_victory: '/sounds/premium/epic/victory.mp3',
  epic_defeat: '/sounds/premium/epic/defeat.mp3',
  epic_discovery: '/sounds/premium/epic/discovery.mp3',
  epic_challenge: '/sounds/premium/epic/challenge.mp3',
  minimal_preview: '/sounds/premium/minimal/preview.mp3',
  minimal_notification: '/sounds/premium/minimal/notification.mp3',
  minimal_success: '/sounds/premium/minimal/success.mp3',
  minimal_alert: '/sounds/premium/minimal/alert.mp3',
  minimal_action: '/sounds/premium/minimal/action.mp3'
};

/**
 * Get the sound file path for a sound type
 * @param type The sound type
 * @returns The file path to the sound
 */
const getSoundPath = (type: SoundType): string => {
  return soundPaths[type] || '';
};

export default getSoundPath;
