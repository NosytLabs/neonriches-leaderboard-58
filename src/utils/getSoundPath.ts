
import { SoundType } from '@/types/sound-types';

// Regular sound assets
const regularSoundPaths: Record<SoundType, string> = {
  click: '/sounds/click.mp3',
  coins: '/sounds/coins.mp3',
  coins_drop: '/sounds/coins_drop.mp3',
  success: '/sounds/success.mp3',
  error: '/sounds/error.mp3',
  purchase: '/sounds/purchase.mp3',
  trumpets: '/sounds/trumpets.mp3',
  notification: '/sounds/notification.mp3',
  achievement: '/sounds/achievement.mp3',
  rankUp: '/sounds/rank_up.mp3',
  button: '/sounds/button.mp3',
  hover: '/sounds/hover.mp3',
  royal: '/sounds/royal.mp3',
  medallion: '/sounds/medallion.mp3',
  deposit: '/sounds/deposit.mp3',
  parchment: '/sounds/parchment.mp3',
  message: '/sounds/message.mp3',
  medieval: '/sounds/medieval.mp3',
  royalAnnouncement: '/sounds/royal_announcement.mp3',
  trumpet: '/sounds/trumpet.mp3',
  seal: '/sounds/seal.mp3',
  coinDrop: '/sounds/coin_drop.mp3',
  swordClash: '/sounds/sword_clash.mp3',
  noblesLaugh: '/sounds/nobles_laugh.mp3',
  parchmentUnfurl: '/sounds/parchment_unfurl.mp3',
  rankChange: '/sounds/rank_change.mp3',
  coin: '/sounds/coin.mp3',
  reward: '/sounds/reward.mp3',
  pageTransition: '/sounds/page_transition.mp3',
  shame: '/sounds/shame.mp3'
};

// Premium sound assets
const premiumSoundPaths: Record<SoundType, string> = {
  click: '/sounds/premium/click.mp3',
  coins: '/sounds/premium/coins.mp3',
  coins_drop: '/sounds/premium/coins_drop.mp3',
  success: '/sounds/premium/success.mp3',
  error: '/sounds/premium/error.mp3',
  purchase: '/sounds/premium/purchase.mp3',
  trumpets: '/sounds/premium/trumpets.mp3',
  notification: '/sounds/premium/notification.mp3',
  achievement: '/sounds/premium/achievement.mp3',
  rankUp: '/sounds/premium/rank_up.mp3',
  button: '/sounds/premium/button.mp3',
  hover: '/sounds/premium/hover.mp3',
  royal: '/sounds/premium/royal.mp3',
  medallion: '/sounds/premium/medallion.mp3',
  deposit: '/sounds/premium/deposit.mp3',
  parchment: '/sounds/premium/parchment.mp3',
  message: '/sounds/premium/message.mp3',
  medieval: '/sounds/premium/medieval.mp3',
  royalAnnouncement: '/sounds/premium/royal_announcement.mp3',
  trumpet: '/sounds/premium/trumpet.mp3',
  seal: '/sounds/premium/seal.mp3',
  coinDrop: '/sounds/premium/coin_drop.mp3',
  swordClash: '/sounds/premium/sword_clash.mp3',
  noblesLaugh: '/sounds/premium/nobles_laugh.mp3',
  parchmentUnfurl: '/sounds/premium/parchment_unfurl.mp3',
  rankChange: '/sounds/premium/rank_change.mp3',
  coin: '/sounds/premium/coin.mp3',
  reward: '/sounds/premium/reward.mp3',
  pageTransition: '/sounds/premium/page_transition.mp3',
  shame: '/sounds/premium/shame.mp3'
};

// Sound amplitudes (volume adjustments)
const soundAmplitudes: Record<SoundType, number> = {
  click: 0.5,
  coins: 0.6,
  coins_drop: 0.7,
  success: 0.6,
  error: 0.5,
  purchase: 0.7,
  trumpets: 0.8,
  notification: 0.6,
  achievement: 0.7,
  rankUp: 0.8,
  button: 0.5,
  hover: 0.3,
  royal: 0.7,
  medallion: 0.7,
  deposit: 0.7,
  parchment: 0.5,
  message: 0.6,
  medieval: 0.6,
  royalAnnouncement: 0.8,
  trumpet: 0.7,
  seal: 0.6,
  coinDrop: 0.7,
  swordClash: 0.8,
  noblesLaugh: 0.6,
  parchmentUnfurl: 0.5,
  rankChange: 0.7,
  coin: 0.6,
  reward: 0.7,
  pageTransition: 0.4,
  shame: 0.7
};

// Checks whether premium sounds are enabled
const isPremiumEnabled = (): boolean => {
  try {
    return localStorage.getItem('premium-sound-pack') === 'true';
  } catch (e) {
    return false;
  }
};

/**
 * Get the sound file path based on sound type and premium status
 * @param soundType The type of sound to get
 * @returns The path to the sound file
 */
export const getSoundPath = (soundType: SoundType): string => {
  const usePremium = isPremiumEnabled();
  return usePremium ? premiumSoundPaths[soundType] : regularSoundPaths[soundType];
};

/**
 * Get the amplitude (volume adjustment) for a sound type
 * @param soundType The type of sound
 * @returns The amplitude value (0-1)
 */
export const getAmplitudes = (soundType: SoundType): number => {
  return soundAmplitudes[soundType] || 0.5;
};

export default { getSoundPath, getAmplitudes };
