
import { SoundType } from '@/types/sound-types';

// Base paths for sounds
const baseSoundPaths: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
  hover: '/sounds/hover.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  purchase: '/sounds/purchase.mp3',
  rankUp: '/sounds/rank-up.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  achievement: '/sounds/achievement.mp3',
  trumpets: '/sounds/trumpets.mp3',
  fanfare: '/sounds/fanfare.mp3',
  shame: '/sounds/shame.mp3',
  parchment: '/sounds/parchment.mp3',
  crown: '/sounds/crown.mp3',
  royal: '/sounds/royal.mp3',
  medallion: '/sounds/medallion.mp3',
  pageTransition: '/sounds/page-transition.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  pageChange: '/sounds/page-change.mp3',
  info: '/sounds/info.mp3',
  warning: '/sounds/warning.mp3',
  seal: '/sounds/seal.mp3',
  deposit: '/sounds/deposit.mp3',
  reward: '/sounds/reward.mp3',
  unlock: '/sounds/unlock.mp3',
  team: '/sounds/team.mp3',
  applause: '/sounds/applause.mp3',
  levelUp: '/sounds/level-up.mp3',
  boost: '/sounds/boost.mp3',
  curse: '/sounds/curse.mp3',
  laugh: '/sounds/laugh.mp3',
  magic: '/sounds/magic.mp3',
  celebration: '/sounds/celebration.mp3',
  message: '/sounds/message.mp3',
  treasure: '/sounds/treasure.mp3',
  bell: '/sounds/bell.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  swordClash: '/sounds/sword-clash.mp3',
  coins: '/sounds/coins.mp3',
  trumpet: '/sounds/trumpet.mp3',
  coin: '/sounds/coin.mp3',
  // Additional sounds
  medieval: '/sounds/medieval.mp3',
  award: '/sounds/award.mp3'
};

// Default amplitudes for sounds (0-1)
const soundAmplitudes: Record<SoundType, number> = {
  click: 0.5,
  hover: 0.3,
  success: 0.7,
  error: 0.6,
  notification: 0.8,
  purchase: 0.7,
  rankUp: 1.0,
  coinDrop: 0.8,
  achievement: 0.9,
  trumpets: 0.9,
  fanfare: 1.0,
  shame: 0.7,
  parchment: 0.6,
  crown: 0.8,
  royal: 0.9,
  medallion: 0.7,
  pageTransition: 0.5,
  parchmentUnfurl: 0.7,
  pageChange: 0.5,
  info: 0.6,
  warning: 0.6,
  seal: 0.7,
  deposit: 0.7,
  reward: 0.8,
  unlock: 0.7,
  team: 0.7,
  applause: 0.8,
  levelUp: 0.9,
  boost: 0.8,
  curse: 0.7,
  laugh: 0.7,
  magic: 0.8,
  celebration: 0.9,
  message: 0.6,
  treasure: 0.7,
  bell: 0.7,
  royalAnnouncement: 1.0,
  swordClash: 0.8,
  coins: 0.7,
  trumpet: 0.8,
  coin: 0.7,
  // Additional sounds
  medieval: 0.7,
  award: 0.8
};

// Duration of sounds in seconds (for tracking playback)
const soundDurations: Record<SoundType, number> = {
  click: 0.3,
  hover: 0.1,
  success: 1.5,
  error: 0.8,
  notification: 1.0,
  purchase: 2.0,
  rankUp: 3.0,
  coinDrop: 1.2,
  achievement: 2.5,
  trumpets: 3.5,
  fanfare: 4.0,
  shame: 2.0,
  parchment: 1.0,
  crown: 2.0,
  royal: 3.0,
  medallion: 1.5,
  pageTransition: 0.7,
  parchmentUnfurl: 1.2,
  pageChange: 0.7,
  info: 0.8,
  warning: 1.0,
  seal: 1.5,
  deposit: 1.0,
  reward: 2.0,
  unlock: 1.5,
  team: 1.2,
  applause: 3.0,
  levelUp: 2.0,
  boost: 1.5,
  curse: 1.8,
  laugh: 2.5,
  magic: 1.7,
  celebration: 3.0,
  message: 0.8,
  treasure: 2.0,
  bell: 1.0,
  royalAnnouncement: 4.0,
  swordClash: 1.0,
  coins: 1.5,
  trumpet: 2.0,
  coin: 0.7,
  // Additional sounds
  medieval: 2.5,
  award: 1.8
};

/**
 * Get the path to a sound file
 */
export function getSoundPath(sound: SoundType): string {
  return baseSoundPaths[sound] || '';
}

/**
 * Get the amplitude (volume multiplier) for a sound
 */
export function getAmplitudes(sound: SoundType): number {
  return soundAmplitudes[sound] || 0.7;
}

export { soundDurations };
