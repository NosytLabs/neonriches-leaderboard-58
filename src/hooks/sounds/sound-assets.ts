
import { SoundType } from './types';

// Define sound file paths
export const soundAssets: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  purchase: '/sounds/purchase.mp3',
  royalAnnouncement: '/sounds/royal-announcement.mp3',
  pageTransition: '/sounds/page-transition.mp3',
  reward: '/sounds/reward.mp3',
  win: '/sounds/win.mp3',
  message: '/sounds/message.mp3',
  shame: '/sounds/shame.mp3',
  swordClash: '/sounds/sword-clash.mp3',
  seal: '/sounds/seal.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  levelUp: '/sounds/level-up.mp3',
  wish: '/sounds/wish.mp3',
  pageChange: '/sounds/page-change.mp3',
  medallion: '/sounds/medallion.mp3',
  trumpet: '/sounds/trumpet.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  inkScribble: '/sounds/ink-scribble.mp3',
  hover: '/sounds/hover.mp3',
  advertisement: '/sounds/advertisement.mp3'
};

// Define default volumes for each sound type
export const soundVolumes: Record<SoundType, number> = {
  coinDrop: 0.7,
  reward: 0.8,
  notification: 0.6,
  click: 0.5,
  success: 0.7,
  error: 0.7,
  royalAnnouncement: 0.9,
  levelUp: 0.8,
  purchase: 0.7,
  shame: 0.8,
  swordClash: 0.6,
  seal: 0.7,
  parchmentUnfurl: 0.6,
  win: 0.8,
  message: 0.6,
  wish: 0.7,
  pageTransition: 0.5,
  pageChange: 0.5,
  medallion: 0.7,
  trumpet: 0.8,
  noblesLaugh: 0.7,
  inkScribble: 0.6,
  hover: 0.3,
  advertisement: 0.6
};
