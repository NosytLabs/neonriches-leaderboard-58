
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  avatarUrl?: string;
  tier: 'basic' | 'bronze' | 'silver' | 'gold' | 'royal' | 'pro' | 'premium' | 'elite' | 'standard' | 'legendary' | 'diamond' | 'platinum' | 'founder' | 'vip' | 'whale' | 'shark' | 'dolphin' | 'noble';
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
  joinDate?: string;     // Add for compatibility
  joinedDate?: string;   // Add for compatibility with UserProfile
  spendChange?: number;  // Add additional fields from error messages
  rankChange?: number;
  thumbsDown?: number;
  carrot?: number;       // Add mockery action type
  fish?: number;         // Add fish mockery action
}

export interface LeaderboardFilter {
  team?: string | 'all';
  tier?: string | 'all';
  // Use both timeframe and timeFrame for compatibility
  timeframe?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all' | string;
  timeFrame?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all' | string;
  search?: string;
  sort?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

// Re-export as type to avoid conflicts
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
}
