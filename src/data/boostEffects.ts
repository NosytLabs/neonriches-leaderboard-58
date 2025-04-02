
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
    durationDays: 1,
    icon: 'sun',
    strength: 1,
    minTier: 'basic',
    iconName: 'sun',
    allowStacking: false
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
    durationDays: 2,
    icon: 'star',
    strength: 2,
    minTier: 'silver',
    iconName: 'star',
    allowStacking: false
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
    durationDays: 3,
    icon: 'crown',
    strength: 3,
    minTier: 'gold',
    iconName: 'crown',
    allowStacking: false
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
    durationDays: 2,
    icon: 'sun',
    strength: 2,
    minTier: 'pro',
    iconName: 'sun',
    allowStacking: false
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
    durationDays: 4,
    icon: 'flame',
    strength: 3,
    minTier: 'premium',
    iconName: 'flame',
    allowStacking: false
  }
];

export const getBoostById = (boostId: string): BoostEffect | undefined => {
  return profileBoostEffects.find(boost => boost.id === boostId);
};

export default profileBoostEffects;
