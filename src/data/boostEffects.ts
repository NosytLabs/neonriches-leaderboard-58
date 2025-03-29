
import { BoostEffect, BoostEffectType } from '@/types/boost';
import { UserTier } from '@/types/user';

export const profileBoostEffects: BoostEffect[] = [
  {
    id: 'gold-aura',
    name: 'Gold Aura',
    description: 'Surrounds your profile with a radiant golden aura',
    type: 'appearance',
    rarity: 'rare',
    cost: 100,
    duration: 168, // 7 days in hours
    durationDays: 7,
    allowStacking: false,
    minTier: 'basic',
    cssClass: 'gold-aura-effect',
    tier: 'basic'
  },
  {
    id: 'rainbow-name',
    name: 'Rainbow Name',
    description: 'Makes your name shine with rainbow colors',
    type: 'appearance',
    rarity: 'epic',
    cost: 150,
    duration: 168,
    durationDays: 7,
    allowStacking: false,
    minTier: 'pro',
    cssClass: 'rainbow-name-effect',
    tier: 'pro'
  },
  {
    id: 'royal-glow',
    name: 'Royal Glow',
    description: 'Adds a pulsing royal purple glow to your profile',
    type: 'effect',
    rarity: 'legendary',
    cost: 200,
    duration: 168,
    durationDays: 7,
    allowStacking: false,
    minTier: 'pro',
    cssClass: 'royal-glow-effect',
    tier: 'royal'
  },
  {
    id: 'sparkling-border',
    name: 'Sparkling Border',
    description: 'Adds twinkling stars around your profile border',
    type: 'effect',
    rarity: 'rare',
    cost: 100,
    duration: 168,
    durationDays: 7,
    allowStacking: false,
    minTier: 'basic',
    cssClass: 'sparkling-border-effect',
    tier: 'basic'
  },
  {
    id: 'floating-crown',
    name: 'Floating Crown',
    description: 'Displays a floating crown above your profile',
    type: 'effect',
    rarity: 'epic',
    cost: 150,
    duration: 168,
    durationDays: 7,
    allowStacking: false,
    minTier: 'pro',
    cssClass: 'floating-crown-effect',
    tier: 'pro'
  },
  {
    id: 'visibility-boost',
    name: 'Visibility Boost',
    description: 'Increases your profile visibility by 50%',
    type: 'visibility',
    rarity: 'uncommon',
    cost: 50,
    duration: 72,
    durationDays: 3,
    allowStacking: true,
    minTier: 'basic',
    cssClass: 'visibility-boost-effect',
    tier: 'basic'
  },
  {
    id: 'attention-pulse',
    name: 'Attention Pulse',
    description: 'Makes your profile pulse to draw attention',
    type: 'animation',
    rarity: 'rare',
    cost: 100,
    duration: 168,
    durationDays: 7,
    allowStacking: false,
    minTier: 'basic',
    cssClass: 'attention-pulse-effect',
    tier: 'basic'
  },
  {
    id: 'royal-banner',
    name: 'Royal Banner',
    description: 'Displays a prestigious banner behind your profile',
    type: 'appearance',
    rarity: 'legendary',
    cost: 200,
    duration: 336,
    durationDays: 14,
    allowStacking: false,
    minTier: 'royal',
    cssClass: 'royal-banner-effect',
    tier: 'royal'
  },
  {
    id: 'golden-frame',
    name: 'Golden Frame',
    description: 'Surrounds your profile with an ornate golden frame',
    type: 'appearance',
    rarity: 'epic',
    cost: 150,
    duration: 168,
    durationDays: 7,
    allowStacking: false,
    minTier: 'pro',
    cssClass: 'golden-frame-effect',
    tier: 'pro'
  }
];

export const getBoostById = (id: string): BoostEffect | undefined => {
  return profileBoostEffects.find(boost => boost.id === id);
};

export const getBoostsByType = (type: string): BoostEffect[] => {
  return profileBoostEffects.filter(boost => boost.type === type);
};

export default profileBoostEffects;
