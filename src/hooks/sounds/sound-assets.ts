
import { SoundType } from './types';

// Sound asset paths
export const soundAssets: Record<SoundType, string> = {
  coinDrop: '/sounds/coin-drop.mp3',
  reward: '/sounds/reward.mp3',
  notification: '/sounds/notification.mp3',
  click: '/sounds/click.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  levelUp: '/sounds/level-up.mp3',
  purchase: '/sounds/purchase.mp3',
  shame: '/sounds/shame.mp3',
  swordClash: '/sounds/sword-clash.mp3',
  pageTransition: '/sounds/page-transition.mp3',
  wish: '/sounds/wish.mp3',
  pageChange: '/sounds/page-transition.mp3', // Using page-transition for pageChange
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  seal: '/sounds/seal.mp3',
  medallion: '/sounds/medallion.mp3',
  trumpet: '/sounds/trumpet.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  inkScribble: '/sounds/ink-scribble.mp3',
  hover: '/sounds/hover.mp3',
  advertisement: '/sounds/advertisement.mp3'
};

// Volume presets for sounds (0 to 1)
export const defaultVolumes: Record<SoundType, number> = {
  coinDrop: 0.4,
  reward: 0.3,
  notification: 0.2,
  click: 0.1,
  success: 0.3,
  error: 0.2,
  royalAnnouncement: 0.3,
  levelUp: 0.4,
  purchase: 0.3,
  shame: 0.3,
  swordClash: 0.3,
  pageTransition: 0.2,
  wish: 0.3,
  pageChange: 0.2,
  parchmentUnfurl: 0.4,
  seal: 0.4,
  medallion: 0.5,
  trumpet: 0.6,
  noblesLaugh: 0.5,
  inkScribble: 0.3,
  hover: 0.2,
  advertisement: 0.4
};
