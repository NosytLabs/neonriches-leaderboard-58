
import { PremiumSoundPackDetails, SoundType } from '@/types/sound-types';

/**
 * Premium sound packs available for purchase
 */
export const premiumSoundPacks: PremiumSoundPackDetails[] = [
  {
    id: 'royal-sounds',
    name: 'Royal Court',
    description: 'Elegant sounds fit for royalty',
    price: 5000,
    icon: 'crown',
    preview: '/sounds/royal/crown.mp3',
    previewSound: 'royal',
    sounds: ['success', 'notification', 'purchase', 'rank_up', 'level_up', 'reward', 'royal'],
    features: [
      'Premium court sounds',
      'Royal fanfare',
      'Noble notifications',
      'Kingly purchases'
    ],
    enabled: true
  },
  {
    id: 'gold-tier',
    name: 'Gold Rush',
    description: 'Sounds of wealth and prosperity',
    price: 3000,
    icon: 'coins',
    preview: '/sounds/premium/coin.mp3',
    previewSound: 'coin',
    sounds: ['success', 'purchase', 'coin', 'notification', 'reward'],
    features: [
      'Gold coin sounds',
      'Treasure chest opening',
      'Victory fanfare',
      'Wealth notifications'
    ],
    enabled: true
  },
  {
    id: 'medieval-pack',
    name: 'Medieval Pack',
    description: 'Authentic medieval sound effects',
    price: 2500,
    icon: 'scroll',
    preview: '/sounds/medieval/scroll.mp3',
    previewSound: 'chime',
    sounds: ['chime', 'alert', 'notification', 'success', 'achievement'],
    features: [
      'Medieval trumpet calls',
      'Authentic instruments',
      'Royal court ambience',
      'Medieval victory tunes'
    ],
    enabled: true
  }
];

// Volume levels for different sound types
export const soundVolumeLevels: Partial<Record<SoundType, number>> = {
  click: 0.3,
  success: 0.4,
  notification: 0.4,
  error: 0.4,
  purchase: 0.5,
  transfer: 0.4,
  level_up: 0.5,
  rank_up: 0.6,
  reward: 0.5,
  achievement: 0.5,
  message: 0.4
};

export default premiumSoundPacks;
