
import { UserTier } from '@/types/user';

export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  description: string;
  features: string[];
  color: string;
  maxLinks: number;
  maxProfiles: number;
  analyticsAccess: boolean;
  customization: boolean;
  protectionDuration: number;
  priceMonthly?: number;
  priceYearly?: number;
  recommended?: boolean;
}

// Marketing features available for purchase
export const MARKETING_FEATURES = [
  {
    id: 'basic_analytics',
    name: 'Basic Analytics',
    description: 'View who has visited your profile and track clicks on your links',
    price: 5,
    tier: 'basic'
  },
  {
    id: 'profile_boost',
    name: 'Profile Boost',
    description: 'Get featured on the homepage and in search results for 24 hours',
    price: 25,
    tier: 'any'
  },
  {
    id: 'extra_links',
    name: 'Extra Links (+3)',
    description: 'Add 3 more promotional links to your profile',
    price: 10,
    tier: 'any'
  }
];

// Weekly marketing events
export const MARKETING_EVENTS = [
  {
    id: 'weekend_spotlight',
    name: 'Weekend Spotlight',
    description: 'Top 3 spenders get featured prominently for 48 hours',
    days: ['Saturday', 'Sunday'],
    visibilityBoost: 20,
    requirements: 'Must spend at least $50 in the previous week'
  },
  {
    id: 'team_visibility_day',
    name: 'Team Visibility Day',
    description: 'Members of the leading team get extra visibility',
    days: ['Monday'],
    visibilityBoost: 5,
    requirements: 'Must be in the currently leading team'
  }
];

// Tier-based features
export const PRODUCT_FEATURES = {
  analytics: {
    free: 'Basic view counts',
    basic: 'View counts and sources',
    premium: 'Full visitor demographics',
    royal: 'Advanced analytics and trends'
  },
  links: {
    free: '1 promotional link',
    basic: '3 promotional links',
    premium: '7 promotional links',
    royal: 'Unlimited promotional links'
  },
  visibility: {
    free: 'Standard visibility',
    basic: '2x profile visibility',
    premium: '5x profile visibility',
    royal: '10x profile visibility'
  },
  marketing: {
    free: 'No marketing features',
    basic: 'Participation in weekly events',
    premium: 'Featured placement opportunities',
    royal: 'Priority placement in all areas'
  }
};

// Feature metadata for explanation
export const FEATURE_METADATA = {
  analytics: {
    title: 'Marketing Analytics',
    description: 'Track who visits your profile and how they interact with it',
    icon: 'chart'
  },
  links: {
    title: 'Promotional Links',
    description: 'Add links to your social media profiles, websites, and more',
    icon: 'link'
  },
  visibility: {
    title: 'Profile Visibility',
    description: 'How prominent your profile appears across the platform',
    icon: 'eye'
  },
  marketing: {
    title: 'Marketing Features',
    description: 'Special promotional opportunities for your profile',
    icon: 'megaphone'
  }
};

// Define subscription tiers
export const SUBSCRIPTION_TIERS = {
  free: {
    id: "free",
    name: "Free",
    price: 0,
    interval: "month",
    description: "Basic access with limited features",
    features: ["1 promotional link", "Basic profile stats", "Standard visibility"],
    color: "gray",
    maxLinks: 1,
    maxProfiles: 1,
    analyticsAccess: false,
    customization: false,
    protectionDuration: 24,
    priceMonthly: 0,
    priceYearly: 0
  },
  standard: {
    id: "standard",
    name: "Standard",
    price: 9.99,
    interval: "month",
    description: "Enhanced profile with basic marketing tools",
    features: ["3 promotional links", "Profile visitor stats", "2x visibility boost"],
    color: "blue",
    maxLinks: 3,
    maxProfiles: 1,
    analyticsAccess: true,
    customization: false,
    protectionDuration: 48,
    priceMonthly: 9.99,
    priceYearly: 99.99,
    recommended: false
  },
  premium: {
    id: "premium",
    name: "Premium",
    price: 19.99,
    interval: "month",
    description: "Premium access with exclusive marketing tools",
    features: ["7 promotional links", "Enhanced analytics", "5x visibility boost"],
    color: "purple",
    maxLinks: 7,
    maxProfiles: 3,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 96,
    priceMonthly: 19.99,
    priceYearly: 199.99,
    recommended: true
  },
  royal: {
    id: "royal",
    name: "Royal",
    price: 49.99,
    interval: "month",
    description: "Ultimate tier with unmatched visibility",
    features: ["Unlimited links", "AI-powered analytics", "20x visibility boost"],
    color: "royal-gold",
    maxLinks: 999,
    maxProfiles: 10,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 720,
    priceMonthly: 49.99,
    priceYearly: 499.99,
    recommended: false
  }
};

// Helper functions to filter tiers
export const getVisibleTiers = () => {
  return ['free', 'standard', 'premium', 'royal'];
};

export const getUpgradeOptions = (currentTier) => {
  const allTiers = Object.values(SUBSCRIPTION_TIERS);
  const currentTierPrice = currentTier ? SUBSCRIPTION_TIERS[currentTier].price : 0;
  
  return allTiers.filter(tier => tier.price > currentTierPrice)
    .sort((a, b) => a.price - b.price);
};

export const getTierColor = (tier) => {
  return SUBSCRIPTION_TIERS[tier]?.color || 'gray';
};
