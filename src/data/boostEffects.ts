
import { BoostEffect } from '@/types/boost';

export const profileBoostEffects: BoostEffect[] = [
  {
    id: 'gold-aura',
    name: 'Gold Aura',
    description: 'A shimmering golden aura surrounds your profile',
    duration: 24, // hours
    cost: 5,
    type: 'appearance',
    rarity: 'uncommon',
    allowStacking: false,
    cssClass: 'gold-aura-effect', // Added property to fix errors
    minTier: 'free'
  },
  {
    id: 'rainbow-name',
    name: 'Rainbow Name',
    description: 'Your name appears with a rainbow gradient effect',
    duration: 48,
    cost: 10,
    type: 'appearance',
    rarity: 'rare',
    allowStacking: false,
    cssClass: 'rainbow-name-effect', // Added property to fix errors
    minTier: 'free'
  },
  {
    id: 'royal-glow',
    name: 'Royal Glow',
    description: 'A pulsing royal purple glow emanates from your profile',
    duration: 72,
    cost: 15,
    type: 'appearance',
    rarity: 'epic',
    allowStacking: false,
    cssClass: 'royal-glow-effect', // Added property to fix errors
    minTier: 'pro'
  },
  {
    id: 'sparkling-border',
    name: 'Sparkling Border',
    description: 'Your profile is surrounded by twinkling stars',
    duration: 48,
    cost: 12,
    type: 'animation',
    rarity: 'rare',
    allowStacking: true,
    cssClass: 'sparkling-border-effect', // Added property to fix errors
    minTier: 'free'
  },
  {
    id: 'floating-crown',
    name: 'Floating Crown',
    description: 'A crown floats above your profile image',
    duration: 96,
    cost: 20,
    type: 'animation',
    rarity: 'legendary',
    allowStacking: false,
    cssClass: 'floating-crown-effect', // Added property to fix errors
    minTier: 'free'
  },
  {
    id: 'visibility-boost',
    name: 'Visibility Boost',
    description: 'Your profile appears higher in lists and search results',
    duration: 120,
    cost: 25,
    type: 'visibility',
    rarity: 'legendary',
    allowStacking: true,
    cssClass: 'visibility-boost-effect', // Added property to fix errors
    minTier: 'free'
  },
  {
    id: 'attention-pulse',
    name: 'Attention Pulse',
    description: 'Your profile periodically pulses to draw attention',
    duration: 72,
    cost: 15,
    type: 'animation',
    rarity: 'epic',
    allowStacking: false,
    cssClass: 'attention-pulse-effect', // Added property to fix errors
    minTier: 'free'
  },
  {
    id: 'royal-banner',
    name: 'Royal Banner',
    description: 'A royal banner appears above your profile',
    duration: 168,
    cost: 30,
    type: 'effect',
    rarity: 'legendary',
    allowStacking: false,
    cssClass: 'royal-banner-effect', // Added property to fix errors
    minTier: 'pro'
  },
  {
    id: 'golden-frame',
    name: 'Golden Frame',
    description: 'Your profile image is framed with ornate gold',
    duration: 120,
    cost: 20,
    type: 'appearance',
    rarity: 'epic',
    allowStacking: false,
    cssClass: 'golden-frame-effect', // Added property to fix errors
    minTier: 'free'
  }
];

export default profileBoostEffects;
