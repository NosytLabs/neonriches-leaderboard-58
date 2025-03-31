
import { TeamColor, UserTier } from './user';

/**
 * LeaderboardUser type representing a user in the leaderboard
 */
export interface LeaderboardUser {
  id: string;
  userId?: string; // Add userId property for compatibility
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  team?: TeamColor;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  spendChange?: number;
  rankChange?: number;
  joinedAt?: string;
  walletBalance?: number;
  isVerified?: boolean;
  spendStreak?: number;
  isProtected?: boolean;
  amountSpent?: number; // For backward compatibility
}

/**
 * Options for sorting the leaderboard
 */
export type SortByOptions = 'rank' | 'totalSpent' | 'username' | 'joinDate';

/**
 * Typed leaderboard filter
 */
export interface TypedLeaderboardFilter {
  tier: UserTier | 'all';
  sortBy: SortByOptions;
  team: TeamColor | 'all';
  search: string;
  limit?: number;
  sortDirection: 'desc' | 'asc';
  timeFrame?: string;
}

// Export as a named export instead of default export
export {
  LeaderboardUser,
  SortByOptions,
  TypedLeaderboardFilter
};
