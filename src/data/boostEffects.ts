
import { CosmeticCategory } from '@/types/cosmetics';

export interface BoostEffect {
  id: string;
  name: string;
  description: string;
  price: number;
  tier: 'basic' | 'premium' | 'royal';
  type: 'appearance' | 'animation' | 'visibility' | 'effect';
  durationDays: number;
  previewImage: string;
  cssClass?: string;
}

export type BoostEffectType = 'gold-aura' | 'crown-effect' | 'neon-pulse' | 'rainbow-flow' | 'royal-sparkle';

const profileBoostEffects: BoostEffect[] = [
  {
    id: 'gold-aura',
    name: 'Gold Aura',
    description: 'Surrounds your profile with a subtle golden glow, drawing attention to your noble status.',
    price: 5,
    tier: 'basic',
    type: 'effect',
    durationDays: 7,
    previewImage: '/assets/boost-previews/gold-aura.png',
    cssClass: 'gold-aura-effect'
  },
  {
    id: 'crown-effect',
    name: 'Royal Crown',
    description: 'Display a majestic crown above your profile, marking you as true royalty.',
    price: 15,
    tier: 'premium',
    type: 'appearance',
    durationDays: 14,
    previewImage: '/assets/boost-previews/crown-effect.png',
    cssClass: 'crown-effect'
  },
  {
    id: 'neon-pulse',
    name: 'Neon Pulse',
    description: 'An eye-catching pulsing effect that brings your profile to life.',
    price: 10,
    tier: 'basic',
    type: 'animation',
    durationDays: 7,
    previewImage: '/assets/boost-previews/neon-pulse.png',
    cssClass: 'neon-pulse-effect'
  },
  {
    id: 'rainbow-flow',
    name: 'Rainbow Flow',
    description: 'A mesmerizing rainbow animation that flows around your profile elements.',
    price: 20,
    tier: 'premium',
    type: 'animation',
    durationDays: 14,
    previewImage: '/assets/boost-previews/rainbow-flow.png',
    cssClass: 'rainbow-flow-effect'
  },
  {
    id: 'royal-sparkle',
    name: 'Royal Sparkle',
    description: 'Premium sparkling effect that makes your profile truly stand out from the crowd.',
    price: 30,
    tier: 'royal',
    type: 'effect',
    durationDays: 30,
    previewImage: '/assets/boost-previews/royal-sparkle.png',
    cssClass: 'royal-sparkle-effect'
  },
  {
    id: 'animated-border',
    name: 'Animated Border',
    description: 'A dynamic border animation that frames your profile in constant motion.',
    price: 25,
    tier: 'premium',
    type: 'appearance',
    durationDays: 21,
    previewImage: '/assets/boost-previews/animated-border.png',
    cssClass: 'animated-border-effect'
  },
  {
    id: 'visibility-boost',
    name: 'Visibility Boost',
    description: 'Increase your profile visibility in search results and leaderboards.',
    price: 15,
    tier: 'basic',
    type: 'visibility',
    durationDays: 14,
    previewImage: '/assets/boost-previews/visibility-boost.png',
    cssClass: 'visibility-boost-effect'
  },
  {
    id: 'leaderboard-highlight',
    name: 'Leaderboard Highlight',
    description: 'Make your name stand out with a special highlight effect on leaderboards.',
    price: 25,
    tier: 'premium',
    type: 'visibility',
    durationDays: 21,
    previewImage: '/assets/boost-previews/leaderboard-highlight.png',
    cssClass: 'leaderboard-highlight-effect'
  },
  {
    id: 'royal-presence',
    name: 'Royal Presence',
    description: 'The ultimate visibility package, ensuring your profile gets maximum exposure.',
    price: 50,
    tier: 'royal',
    type: 'visibility',
    durationDays: 30,
    previewImage: '/assets/boost-previews/royal-presence.png',
    cssClass: 'royal-presence-effect'
  }
];

export const getBoostById = (id: string): BoostEffect | undefined => {
  return profileBoostEffects.find(boost => boost.id === id);
};

export const getBoostsByType = (type: 'appearance' | 'animation' | 'visibility' | 'effect'): BoostEffect[] => {
  return profileBoostEffects.filter(boost => boost.type === type);
};

export default profileBoostEffects;
