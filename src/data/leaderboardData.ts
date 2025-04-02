
import { LeaderboardUser } from '@/types/leaderboard';

// Mock data for the leaderboard
export const leaderboardUsers: LeaderboardUser[] = [
  {
    id: 'user1',
    userId: 'user1',
    username: 'royalty_lover',
    displayName: 'Royal Enthusiast',
    profileImage: '/assets/avatars/user1.png',
    totalSpent: 1250,
    amountSpent: 1250,
    rank: 1,
    previousRank: 2,
    team: 'gold',
    tier: 'royal',
    spendStreak: 7,
    walletBalance: 500,
    rankChange: 1,
    spendChange: 250,
    isProtected: true,
    isVerified: true,
    avatarUrl: '/assets/avatars/user1.png'
  },
  {
    id: 'user2',
    userId: 'user2',
    username: 'cash_monarch',
    displayName: 'Cash Monarch',
    profileImage: '/assets/avatars/user2.png',
    totalSpent: 980,
    amountSpent: 980,
    rank: 2,
    previousRank: 1,
    team: 'red',
    tier: 'premium',
    spendStreak: 3,
    walletBalance: 120,
    rankChange: -1,
    spendChange: 30,
    isProtected: false,
    isVerified: true,
    avatarUrl: '/assets/avatars/user2.png'
  },
  {
    id: 'user3',
    userId: 'user3',
    username: 'throne_supporter',
    displayName: 'Throne Supporter',
    profileImage: '/assets/avatars/user3.png',
    totalSpent: 765,
    amountSpent: 765,
    rank: 3,
    previousRank: 5,
    team: 'blue',
    tier: 'premium',
    spendStreak: 5,
    walletBalance: 230,
    rankChange: 2,
    spendChange: 120,
    isProtected: false,
    isVerified: false,
    avatarUrl: '/assets/avatars/user3.png'
  },
  {
    id: 'user4',
    userId: 'user4',
    username: 'noble_spender',
    displayName: 'Noble Spender',
    profileImage: '/assets/avatars/user4.png',
    totalSpent: 650,
    amountSpent: 650,
    rank: 4,
    previousRank: 3,
    team: 'purple',
    tier: 'pro',
    spendStreak: 2,
    walletBalance: 75,
    rankChange: -1,
    spendChange: 50,
    isProtected: false,
    isVerified: true,
    avatarUrl: '/assets/avatars/user4.png'
  },
  {
    id: 'user5',
    userId: 'user5',
    username: 'royal_jester',
    displayName: 'Royal Jester',
    profileImage: '/assets/avatars/user5.png',
    totalSpent: 520,
    amountSpent: 520,
    rank: 5,
    previousRank: 4,
    team: 'green',
    tier: 'basic',
    spendStreak: 1,
    walletBalance: 30,
    rankChange: -1,
    spendChange: 20,
    isProtected: false,
    isVerified: false,
    avatarUrl: '/assets/avatars/user5.png'
  }
];

// More mock users for pagination testing
export const generateMockLeaderboardUsers = (count: number): LeaderboardUser[] => {
  const users: LeaderboardUser[] = [];
  const teams: string[] = ['red', 'blue', 'green', 'gold', 'purple'];
  const tiers: string[] = ['basic', 'pro', 'premium', 'royal', 'founder'];
  
  for (let i = 0; i < count; i++) {
    const id = `user${i + 6}`;
    const spent = Math.floor(Math.random() * 1000) + 100;
    const previousRank = i + 6 + (Math.floor(Math.random() * 5) - 2);
    
    users.push({
      id,
      userId: id,
      username: `user_${i + 6}`,
      displayName: `User ${i + 6}`,
      profileImage: `/assets/avatars/default.png`,
      totalSpent: spent,
      amountSpent: spent,
      rank: i + 6,
      previousRank: previousRank > 0 ? previousRank : i + 7,
      team: teams[i % teams.length],
      tier: tiers[i % tiers.length],
      spendStreak: Math.floor(Math.random() * 10),
      walletBalance: Math.floor(Math.random() * 500),
      rankChange: (i + 6) - previousRank,
      spendChange: Math.floor(Math.random() * 100),
      isProtected: Math.random() > 0.9,
      isVerified: Math.random() > 0.7,
      avatarUrl: `/assets/avatars/default.png`
    });
  }
  
  return users;
};

// Combine initial users with generated users
export const allLeaderboardUsers: LeaderboardUser[] = [
  ...leaderboardUsers,
  ...generateMockLeaderboardUsers(20)
];
