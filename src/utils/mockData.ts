
import { LeaderboardUser } from '@/types/leaderboard';

// Sample leaderboard data
export const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: "1",
    userId: "1",
    username: "KingMidas",
    displayName: "King Midas",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    totalSpent: 15000,
    amountSpent: 15000,
    rank: 1,
    previousRank: 1,
    team: "gold",
    tier: "royal",
    spendStreak: 5,
    isVerified: true,
    isProtected: true,
    walletBalance: 5000, // Add required walletBalance
  },
  {
    id: "2",
    userId: "2",
    username: "SirSpendALot",
    displayName: "Sir Spend-A-Lot",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    totalSpent: 12000,
    amountSpent: 12000,
    rank: 2,
    previousRank: 4,
    team: "blue",
    tier: "premium",
    spendStreak: 3,
    isVerified: true,
    isProtected: false,
    walletBalance: 3000, // Add required walletBalance
  },
  {
    id: "3",
    userId: "3",
    username: "LadyFortune",
    displayName: "Lady Fortune",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    totalSpent: 10000,
    amountSpent: 10000,
    rank: 3,
    previousRank: 2,
    team: "red",
    tier: "premium",
    spendStreak: 0,
    isVerified: false,
    isProtected: false,
    walletBalance: 4500, // Add required walletBalance
  }
];

// Export for use in other files
export default {
  mockLeaderboardData
};
