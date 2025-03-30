
import { SoundType } from '@/types/sound-types';

// Map of sound types to their file paths
const soundAssets: Record<SoundType, string> = {
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
  treasure: '/sounds/treasure.mp3',
  royal: '/sounds/royal.mp3',
  crown: '/sounds/crown.mp3',
  pageTransition: '/sounds/page-transition.mp3',
  parchmentUnfurl: '/sounds/parchment-unfurl.mp3',
  info: '/sounds/info.mp3'
};

// Sound durations in milliseconds
export const soundDurations: Record<SoundType, number> = {
  click: 200,
  hover: 100,
  success: 1000,
  error: 800,
  notification: 700,
  purchase: 1200,
  rankUp: 2500,
  coinDrop: 800,
  achievement: 3000,
  trumpets: 3500,
  fanfare: 4000,
  shame: 1500,
  parchment: 1200,
  treasure: 2000,
  royal: 1800,
  crown: 1500,
  pageTransition: 600,
  parchmentUnfurl: 1500,
  info: 500
};

export default soundAssets;
