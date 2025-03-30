
import { SoundType } from '@/types/sound';

// Map of sound types to their file paths
const soundPaths: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
  hover: '/sounds/hover.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  notification: '/sounds/notification.mp3',
  warning: '/sounds/warning.mp3',
  purchase: '/sounds/purchase.mp3',
  rankUp: '/sounds/rank-up.mp3',
  coinDrop: '/sounds/coin-drop.mp3',
  achievement: '/sounds/achievement.mp3',
  trumpets: '/sounds/trumpets.mp3',
  fanfare: '/sounds/fanfare.mp3',
  shame: '/sounds/shame.mp3',
  parchment: '/sounds/parchment.mp3',
  royal: '/sounds/royal.mp3',
  medieval: '/sounds/medieval.mp3',
  crown: '/sounds/crown.mp3',
  info: '/sounds/info.mp3',
  message: '/sounds/message.mp3',
  seal: '/sounds/seal.mp3',
  deposit: '/sounds/deposit.mp3',
  reward: '/sounds/reward.mp3',
  pageChange: '/sounds/page-change.mp3',
  noblesLaugh: '/sounds/nobles-laugh.mp3',
  smoke: '/sounds/smoke.mp3',
  coins: '/sounds/coins.mp3',
  inkScribble: '/sounds/ink-scribble.mp3',
  advertisement: '/sounds/advertisement.mp3'
};

// Get the file path for a sound type
export const getSoundPath = (sound: SoundType): string => {
  return soundPaths[sound] || '/sounds/click.mp3';
};

// Get the amplitude/volume for each sound type
export const getAmplitudes = (): Record<SoundType, number> => {
  return {
    click: 0.5,
    hover: 0.3,
    success: 0.7,
    error: 0.7,
    notification: 0.7,
    warning: 0.7,
    purchase: 0.8,
    rankUp: 0.9,
    coinDrop: 0.8,
    achievement: 0.9,
    trumpets: 1.0,
    fanfare: 1.0,
    shame: 0.8,
    parchment: 0.6,
    royal: 0.9,
    medieval: 0.9,
    crown: 0.8,
    info: 0.6,
    message: 0.6,
    seal: 0.7,
    deposit: 0.8,
    reward: 0.8,
    pageChange: 0.5,
    noblesLaugh: 0.7,
    smoke: 0.6,
    coins: 0.8,
    inkScribble: 0.7,
    advertisement: 0.7
  };
};

export default getSoundPath;
