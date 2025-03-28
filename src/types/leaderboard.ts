
export interface LeaderboardEntry {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  totalDeposited: number;
  spendingStreak?: number;
  joinDate: string;
  avatarUrl?: string;
  team?: string;
  lastTransaction?: string;
  onChain?: boolean;
  isVerified?: boolean;
  badges?: string[];
  tier?: string;
}

export interface TeamLeaderboardEntry {
  id: string;
  name: string;
  color: string;
  rank: number;
  previousRank: number;
  memberCount: number;
  totalSpent: number;
  averageSpent: number;
  topContributor?: {
    userId: string;
    username: string;
    amount: number;
  };
}

export interface LeaderboardFilter {
  team?: string;
  timeFrame?: 'all' | 'week' | 'month' | 'year';
  sortBy?: 'rank' | 'amountSpent' | 'joinDate';
  sortDirection?: 'asc' | 'desc';
}
