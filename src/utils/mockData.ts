
import { LeaderboardUser } from '@/types/leaderboard';
import { TeamColor, UserTier } from '@/types/mockery-types';

// Mock leaderboard data
export const generateMockLeaderboardData = (): LeaderboardUser[] => {
  const users: LeaderboardUser[] = [
    {
      id: '1',
      userId: '1',
      username: 'royalspender',
      displayName: 'Royal Spender',
      profileImage: '/assets/avatars/1.png',
      avatarUrl: '/assets/avatars/1.png',
      totalSpent: 5000,
      amountSpent: 5000,
      rank: 1,
      previousRank: 2,
      team: 'gold',
      tier: 'royal',
      spendStreak: 7,
      isVerified: true,
      isProtected: true
    },
    {
      id: '2',
      userId: '2',
      username: 'bigwhale',
      displayName: 'Big Whale',
      profileImage: '/assets/avatars/2.png',
      avatarUrl: '/assets/avatars/2.png',
      totalSpent: 4500,
      amountSpent: 4500,
      rank: 2,
      previousRank: 1,
      team: 'blue',
      tier: 'whale',
      spendStreak: 5,
      isVerified: true,
      isProtected: false
    },
    {
      id: '3',
      userId: '3',
      username: 'loyaluser',
      displayName: 'Loyal User',
      profileImage: '/assets/avatars/3.png',
      avatarUrl: '/assets/avatars/3.png',
      totalSpent: 3200,
      amountSpent: 3200,
      rank: 3,
      previousRank: 3,
      team: 'red',
      tier: 'premium',
      spendStreak: 3,
      isVerified: false,
      isProtected: false
    }
  ];

  return users;
};

// Mock subscription plans
export const mockSubscriptionPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9.99,
    interval: 'month',
    description: 'Essential features for casual users',
    features: [
      'Basic profile customization',
      'Standard leaderboard access',
      '3-day mockery protection'
    ],
    color: 'blue',
    maxLinks: 5,
    maxProfiles: 1,
    analyticsAccess: false,
    customization: false,
    protectionDuration: 3,
    priceMonthly: 9.99,
    priceYearly: 99.99
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19.99,
    interval: 'month',
    description: 'Enhanced features for active users',
    features: [
      'Advanced profile customization',
      'Priority leaderboard placement',
      '7-day mockery protection',
      'Custom profile themes'
    ],
    color: 'purple',
    maxLinks: 10,
    maxProfiles: 2,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 7,
    priceMonthly: 19.99,
    priceYearly: 199.99,
    recommended: true
  },
  {
    id: 'royal',
    name: 'Royal',
    price: 49.99,
    interval: 'month',
    description: 'Ultimate features for dedicated users',
    features: [
      'Exclusive profile effects',
      'Royal Court membership',
      '30-day mockery protection',
      'Custom royal titles',
      'Royal badge collection',
      'Exclusive events access'
    ],
    color: 'gold',
    maxLinks: 20,
    maxProfiles: 5,
    analyticsAccess: true,
    customization: true,
    protectionDuration: 30,
    priceMonthly: 49.99,
    priceYearly: 499.99
  }
];

export default {
  generateMockLeaderboardData,
  mockSubscriptionPlans
};
