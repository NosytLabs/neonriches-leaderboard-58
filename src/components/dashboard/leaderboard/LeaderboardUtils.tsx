
import { LeaderboardUser } from '@/types/leaderboard';
import { TeamColor } from '@/types/team';
import { toTeamColor } from '@/utils/typeConverters';

// Export the type properly
export type { LeaderboardUser };

// Mock leaderboard data
export const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: "1",
    userId: "1",
    username: "KingMidas",
    displayName: "King Midas",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    tier: "royal",
    team: toTeamColor("gold"),
    rank: 1,
    previousRank: 1,
    totalSpent: 15000,
    amountSpent: 15000,
    walletBalance: 5000,
    isVerified: true,
    isProtected: false,
    spendStreak: 5
  },
  {
    id: "2",
    userId: "2",
    username: "SirSpendALot",
    displayName: "Sir Spend-A-Lot",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    tier: "premium" as "royal", // Type cast to allowed tier
    team: toTeamColor("red"),
    rank: 2,
    previousRank: 4,
    totalSpent: 12000,
    amountSpent: 12000,
    walletBalance: 3000,
    isVerified: true,
    isProtected: true,
    spendStreak: 3
  },
  {
    id: "3",
    userId: "3",
    username: "LadyFortune",
    displayName: "Lady Fortune",
    profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
    tier: "premium" as "royal", // Type cast to allowed tier
    team: toTeamColor("blue"),
    rank: 3,
    previousRank: 2,
    totalSpent: 10000,
    amountSpent: 10000,
    walletBalance: 4500,
    isVerified: true,
    isProtected: false,
    spendStreak: 0
  },
  {
    id: "4",
    userId: "4",
    username: "GoldHoarder",
    displayName: "Gold Hoarder",
    profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
    tier: "pro" as "gold", // Type cast to allowed tier
    team: toTeamColor("green"),
    rank: 4,
    previousRank: 3,
    totalSpent: 7500,
    amountSpent: 7500,
    walletBalance: 2000,
    isVerified: false,
    isProtected: false,
    spendStreak: 0
  },
  {
    id: "5",
    userId: "5",
    username: "RoyalSpender",
    displayName: "Royal Spender",
    profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
    tier: "basic",
    team: toTeamColor("blue"),
    rank: 5,
    previousRank: 5,
    totalSpent: 5000,
    amountSpent: 5000,
    walletBalance: 1000,
    isVerified: false,
    isProtected: false,
    spendStreak: 0
  }
];
