
import { BoostEffect, BoostEffectType } from '@/types/boost';

export const profileBoostEffects: BoostEffect[] = [
  {
    id: 'gold-aura',
    name: 'Gold Aura',
    description: 'A shimmering golden aura surrounds your profile',
    duration: 24, // hours
    durationDays: 1,
    cost: 5,
    price: 5,
    type: 'appearance',
    rarity: 'uncommon',
    allowStacking: false,
    cssClass: 'gold-aura-effect',
    minTier: 'free',
    tier: 'basic'
  },
  {
    id: 'rainbow-name',
    name: 'Rainbow Name',
    description: 'Your name appears with a rainbow gradient effect',
    duration: 48,
    durationDays: 2,
    cost: 10,
    price: 10,
    type: 'appearance',
    rarity: 'rare',
    allowStacking: false,
    cssClass: 'rainbow-name-effect',
    minTier: 'free',
    tier: 'basic'
  },
  {
    id: 'royal-glow',
    name: 'Royal Glow',
    description: 'A pulsing royal purple glow emanates from your profile',
    duration: 72,
    durationDays: 3,
    cost: 15,
    price: 15,
    type: 'appearance',
    rarity: 'epic',
    allowStacking: false,
    cssClass: 'royal-glow-effect',
    minTier: 'pro',
    tier: 'premium'
  },
  {
    id: 'sparkling-border',
    name: 'Sparkling Border',
    description: 'Your profile is surrounded by twinkling stars',
    duration: 48,
    durationDays: 2,
    cost: 12,
    price: 12,
    type: 'animation',
    rarity: 'rare',
    allowStacking: true,
    cssClass: 'sparkling-border-effect',
    minTier: 'free',
    tier: 'basic'
  },
  {
    id: 'floating-crown',
    name: 'Floating Crown',
    description: 'A crown floats above your profile image',
    duration: 96,
    durationDays: 4,
    cost: 20,
    price: 20,
    type: 'animation',
    rarity: 'legendary',
    allowStacking: false,
    cssClass: 'floating-crown-effect',
    minTier: 'free',
    tier: 'basic'
  },
  {
    id: 'visibility-boost',
    name: 'Visibility Boost',
    description: 'Your profile appears higher in lists and search results',
    duration: 120,
    durationDays: 5,
    cost: 25,
    price: 25,
    type: 'visibility',
    rarity: 'legendary',
    allowStacking: true,
    cssClass: 'visibility-boost-effect',
    minTier: 'free',
    tier: 'basic'
  },
  {
    id: 'attention-pulse',
    name: 'Attention Pulse',
    description: 'Your profile periodically pulses to draw attention',
    duration: 72,
    durationDays: 3,
    cost: 15,
    price: 15,
    type: 'animation',
    rarity: 'epic',
    allowStacking: false,
    cssClass: 'attention-pulse-effect',
    minTier: 'free',
    tier: 'basic'
  },
  {
    id: 'royal-banner',
    name: 'Royal Banner',
    description: 'A royal banner appears above your profile',
    duration: 168,
    durationDays: 7,
    cost: 30,
    price: 30,
    type: 'effect',
    rarity: 'legendary',
    allowStacking: false,
    cssClass: 'royal-banner-effect',
    minTier: 'pro',
    tier: 'premium'
  },
  {
    id: 'golden-frame',
    name: 'Golden Frame',
    description: 'Your profile image is framed with ornate gold',
    duration: 120,
    durationDays: 5,
    cost: 20,
    price: 20,
    type: 'appearance',
    rarity: 'epic',
    allowStacking: false,
    cssClass: 'golden-frame-effect',
    minTier: 'free',
    tier: 'basic'
  }
];

// Helper functions
export const getBoostById = (id: string): BoostEffect | undefined => {
  return profileBoostEffects.find(boost => boost.id === id);
};

export const getBoostsByType = (type: string): BoostEffect[] => {
  return profileBoostEffects.filter(boost => boost.type === type);
};

export default profileBoostEffects;
