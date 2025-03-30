
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
    id: 'advanced_analytics',
    name: 'Advanced Analytics',
    description: 'Get detailed demographics of your visitors and full conversion tracking',
    price: 15,
    tier: 'premium'
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
  },
  {
    id: 'custom_background',
    name: 'Custom Background',
    description: 'Upload a custom background for your profile page',
    price: 20,
    tier: 'premium'
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
    id: 'midweek_showcase',
    name: 'Midweek Showcase',
    description: 'Random selection of premium profiles get featured',
    days: ['Wednesday'],
    visibilityBoost: 10,
    requirements: 'Premium tier or higher'
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
    premium: 'Full visitor demographics and tracking',
    royal: 'AI-powered analytics and trend predictions'
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
export const SUBSCRIPTION_TIERS: Record<UserTier, SubscriptionTier> = {
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
    protectionDuration: 24
  },
  basic: {
    id: "basic",
    name: "Basic",
    price: 5,
    interval: "month",
    description: "Enhanced profile with basic marketing tools",
    features: ["3 promotional links", "Profile visitor stats", "2x visibility boost"],
    color: "blue",
    maxLinks: 3,
    maxProfiles: 1,
    analyticsAccess: true,
    customization: false,
    protectionDuration: 48
  },
  bronze: {
    id: "bronze",
    name: "Bronze",
    price: 10,
    interval: "month",
    description: "Bronze tier with improved visibility",
    features: ["5 promotional links", "Basic analytics", "3x visibility boost"],
    color: "amber",
    maxLinks: 5,
    maxProfiles: 1,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 72
  },
  silver: {
    id: "silver",
    name: "Silver",
    price: 20,
    interval: "month",
    description: "Silver tier with advanced features",
    features: ["7 promotional links", "Enhanced analytics", "5x visibility boost"],
    color: "gray",
    maxLinks: 7,
    maxProfiles: 2,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 96
  },
  gold: {
    id: "gold",
    name: "Gold",
    price: 50,
    interval: "month",
    description: "Gold tier with premium benefits",
    features: ["10 promotional links", "Advanced analytics", "8x visibility boost"],
    color: "yellow",
    maxLinks: 10,
    maxProfiles: 3,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 120
  },
  platinum: {
    id: "platinum",
    name: "Platinum",
    price: 100,
    interval: "month",
    description: "Platinum tier with exclusive features",
    features: ["15 promotional links", "Full analytics suite", "10x visibility boost"],
    color: "sky",
    maxLinks: 15,
    maxProfiles: 5,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 168
  },
  diamond: {
    id: "diamond",
    name: "Diamond",
    price: 200,
    interval: "month",
    description: "Diamond tier with maximum benefits",
    features: ["20 promotional links", "Premium analytics", "15x visibility boost"],
    color: "cyan",
    maxLinks: 20,
    maxProfiles: 10,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 240
  },
  royal: {
    id: "royal",
    name: "Royal",
    price: 500,
    interval: "month",
    description: "Ultimate tier with unmatched visibility",
    features: ["Unlimited links", "AI-powered analytics", "20x visibility boost"],
    color: "royal-gold",
    maxLinks: 999,
    maxProfiles: 999,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 720
  },
  pro: {
    id: "pro",
    name: "Professional",
    price: 75,
    interval: "month",
    description: "Professional tier focused on marketing",
    features: ["12 promotional links", "Marketing dashboard", "9x visibility boost"],
    color: "indigo",
    maxLinks: 12,
    maxProfiles: 3,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 144
  },
  premium: {
    id: "premium",
    name: "Premium",
    price: 150,
    interval: "month",
    description: "Premium access with exclusive marketing tools",
    features: ["18 promotional links", "VIP marketing tools", "12x visibility boost"],
    color: "purple",
    maxLinks: 18,
    maxProfiles: 7,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 192
  },
  founder: {
    id: "founder",
    name: "Founder",
    price: 1000,
    interval: "month",
    description: "Lifetime access to all features and recognition",
    features: ["Unlimited everything", "Founder recognition", "Maximum visibility"],
    color: "emerald",
    maxLinks: 999,
    maxProfiles: 999,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 999
  },
  whale: {
    id: "whale",
    name: "Whale",
    price: 5000,
    interval: "month",
    description: "Whale tier for the biggest spenders",
    features: ["Everything + custom requests", "Global recognition", "Highest visibility"],
    color: "blue",
    maxLinks: 999,
    maxProfiles: 999,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 999
  },
  shark: {
    id: "shark",
    name: "Shark",
    price: 2500,
    interval: "month",
    description: "Shark tier with exceptional benefits",
    features: ["Everything + priority support", "Featured everywhere", "Elite visibility"],
    color: "cyan",
    maxLinks: 999,
    maxProfiles: 999,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 999
  },
  dolphin: {
    id: "dolphin",
    name: "Dolphin",
    price: 1500,
    interval: "month",
    description: "Dolphin tier with great value",
    features: ["Everything + extra perks", "Top featured", "Super visibility"],
    color: "sky",
    maxLinks: 50,
    maxProfiles: 20,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 999
  },
  standard: {
    id: "standard",
    name: "Standard",
    price: 15,
    interval: "month",
    description: "Standard tier with basic premium features",
    features: ["5 promotional links", "Basic profile stats", "2x visibility boost"],
    color: "slate",
    maxLinks: 5,
    maxProfiles: 1,
    analyticsAccess: true,
    customization: false,
    protectionDuration: 48
  }
};

// Helper functions to filter tiers
export const getVisibleTiers = (): UserTier[] => {
  return ['free', 'basic', 'premium', 'royal'] as UserTier[];
};

export const getUpgradeOptions = (currentTier?: UserTier): SubscriptionTier[] => {
  const allTiers = Object.values(SUBSCRIPTION_TIERS);
  const currentTierPrice = currentTier ? SUBSCRIPTION_TIERS[currentTier].price : 0;
  
  return allTiers.filter(tier => tier.price > currentTierPrice)
    .sort((a, b) => a.price - b.price);
};

export const getTierColor = (tier: UserTier): string => {
  return SUBSCRIPTION_TIERS[tier]?.color || 'gray';
};
