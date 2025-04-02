
// Define the LeaderboardFilter type
export interface LeaderboardFilter {
  team: string;
  tier: string;
  timeframe: string;
  search?: string;
  sortBy: string;
  sortDirection?: 'asc' | 'desc';
  limit?: number;
}

// Define the LeaderboardUser type
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string; // Make this required
  tier: string;
  team: string;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent?: number;
  walletBalance?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  rankChange?: number;
  spendChange?: number;
}
