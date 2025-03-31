
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  avatarUrl?: string;
  tier: 'basic' | 'bronze' | 'silver' | 'gold' | 'royal';
  team?: string;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  spentAmount?: number;  // Legacy field - use totalSpent instead
  amountSpent?: number;  // Legacy field - use totalSpent instead
  isVerified?: boolean;
  spendStreak?: number;
}

export interface LeaderboardFilter {
  team?: string;
  tier?: string;
  timeFrame?: 'all' | 'day' | 'week' | 'month' | 'year';
  search?: string;
}
