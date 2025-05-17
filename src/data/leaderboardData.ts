
import { LeaderboardUser } from '@/types/leaderboard-unified';

export const allLeaderboardUsers: LeaderboardUser[] = [
  {
    id: "1",
    username: "KingMidas",
    displayName: "King Midas",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    rank: 1,
    previousRank: 2,
    tier: "royal",
    team: "gold",
    totalSpent: 15000,
    walletBalance: 5000,
    isVerified: true,
    spendStreak: 14,
    isProtected: true,
    rankChange: 1,
    spendChange: 2500
  },
  {
    id: "2",
    username: "EliteSpender",
    displayName: "Elite Spender",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    rank: 2,
    previousRank: 1,
    tier: "elite",
    team: "red",
    totalSpent: 12000,
    walletBalance: 3000,
    isVerified: true,
    spendStreak: 8,
    isProtected: false,
    rankChange: -1,
    spendChange: 1000
  },
  {
    id: "3",
    username: "RoyalCollector",
    displayName: "Royal Collector",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    rank: 3,
    previousRank: 3,
    tier: "premium",
    team: "blue",
    totalSpent: 10000,
    walletBalance: 2500,
    isVerified: false,
    spendStreak: 3,
    isProtected: false,
    rankChange: 0,
    spendChange: 1500
  },
  {
    id: "4",
    username: "MoneyThrower",
    displayName: "Money Thrower",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    rank: 4,
    previousRank: 5,
    tier: "premium",
    team: "green",
    totalSpent: 8500,
    walletBalance: 1500,
    isVerified: false,
    spendStreak: 2,
    isProtected: false,
    rankChange: 1,
    spendChange: 1200
  },
  {
    id: "5",
    username: "WealthFlexer",
    displayName: "Wealth Flexer",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    rank: 5,
    previousRank: 4,
    tier: "standard",
    team: "blue",
    totalSpent: 7200,
    walletBalance: 800,
    isVerified: false,
    spendStreak: 0,
    isProtected: false,
    rankChange: -1,
    spendChange: 500
  },
  {
    id: "6",
    username: "StatusSeeker",
    displayName: "Status Seeker",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
    rank: 6,
    previousRank: 6,
    tier: "standard",
    team: "red",
    totalSpent: 6500,
    walletBalance: 1200,
    isVerified: false,
    spendStreak: 1,
    isProtected: false,
    rankChange: 0,
    spendChange: 800
  },
  {
    id: "7",
    username: "RoyalWannabe",
    displayName: "Royal Wannabe",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    rank: 7,
    previousRank: 8,
    tier: "basic",
    team: "green",
    totalSpent: 4800,
    walletBalance: 350,
    isVerified: false,
    spendStreak: 0,
    isProtected: false,
    rankChange: 1,
    spendChange: 600
  },
  {
    id: "8",
    username: "CrownChaser",
    displayName: "Crown Chaser",
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
    rank: 8,
    previousRank: 7,
    tier: "basic",
    team: "blue",
    totalSpent: 3900,
    walletBalance: 200,
    isVerified: false,
    spendStreak: 0,
    isProtected: false,
    rankChange: -1,
    spendChange: 300
  },
  {
    id: "9",
    username: "LeaderboardClimber",
    displayName: "Leaderboard Climber",
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
    rank: 9,
    previousRank: 10,
    tier: "basic",
    team: "gold",
    totalSpent: 3200,
    walletBalance: 150,
    isVerified: false,
    spendStreak: 0,
    isProtected: false,
    rankChange: 1,
    spendChange: 400
  },
  {
    id: "10",
    username: "SpendingRoyalty",
    displayName: "Spending Royalty",
    profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
    rank: 10,
    previousRank: 9,
    tier: "basic",
    team: "red",
    totalSpent: 2800,
    walletBalance: 100,
    isVerified: false,
    spendStreak: 0,
    isProtected: false,
    rankChange: -1,
    spendChange: 200
  }
];

export const getTopUsers = (count: number = 3): LeaderboardUser[] => {
  return [...allLeaderboardUsers].sort((a, b) => b.totalSpent - a.totalSpent).slice(0, count);
};

export const getRoyalCourtUsers = (): LeaderboardUser[] => {
  return getTopUsers(2);
};

export const getRegularLeaderboardUsers = (): LeaderboardUser[] => {
  return [...allLeaderboardUsers].sort((a, b) => a.rank - b.rank).slice(2);
};
