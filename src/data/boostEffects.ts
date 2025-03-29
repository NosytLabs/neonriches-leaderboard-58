
import { BoostEffect } from '@/types/boostEffects';

// Boost effects data
const boostEffects: BoostEffect[] = [
  {
    id: 'gold-border',
    name: 'Royal Golden Border',
    description: 'Surround your profile with a shimmering golden aura that lets everyone know of your elevated status.',
    cssClass: 'boost-gold-border',
    type: 'appearance',
    tier: 'premium',
    price: 25,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/gold-border.jpg'
  },
  {
    id: 'crown-effect',
    name: 'Royal Crown Effect',
    description: 'A magnificent crown hovers above your profile, complete with sparkling particles and golden shine.',
    cssClass: 'boost-crown',
    type: 'effect',
    tier: 'royal',
    price: 50,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/crown-effect.jpg'
  },
  {
    id: 'neon-glow',
    name: 'Neon Glow Aura',
    description: 'Surround your profile with a vibrant neon glow that pulses with energy.',
    cssClass: 'boost-neon-glow',
    type: 'appearance',
    tier: 'premium',
    price: 20,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/neon-glow.jpg'
  },
  {
    id: 'rgb-flow',
    name: 'RGB Flow Effect',
    description: 'A mesmerizing flow of RGB colors surrounds your profile, cycling through the spectrum.',
    cssClass: 'boost-rgb-flow',
    type: 'animation',
    tier: 'premium',
    price: 30,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/rgb-flow.jpg'
  },
  {
    id: 'royal-pulse',
    name: 'Royal Pulse',
    description: 'Your profile gently pulses with a royal energy, subtly drawing attention.',
    cssClass: 'boost-pulse',
    type: 'animation',
    tier: 'basic',
    price: 15,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/pulse.jpg'
  },
  {
    id: 'featured-placement',
    name: 'Featured Placement',
    description: 'Your profile receives priority placement in search results and leaderboards.',
    cssClass: 'boost-featured',
    type: 'visibility',
    tier: 'royal',
    price: 75,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/featured.jpg'
  },
  {
    id: 'priority-visibility',
    name: 'Priority Visibility',
    description: 'Increased visibility in all areas of the platform.',
    cssClass: 'boost-priority',
    type: 'visibility',
    tier: 'premium',
    price: 35,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/priority.jpg'
  },
  {
    id: 'royal-aura',
    name: 'Royal Aura',
    description: 'A majestic purple aura emanates from your profile, signifying your royal status.',
    cssClass: 'boost-royal-aura',
    type: 'effect',
    tier: 'royal',
    price: 60,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/royal-aura.jpg'
  }
];

// Helper function to get a boost by ID
export const getBoostById = (id: string): BoostEffect | undefined => {
  return boostEffects.find(boost => boost.id === id);
};

// Helper function to get boosts by tier
export const getBoostsByTier = (tier: string): BoostEffect[] => {
  return boostEffects.filter(boost => boost.tier === tier);
};

// Helper function to get boosts by type
export const getBoostsByType = (type: string): BoostEffect[] => {
  return boostEffects.filter(boost => boost.type === type);
};

export default boostEffects;
