
import { SubscriptionTier } from '@/types/subscription';

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: 'free',
    name: 'Commoner',
    description: 'Basic access for the peasantry',
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      'Basic profile customization',
      'View the Royal Leaderboard',
      'Participate in public discussions',
      'One profile image',
      'Basic text formatting'
    ],
    recommended: false
  },
  {
    id: 'standard',
    name: 'Squire',
    description: 'Enhanced presence in the royal court',
    priceMonthly: 1,
    priceYearly: 10,
    features: [
      'All Commoner features',
      'Up to 3 profile images',
      'Custom profile colors',
      'Basic profile analytics',
      'Add up to 3 external links'
    ],
    recommended: false
  },
  {
    id: 'premium',
    name: 'Knight',
    description: 'Distinguished nobility status',
    priceMonthly: 5,
    priceYearly: 50,
    features: [
      'All Squire features',
      'RGB border animations',
      'Animated profile backgrounds',
      'Advanced analytics dashboard',
      'Add up to 5 external links with tracking',
      'Exclusive mockery actions'
    ],
    recommended: true
  },
  {
    id: 'royal',
    name: 'Noble',
    description: 'The pinnacle of royal status',
    priceMonthly: 10,
    priceYearly: 100,
    features: [
      'All Knight features',
      'Custom profile animations',
      'Profile visibility boosts',
      'Exclusive royal profile badge',
      'Priority placement in feeds',
      'Premium mockery actions',
      'Advanced analytics with export'
    ],
    recommended: false
  }
];
