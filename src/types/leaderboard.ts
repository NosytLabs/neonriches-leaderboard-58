
import { TeamColor } from './team';
import { UserTier } from './user';

// Define the LeaderboardUser interface
export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: UserTier | string;
  team: TeamColor | string;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  walletBalance?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  spendStreak?: number;
  spentAmount?: number;
  isVIP?: boolean;
  joinDate?: string;
  joinedAt?: string;
}

// Define valid sort options for the leaderboard
export type LeaderboardSortOption = 'rank' | 'totalSpent' | 'username' | 'joined' | 'spent';

// Define the LeaderboardFilter interface
export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  search: string;
  limit?: number;
  timeFrame?: string;
  sortBy: LeaderboardSortOption;
  sortDirection: 'asc' | 'desc';
}
