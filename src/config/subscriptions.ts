
import { Feature, SubscriptionPlan } from '@/types/subscription';

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    tier: 'free',
    price: 0,
    features: [
      'Basic mockery actions',
      'Public leaderboard participation',
      'Standard profile customization',
      'Maximum rank tracking'
    ],
    description: 'The basic experience for casual spenders',
    color: 'gray'
  },
  {
    id: 'premium',
    name: 'Premium',
    tier: 'premium',
    price: 9.99,
    yearlyPrice: 99.99,
    features: [
      'All Free features',
      'Advanced mockery actions',
      'Premium profile effects',
      'Exclusive color themes',
      'Spending history analytics',
      'Team chat access'
    ],
    description: 'Enhanced features for dedicated throne seekers',
    popular: true,
    color: 'gold',
    priceId: 'price_premium_monthly',
    yearlyPriceId: 'price_premium_yearly'
  },
  {
    id: 'royal',
    name: 'Royal',
    tier: 'royal',
    price: 29.99,
    yearlyPrice: 299.99,
    features: [
      'All Premium features',
      'Legendary mockery actions',
      'Crown effects on profile',
      'Priority ranking',
      'Royal insignia badges',
      'VIP leaderboard section',
      'Royal council access'
    ],
    description: 'The ultimate experience for the truly dedicated',
    color: 'royal',
    priceId: 'price_royal_monthly',
    yearlyPriceId: 'price_royal_yearly'
  }
];

export const PRODUCT_FEATURES: Feature[] = [
  {
    id: 'mockery_basic',
    name: 'Basic Mockery',
    description: 'Access to tomato and egg throwing mockery actions',
    tier: 'free',
    icon: '🍅'
  },
  {
    id: 'mockery_advanced',
    name: 'Advanced Mockery',
    description: 'Access to stocks and silence mockery actions',
    tier: 'premium',
    icon: '🔒'
  },
  {
    id: 'mockery_legendary',
    name: 'Legendary Mockery',
    description: 'Access to all mockery actions including royal punishments',
    tier: 'royal',
    icon: '👑'
  },
  {
    id: 'profile_basic',
    name: 'Basic Profile',
    description: 'Standard profile customization options',
    tier: 'free',
    icon: '👤'
  },
  {
    id: 'profile_premium',
    name: 'Premium Profile',
    description: 'Enhanced profile with effects and animations',
    tier: 'premium',
    icon: '✨'
  },
  {
    id: 'profile_royal',
    name: 'Royal Profile',
    description: 'Ultimate profile with crown effects and royal insignias',
    tier: 'royal',
    icon: '👑'
  }
];

export const FEATURE_METADATA = {
  categories: [
    { id: 'mockery', name: 'Mockery Features', icon: '🍅' },
    { id: 'profile', name: 'Profile Features', icon: '👤' },
    { id: 'analytics', name: 'Analytics Features', icon: '📊' },
    { id: 'community', name: 'Community Features', icon: '👥' }
  ]
};

export const MARKETING_FEATURES = [
  {
    id: 'profile_boost',
    name: 'Profile Boost',
    description: 'Make your profile stand out with visual effects',
    tier: 'premium',
    icon: '✨',
    price: 4.99,
    category: 'profile'
  },
  {
    id: 'rank_promotion',
    name: 'Rank Promotion',
    description: 'Get featured at the top of the leaderboard for 24 hours',
    tier: 'premium',
    icon: '🏆',
    price: 9.99,
    category: 'visibility'
  },
  {
    id: 'royal_certificate',
    name: 'Royal Certificate',
    description: 'Get an official certificate of your throne status as NFT',
    tier: 'royal',
    icon: '📜',
    price: 19.99,
    category: 'collectibles'
  }
];

export const MARKETING_EVENTS = [
  {
    id: 'public_shaming_festival',
    name: 'Public Shaming Festival',
    description: 'A 24-hour event where mockery actions cost 50% less',
    tier: 'free',
    startDate: '2023-06-01T00:00:00Z',
    endDate: '2023-06-02T00:00:00Z',
    icon: '🍅'
  },
  {
    id: 'royal_fire_sale',
    name: 'Royal Fire Sale',
    description: 'Limited time discounts on all premium cosmetics',
    tier: 'premium',
    startDate: '2023-06-15T00:00:00Z',
    endDate: '2023-06-17T00:00:00Z',
    icon: '🔥'
  },
  {
    id: 'throne_wars',
    name: 'Throne Wars',
    description: 'Teams compete for control of the leaderboard with bonus points',
    tier: 'royal',
    startDate: '2023-07-01T00:00:00Z',
    endDate: '2023-07-08T00:00:00Z',
    icon: '👑'
  }
];
