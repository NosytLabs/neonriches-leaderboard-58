
import { UserTier } from '@/types/user';

export interface SubscriptionTier {
  id: UserTier;
  name: string;
  price: number;
  interval: 'month' | 'year';
  description: string;
  features: string[];
  color: string;
  highlighted?: boolean;
  popular?: boolean;
  rankBoost?: number;
  dailyBoost?: number;
  maxLinks?: number;
  maxProfiles?: number;
  analyticsAccess?: boolean;
  customization?: boolean;
  protectionDuration?: number; // in hours
}

export const SUBSCRIPTION_TIERS: Record<UserTier, SubscriptionTier> = {
  'free': {
    id: 'free',
    name: 'Commoner',
    price: 0,
    interval: 'month',
    description: 'Basic access to SpendThrone',
    features: [
      'Basic profile',
      'Public leaderboard visibility',
      'Participate in mockery events',
      'Standard deposit options'
    ],
    color: 'gray',
    maxLinks: 1,
    maxProfiles: 1,
    analyticsAccess: false,
    customization: false,
    protectionDuration: 0
  },
  'bronze': {
    id: 'bronze',
    name: 'Squire',
    price: 4.99,
    interval: 'month',
    description: 'Enhanced features for aspiring nobles',
    features: [
      'All Free features',
      'Bronze profile badge',
      'Basic profile customization',
      '2 social links',
      'Protection from mockery for 1 hour'
    ],
    color: 'amber',
    maxLinks: 2,
    maxProfiles: 1,
    analyticsAccess: false,
    customization: true,
    protectionDuration: 1
  },
  'silver': {
    id: 'silver',
    name: 'Knight',
    price: 9.99,
    interval: 'month',
    description: 'Stand out with enhanced visibility',
    features: [
      'All Bronze features',
      'Silver profile badge',
      'Extended profile customization',
      '5 social links',
      'Basic analytics',
      'Protection from mockery for 3 hours'
    ],
    color: 'gray',
    highlighted: true,
    popular: true,
    maxLinks: 5,
    maxProfiles: 1,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 3
  },
  'gold': {
    id: 'gold',
    name: 'Duke/Duchess',
    price: 19.99,
    interval: 'month',
    description: 'Premium features for serious contenders',
    features: [
      'All Silver features',
      'Gold profile badge',
      'Advanced profile customization',
      'Unlimited social links',
      'Advanced analytics',
      'Daily 5% rank boost',
      'Protection from mockery for 12 hours'
    ],
    color: 'yellow',
    rankBoost: 5,
    dailyBoost: 5,
    maxLinks: 10,
    maxProfiles: 3,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 12
  },
  'platinum': {
    id: 'platinum',
    name: 'Marquess',
    price: 49.99,
    interval: 'month',
    description: 'Elite features for distinguished nobles',
    features: [
      'All Gold features',
      'Platinum profile badge',
      'Complete profile customization',
      'Unlimited link profiles',
      'Premium analytics dashboard',
      'Daily 10% rank boost',
      'Protection from mockery for 24 hours'
    ],
    color: 'blue',
    rankBoost: 10,
    dailyBoost: 10,
    maxLinks: 25,
    maxProfiles: 5,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 24
  },
  'royal': {
    id: 'royal',
    name: 'Royal Highness',
    price: 99.99,
    interval: 'month',
    description: 'Exclusive features for the highest nobles',
    features: [
      'All Platinum features',
      'Royal Crown badge',
      'Complete customization with animated effects',
      'Unlimited everything',
      'Royal analytics with spending predictions',
      'Daily 15% rank boost',
      'Protection from mockery for 48 hours',
      'Royal decrees and announcements'
    ],
    color: 'purple',
    rankBoost: 15,
    dailyBoost: 15,
    maxLinks: 999,
    maxProfiles: 10,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 48
  },
  'premium': {
    id: 'premium',
    name: 'Premium Noble',
    price: 29.99,
    interval: 'month',
    description: 'Enhanced features for serious nobles',
    features: [
      'All Gold features',
      'Premium profile badge',
      'Advanced profile customization',
      'Up to 15 social links',
      'Advanced analytics',
      'Daily 7% rank boost',
      'Protection from mockery for 18 hours'
    ],
    color: 'purple',
    rankBoost: 7,
    dailyBoost: 7,
    maxLinks: 15,
    maxProfiles: 3,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 18
  },
  'pro': {
    id: 'pro',
    name: 'Professional',
    price: 39.99,
    interval: 'month',
    description: 'Professional features for businesses',
    features: [
      'All Premium features',
      'Pro profile badge',
      'Professional profile customization',
      'Up to 20 social links',
      'Business analytics',
      'Daily 8% rank boost',
      'Protection from mockery for 24 hours',
      'Priority customer support'
    ],
    color: 'indigo',
    rankBoost: 8,
    dailyBoost: 8,
    maxLinks: 20,
    maxProfiles: 5,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 24
  }
};

export const getSubscriptionTier = (tier: UserTier): SubscriptionTier => {
  return SUBSCRIPTION_TIERS[tier] || SUBSCRIPTION_TIERS.free;
};

