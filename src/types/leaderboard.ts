
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

export default {
  LeaderboardUser,
  SortByOptions,
  TypedLeaderboardFilter
};
