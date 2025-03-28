
import { PremiumSoundPackDetails, SoundType } from './types';

// Premium sound packs available for purchase
export const premiumSoundPacks: PremiumSoundPackDetails[] = [
  {
    id: 'royal',
    name: 'Royal Grandeur',
    description: 'Elevate your noble experience with majestic trumpets, elegant harps, and regal fanfares.',
    price: 4.99,
    sounds: [
      'trumpet', 
      'medallion', 
      'royalAnnouncement',
      'parchmentUnfurl',
      'seal'
    ],
    previewSound: 'trumpet',
    isPurchased: false
  },
  {
    id: 'medieval',
    name: 'Medieval Ambience',
    description: 'Transport yourself to the medieval times with authentic castle sounds, swords, and market ambience.',
    price: 3.99,
    sounds: [
      'swordClash',
      'pageTransition',
      'noblesLaugh',
      'inkScribble'
    ],
    previewSound: 'swordClash',
    isPurchased: false
  },
  {
    id: 'comedy',
    name: 'Court Jester',
    description: 'Add humor to your royal experience with comedic sound effects fit for a satirical realm.',
    price: 2.99,
    sounds: [
      'noblesLaugh',
      'shame',
      'wish'
    ],
    previewSound: 'noblesLaugh',
    isPurchased: false
  },
  {
    id: 'elegant',
    name: 'Elegant Nobility',
    description: 'Subtle, sophisticated sound effects for the discerning noble.',
    price: 5.99,
    sounds: [
      'parchmentUnfurl',
      'seal',
      'inkScribble',
      'medallion'
    ],
    previewSound: 'parchmentUnfurl',
    isPurchased: false
  },
  {
    id: 'fantasy',
    name: 'Mystic Kingdom',
    description: 'Enchanted sound effects that bring magic to your noble journey.',
    price: 4.99,
    sounds: [
      'wish',
      'levelUp',
      'purchase'
    ],
    previewSound: 'wish',
    isPurchased: false
  }
];

// Map of premium sound paths
export const premiumSoundAssets: Record<SoundType, string> = {
  // Basic sounds
  coinDrop: '/sounds/premium/coin-drop-premium.mp3',
  reward: '/sounds/premium/reward-premium.mp3',
  notification: '/sounds/premium/notification-premium.mp3',
  click: '/sounds/premium/click-premium.mp3',
  success: '/sounds/premium/success-premium.mp3',
  error: '/sounds/premium/error-premium.mp3',
  levelUp: '/sounds/premium/level-up-premium.mp3',
  purchase: '/sounds/premium/purchase-premium.mp3',
  shame: '/sounds/premium/shame-premium.mp3',
  pageChange: '/sounds/premium/page-change-premium.mp3',
  
  // Royal pack sounds
  royalAnnouncement: '/sounds/premium/royal-announcement-premium.mp3',
  trumpet: '/sounds/premium/royal-trumpet-premium.mp3',
  medallion: '/sounds/premium/medallion-clink-premium.mp3',
  
  // Medieval pack sounds
  swordClash: '/sounds/premium/sword-clash-premium.mp3',
  pageTransition: '/sounds/premium/page-turn-premium.mp3',
  
  // Court Jester pack sounds
  noblesLaugh: '/sounds/premium/nobles-laugh-premium.mp3',
  
  // Elegant pack sounds
  parchmentUnfurl: '/sounds/premium/parchment-unfurl-premium.mp3',
  seal: '/sounds/premium/wax-seal-premium.mp3',
  inkScribble: '/sounds/premium/ink-scribble-premium.mp3',
  
  // Mystic Kingdom pack sounds
  wish: '/sounds/premium/magic-wish-premium.mp3'
};

// Volume presets for premium sounds
export const premiumVolumePresets: Record<SoundType, number> = {
  coinDrop: 0.5,
  reward: 0.4,
  notification: 0.3,
  click: 0.2,
  success: 0.4,
  error: 0.3,
  royalAnnouncement: 0.5,
  levelUp: 0.5,
  purchase: 0.4,
  shame: 0.4,
  swordClash: 0.5,
  pageTransition: 0.3,
  wish: 0.4,
  pageChange: 0.3,
  parchmentUnfurl: 0.4,
  medallion: 0.5,
  seal: 0.4,
  trumpet: 0.6,
  noblesLaugh: 0.5,
  inkScribble: 0.3
};
