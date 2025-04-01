
import { UserProfile } from '@/types/user-consolidated';

// Get the user tier from a user profile
export const getUserTier = (user: UserProfile): string => {
  return user.tier || 'free';
};

// Marketing benefits by tier
export const getMarketingBenefitsByTier = (tier: string) => {
  const benefits = {
    free: {
      profileLinks: 1,
      analytics: false,
      customization: false,
      protection: 0
    },
    basic: {
      profileLinks: 3,
      analytics: true,
      customization: false,
      protection: 24
    },
    premium: {
      profileLinks: 5,
      analytics: true,
      customization: true,
      protection: 48
    },
    royal: {
      profileLinks: 10,
      analytics: true,
      customization: true,
      protection: 72
    }
  };

  // Use the tier if it exists in the benefits object, otherwise return free benefits
  return benefits[tier as keyof typeof benefits] || benefits.free;
};

// Define the available tiers with their details
export const tiers = {
  free: {
    name: 'Free',
    description: 'Basic access to the platform',
    features: ['Limited profile customization', 'Public leaderboard access'],
    color: 'gray'
  },
  basic: {
    name: 'Basic',
    description: 'Enhanced access with basic features',
    features: ['Profile customization', 'Team selection', 'Public leaderboard access'],
    color: 'blue'
  },
  premium: {
    name: 'Premium',
    description: 'Premium access with advanced features',
    features: ['Advanced profile customization', 'Team leadership', 'Analytics', 'Royal events access'],
    color: 'purple'
  },
  royal: {
    name: 'Royal',
    description: 'Royal access with all features',
    features: ['Full profile customization', 'Kingdom management', 'Advanced analytics', 'Royal events hosting'],
    color: 'gold'
  }
};

export default tiers;
