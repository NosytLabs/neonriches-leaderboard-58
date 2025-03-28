
// Define the sound types available in the app
export type SoundNames = 
  | 'coinDrop'
  | 'reward'
  | 'notification'
  | 'click'
  | 'success'
  | 'error'
  | 'royalAnnouncement'
  | 'levelUp'
  | 'purchase'
  | 'shame'
  | 'swordClash'
  | 'pageTransition';

// Sound asset paths
export const soundAssets: Record<SoundNames, string> = {
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
  pageTransition: '/sounds/page-transition.mp3'
};

// Volume presets for sounds (0 to 1)
export const defaultVolumes: Record<SoundNames, number> = {
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
  pageTransition: 0.2
};
