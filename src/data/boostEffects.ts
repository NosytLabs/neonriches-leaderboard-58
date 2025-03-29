
import { ProfileBoostEffect } from '@/types/profile-boost';

export const profileBoostEffects: ProfileBoostEffect[] = [
  // Visibility Boosts
  {
    id: 'featured-profile',
    name: 'Featured Profile',
    description: 'Your profile appears in featured sections across the platform',
    cssClass: 'boost-featured',
    type: 'visibility',
    tier: 'basic',
    price: 5,
    durationDays: 3,
    previewImage: '/throne-assets/boosts/featured-preview.jpg'
  },
  {
    id: 'priority-placement',
    name: 'Priority Placement',
    description: 'Your profile receives priority placement in search results and browsing',
    cssClass: 'boost-priority',
    type: 'visibility',
    tier: 'premium',
    price: 10,
    durationDays: 7,
    previewImage: '/throne-assets/boosts/priority-preview.jpg'
  },
  
  // Appearance Boosts
  {
    id: 'gold-border',
    name: 'Gold Border',
    description: 'Adds a shimmering gold border to your profile and leaderboard entry',
    cssClass: 'boost-gold-border',
    type: 'appearance',
    tier: 'basic',
    price: 3,
    durationDays: 7,
    previewImage: '/throne-assets/boosts/gold-border-preview.jpg'
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    description: 'Makes your profile glow with a vibrant neon effect',
    cssClass: 'boost-neon-glow',
    type: 'appearance',
    tier: 'premium',
    price: 8,
    durationDays: 7,
    previewImage: '/throne-assets/boosts/neon-glow-preview.jpg'
  },
  {
    id: 'royal-aura',
    name: 'Royal Aura',
    description: 'Surrounds your profile with an animated royal aura effect',
    cssClass: 'boost-royal-aura',
    type: 'appearance',
    tier: 'royal',
    price: 15,
    durationDays: 14,
    previewImage: '/throne-assets/boosts/royal-aura-preview.jpg'
  },
  
  // Animation Boosts
  {
    id: 'sparkle-effect',
    name: 'Sparkle Effect',
    description: 'Adds subtle sparkles that animate around your profile',
    cssClass: 'boost-sparkle',
    type: 'animation',
    tier: 'basic',
    price: 4,
    durationDays: 7,
    previewImage: '/throne-assets/boosts/sparkle-preview.jpg'
  },
  {
    id: 'pulse-effect',
    name: 'Pulse Effect',
    description: 'Your profile and leaderboard entries subtly pulse with energy',
    cssClass: 'boost-pulse',
    type: 'animation',
    tier: 'premium',
    price: 7,
    durationDays: 7,
    previewImage: '/throne-assets/boosts/pulse-preview.jpg'
  },
  {
    id: 'rgb-flow',
    name: 'RGB Flow',
    description: 'Flowing RGB color effects across your profile elements',
    cssClass: 'boost-rgb-flow',
    type: 'animation',
    tier: 'royal',
    price: 12,
    durationDays: 10,
    previewImage: '/throne-assets/boosts/rgb-flow-preview.jpg'
  },
  
  // Special Effects
  {
    id: 'crown-icon',
    name: 'Crown Icon',
    description: 'Displays a royal crown icon next to your name',
    cssClass: 'boost-crown',
    type: 'effect',
    tier: 'premium',
    price: 9,
    durationDays: 7,
    previewImage: '/throne-assets/boosts/crown-preview.jpg'
  },
  {
    id: 'fireworks',
    name: 'Profile Fireworks',
    description: 'Occasional fireworks animation plays when users view your profile',
    cssClass: 'boost-fireworks',
    type: 'effect',
    tier: 'royal',
    price: 20,
    durationDays: 14,
    previewImage: '/throne-assets/boosts/fireworks-preview.jpg'
  }
];

// Helper functions
export const getBoostById = (id: string): ProfileBoostEffect | undefined => {
  return profileBoostEffects.find(boost => boost.id === id);
};

export const getBoostsByType = (type: string): ProfileBoostEffect[] => {
  return profileBoostEffects.filter(boost => boost.type === type);
};

export const getBoostsByTier = (tier: string): ProfileBoostEffect[] => {
  return profileBoostEffects.filter(boost => boost.tier === tier);
};
