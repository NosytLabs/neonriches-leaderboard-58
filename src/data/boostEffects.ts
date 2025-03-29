
import { BoostEffect, BoostEffectType } from '@/types/boost';

export const profileBoostEffects: BoostEffect[] = [
  {
    id: 'glow',
    name: 'Royal Glow',
    description: 'Adds a subtle glow effect to your profile',
    minTier: 'basic',
    duration: 24, // 24 hours
    strength: 1,
    cssClass: 'profile-boost-glow',
    allowStacking: false,
    iconName: 'sun'
  },
  {
    id: 'sparkle',
    name: 'Noble Sparkle',
    description: 'Adds sparkling effects to your profile',
    minTier: 'silver',
    duration: 48, // 48 hours
    strength: 2,
    cssClass: 'profile-boost-sparkle',
    allowStacking: false,
    iconName: 'star'
  },
  {
    id: 'crown',
    name: 'Royal Crown',
    description: 'Displays a crown on your profile',
    minTier: 'gold',
    duration: 72, // 72 hours
    strength: 3,
    cssClass: 'profile-boost-crown',
    allowStacking: false,
    iconName: 'crown'
  },
  {
    id: 'shine',
    name: 'Golden Shine',
    description: 'Makes your profile shine with a golden effect',
    minTier: 'pro',
    duration: 48,
    strength: 2,
    cssClass: 'profile-boost-shine',
    allowStacking: true,
    iconName: 'sun'
  },
  {
    id: 'aura',
    name: 'Mystic Aura',
    description: 'Surrounds your profile with a mystic aura',
    minTier: 'premium',
    duration: 96, // 96 hours
    strength: 3,
    cssClass: 'profile-boost-aura',
    allowStacking: false,
    iconName: 'flame'
  }
];

export const getBoostById = (boostId: string): BoostEffect | undefined => {
  return profileBoostEffects.find(boost => boost.id === boostId);
};

export default profileBoostEffects;
