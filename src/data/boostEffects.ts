
import { BoostEffect } from '@/types/boostEffects';

const profileBoostEffects: BoostEffect[] = [
  {
    id: 'gold-aura',
    name: 'Gold Aura',
    description: 'Surrounds your profile with a subtle golden glow, drawing attention to your noble status.',
    price: 5,
    tier: 'basic',
    type: 'effect',
    durationDays: 7,
    previewImage: '/assets/boost-previews/gold-aura.png'
  },
  {
    id: 'crown-effect',
    name: 'Royal Crown',
    description: 'Display a majestic crown above your profile, marking you as true royalty.',
    price: 15,
    tier: 'premium',
    type: 'appearance',
    durationDays: 14,
    previewImage: '/assets/boost-previews/crown-effect.png'
  },
  {
    id: 'neon-pulse',
    name: 'Neon Pulse',
    description: 'An eye-catching pulsing effect that brings your profile to life.',
    price: 10,
    tier: 'basic',
    type: 'animation',
    durationDays: 7,
    previewImage: '/assets/boost-previews/neon-pulse.png'
  },
  {
    id: 'rainbow-flow',
    name: 'Rainbow Flow',
    description: 'A mesmerizing rainbow animation that flows around your profile elements.',
    price: 20,
    tier: 'premium',
    type: 'animation',
    durationDays: 14,
    previewImage: '/assets/boost-previews/rainbow-flow.png'
  },
  {
    id: 'royal-sparkle',
    name: 'Royal Sparkle',
    description: 'Premium sparkling effect that makes your profile truly stand out from the crowd.',
    price: 30,
    tier: 'royal',
    type: 'effect',
    durationDays: 30,
    previewImage: '/assets/boost-previews/royal-sparkle.png'
  },
  {
    id: 'animated-border',
    name: 'Animated Border',
    description: 'A dynamic border animation that frames your profile in constant motion.',
    price: 25,
    tier: 'premium',
    type: 'appearance',
    durationDays: 21,
    previewImage: '/assets/boost-previews/animated-border.png'
  }
];

export default profileBoostEffects;
