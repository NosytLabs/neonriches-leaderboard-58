
import { TeamColor, UserTier } from './user-consolidated';

/**
 * User object for leaderboard display
 */
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: UserTier;
  team?: TeamColor | null;
  rank: number;
  totalSpent: number;
  walletBalance?: number;
  previousRank?: number;
  spendStreak?: number;
}

/**
 * Available sort options for the leaderboard
 */
export type SortByOptions = 'rank' | 'spent' | 'change' | 'streak';

/**
 * Filter for typed leaderboard queries
 */
export interface TypedLeaderboardFilter {
  team?: TeamColor | null;
  tier?: UserTier | null;
  minSpent?: number;
  maxSpent?: number;
  minRank?: number;
  maxRank?: number;
  search?: string;
}

/**
 * The available tabs for the leaderboard
 */
export type LeaderboardTab = 'all' | 'team' | 'friends' | 'events';

// This prevents TS error with multiple exports
export {};
