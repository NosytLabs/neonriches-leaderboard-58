
import { LeaderboardUser } from '@/types/leaderboard';

// Sample leaderboard data
export const allLeaderboardUsers: LeaderboardUser[] = [
  {
    id: '1',
    userId: '1',
    username: 'RoyalSpender',
    displayName: 'Royal Spender',
    profileImage: '/assets/avatars/user1.png',
    rank: 1,
    previousRank: 2,
    tier: 'royal',
    team: 'red',
    totalSpent: 25000,
    amountSpent: 25000,
    walletBalance: 5000,
    spendStreak: 7
  },
  {
    id: '2',
    userId: '2',
    username: 'GoldenWallet',
    displayName: 'Golden Wallet',
    profileImage: '/assets/avatars/user2.png',
    rank: 2,
    previousRank: 1,
    tier: 'gold',
    team: 'gold',
    totalSpent: 22500,
    amountSpent: 22500,
    walletBalance: 7500,
    spendStreak: 5
  },
  {
    id: '3',
    userId: '3',
    username: 'LavishLord',
    displayName: 'Lavish Lord',
    profileImage: '/assets/avatars/user3.png',
    rank: 3,
    previousRank: 3,
    tier: 'platinum',
    team: 'blue',
    totalSpent: 20000,
    amountSpent: 20000,
    walletBalance: 2000,
    spendStreak: 3
  },
  {
    id: '4',
    userId: '4',
    username: 'BigSpender',
    displayName: 'Big Spender',
    profileImage: '/assets/avatars/user4.png',
    rank: 4,
    previousRank: 5,
    tier: 'diamond',
    team: 'green',
    totalSpent: 17500,
    amountSpent: 17500,
    walletBalance: 3500,
    spendStreak: 2
  },
  {
    id: '5',
    userId: '5',
    username: 'RegalWaster',
    displayName: 'Regal Waster',
    profileImage: '/assets/avatars/user5.png',
    rank: 5,
    previousRank: 4,
    tier: 'elite',
    team: 'purple',
    totalSpent: 15000,
    amountSpent: 15000,
    walletBalance: 1000,
    spendStreak: 10
  },
  {
    id: '6',
    userId: '6',
    username: 'CrownJewel',
    displayName: 'Crown Jewel',
    profileImage: '/assets/avatars/user6.png',
    rank: 6,
    previousRank: 7,
    tier: 'pro',
    team: 'silver',
    totalSpent: 12500,
    amountSpent: 12500,
    walletBalance: 500,
    spendStreak: 1
  }
];

export default allLeaderboardUsers;
