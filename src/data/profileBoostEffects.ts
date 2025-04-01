
import { BoostEffect } from '@/types/boost';

// Profile boost effects data
export const profileBoostEffects: BoostEffect[] = [
  {
    id: 'gold-aura',
    name: 'Royal Gold Aura',
    description: 'Surround your profile with a shimmering golden aura that lets everyone know of your elevated status.',
    cssClass: 'boost-gold-aura',
    type: 'appearance',
    tier: 'premium',
    price: 25,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/gold-aura.jpg',
    duration: 30 * 24, // hours
    icon: 'crown',
    strength: 3
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
    previewImage: '/throne-assets/boosts/crown-effect.jpg',
    duration: 30 * 24, // hours
    icon: 'crown',
    strength: 5
  },
  {
    id: 'neon-pulse',
    name: 'Neon Pulse Aura',
    description: 'Surround your profile with a vibrant neon glow that pulses with energy.',
    cssClass: 'boost-neon-pulse',
    type: 'appearance',
    tier: 'premium',
    price: 20,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/neon-pulse.jpg',
    duration: 30 * 24, // hours
    icon: 'zap',
    strength: 3
  },
  {
    id: 'rainbow-flow',
    name: 'Rainbow Flow Effect',
    description: 'A mesmerizing flow of rainbow colors surrounds your profile, cycling through the spectrum.',
    cssClass: 'boost-rainbow-flow',
    type: 'animation',
    tier: 'premium',
    price: 30,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/rainbow-flow.jpg',
    duration: 30 * 24, // hours
    icon: 'palette',
    strength: 4
  },
  {
    id: 'royal-sparkle',
    name: 'Royal Sparkle',
    description: 'Your profile sparkles with royal energy, subtly drawing attention.',
    cssClass: 'boost-sparkle',
    type: 'animation',
    tier: 'basic',
    price: 15,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/sparkle.jpg',
    duration: 30 * 24, // hours
    icon: 'sparkle',
    strength: 2
  },
  {
    id: 'premium-placement',
    name: 'Premium Placement',
    description: 'Your profile receives priority placement in search results and leaderboards.',
    cssClass: 'boost-premium',
    type: 'visibility',
    tier: 'royal',
    price: 75,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/premium.jpg',
    duration: 30 * 24, // hours
    icon: 'arrowUp',
    strength: 5
  },
  {
    id: 'enhanced-visibility',
    name: 'Enhanced Visibility',
    description: 'Increased visibility in all areas of the platform.',
    cssClass: 'boost-enhanced',
    type: 'visibility',
    tier: 'premium',
    price: 35,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/enhanced.jpg',
    duration: 30 * 24, // hours
    icon: 'eye',
    strength: 3
  },
  {
    id: 'royal-presence',
    name: 'Royal Presence',
    description: 'A majestic purple aura emanates from your profile, signifying your royal status.',
    cssClass: 'boost-royal-presence',
    type: 'effect',
    tier: 'royal',
    price: 60,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/royal-presence.jpg',
    duration: 30 * 24, // hours
    icon: 'crown',
    strength: 4
  },
  {
    id: 'animated-border',
    name: 'Animated Border',
    description: 'An animated border that flows around your profile, creating a dynamic visual effect.',
    cssClass: 'boost-animated-border',
    type: 'animation',
    tier: 'premium',
    price: 40,
    durationDays: 30,
    previewImage: '/throne-assets/boosts/animated-border.jpg',
    duration: 30 * 24, // hours
    icon: 'square',
    strength: 3
  }
];

export default profileBoostEffects;
