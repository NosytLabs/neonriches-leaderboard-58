
import { TeamColor, UserTier } from './user-consolidated';

/**
 * User object for leaderboard display
 */
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  avatarUrl?: string;
  tier: UserTier;
  team?: TeamColor | null;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  spentAmount?: number;  // Legacy field - use totalSpent instead
  amountSpent?: number;  // Legacy field - use totalSpent instead
  isVerified?: boolean;
  spendStreak?: number;
  joinedAt?: string;
  spendChange?: number;  // Added for components that need it
  rankChange?: number;   // Added for components that need it
  isProtected?: boolean; // Added for components that need it
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
