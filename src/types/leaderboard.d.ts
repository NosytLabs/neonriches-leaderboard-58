
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
  spentAmount?: number;
  amountSpent?: number;
  isVerified?: boolean;
  spendStreak?: number;
}

export interface LeaderboardFilter {
  team?: string;
  tier?: string;
  timeFrame?: 'all' | 'day' | 'week' | 'month' | 'year';
  search?: string;
}
