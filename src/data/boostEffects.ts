
import { BoostEffect, BoostEffectType } from '@/types/boost';

export const profileBoostEffects: BoostEffect[] = [
  {
    id: 'glow',
    name: 'Royal Glow',
    description: 'Adds a subtle glow effect to your profile',
    cssClass: 'profile-boost-glow',
    type: 'effect' as BoostEffectType,
    tier: 'basic',
    price: 10,
    duration: 24, // 24 hours
    icon: 'sun',
    strength: 1,
    allowStacking: false,
    minTier: 'basic',
    iconName: 'sun'
  },
  {
    id: 'sparkle',
    name: 'Noble Sparkle',
    description: 'Adds sparkling effects to your profile',
    cssClass: 'profile-boost-sparkle',
    type: 'effect' as BoostEffectType,
    tier: 'silver',
    price: 20,
    duration: 48, // 48 hours
    icon: 'star',
    strength: 2,
    allowStacking: false,
    minTier: 'silver',
    iconName: 'star'
  },
  {
    id: 'crown',
    name: 'Royal Crown',
    description: 'Displays a crown on your profile',
    cssClass: 'profile-boost-crown',
    type: 'effect' as BoostEffectType,
    tier: 'gold',
    price: 30,
    duration: 72, // 72 hours
    icon: 'crown',
    strength: 3,
    allowStacking: false,
    minTier: 'gold',
    iconName: 'crown'
  },
  {
    id: 'shine',
    name: 'Golden Shine',
    description: 'Makes your profile shine with a golden effect',
    cssClass: 'profile-boost-shine',
    type: 'effect' as BoostEffectType,
    tier: 'pro',
    price: 25,
    duration: 48,
    icon: 'sun',
    strength: 2,
    allowStacking: true,
    minTier: 'pro',
    iconName: 'sun'
  },
  {
    id: 'aura',
    name: 'Mystic Aura',
    description: 'Surrounds your profile with a mystic aura',
    cssClass: 'profile-boost-aura',
    type: 'aura' as BoostEffectType,
    tier: 'premium',
    price: 40,
    duration: 96, // 96 hours
    icon: 'flame',
    strength: 3,
    allowStacking: false,
    minTier: 'premium',
    iconName: 'flame'
  }
];

export const getBoostById = (boostId: string): BoostEffect | undefined => {
  return profileBoostEffects.find(boost => boost.id === boostId);
};

export default profileBoostEffects;
