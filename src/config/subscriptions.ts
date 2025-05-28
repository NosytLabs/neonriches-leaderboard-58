
import { MarketingFeature, VisibilityBoost } from '@/types/marketing';

export const MARKETING_FEATURES: MarketingFeature[] = [
  {
    id: 'basic_analytics',
    name: 'Basic Analytics',
    description: 'Track profile views, clicks, and basic engagement metrics',
    price: 9.99,
    tier: 'basic',
    category: 'analytics'
  },
  {
    id: 'profile_boost',
    name: 'Profile Boost',
    description: '24-hour enhanced visibility with priority leaderboard placement',
    price: 19.99,
    tier: 'premium',
    category: 'visibility'
  },
  {
    id: 'extra_links',
    name: 'Extra Profile Links',
    description: 'Add up to 10 custom links to your profile',
    price: 4.99,
    tier: 'basic',
    category: 'customization'
  },
  {
    id: 'profile_protection',
    name: 'Profile Protection',
    description: 'Shield your profile from shame attacks for 7 days',
    price: 14.99,
    tier: 'premium',
    category: 'protection'
  }
];

export const VISIBILITY_BOOSTS: VisibilityBoost[] = [
  {
    id: 'spotlight_24h',
    name: '24-Hour Spotlight',
    duration: 24,
    price: 19.99,
    multiplier: 3,
    description: 'Feature your profile prominently for 24 hours',
    features: ['Top leaderboard placement', 'Golden profile border', 'Enhanced visibility']
  },
  {
    id: 'weekend_royalty',
    name: 'Weekend Royalty',
    duration: 48,
    price: 29.99,
    multiplier: 4,
    description: 'Dominate the weekend with premium placement',
    features: ['Weekend featured placement', 'Royal crown effect', 'Priority notifications']
  },
  {
    id: 'royal_presence',
    name: 'Royal Presence',
    duration: 168,
    price: 49.99,
    multiplier: 5,
    description: 'Full week of enhanced visibility and effects',
    features: ['Week-long royal status', 'Exclusive animations', 'VIP treatment']
  }
];
