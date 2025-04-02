
export interface LeaderboardUser {
  id: string;
  userId: string;
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
  isProtected: boolean;
  spendStreak?: number;
  joinedAt?: string;     // Add joinedAt as an optional property
  spendChange?: number;  // Add additional fields from error messages
  rankChange?: number;
}

export interface LeaderboardFilter {
  team?: string;
  tier?: string;
  timeFrame?: 'all' | 'day' | 'week' | 'month' | 'year';
  search?: string;
}

// Re-export to avoid conflicts in index.ts
export type { LeaderboardUser, LeaderboardFilter };

// Additional types used in the codebase
export interface SortByOptions {
  value: string;
  label: string;
}

export interface TypedLeaderboardFilter extends LeaderboardFilter {
  sort?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  timeframe?: string;
}
