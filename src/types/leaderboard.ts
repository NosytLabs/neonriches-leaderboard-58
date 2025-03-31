
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
  tier: UserTier | string;
  team?: TeamColor | string | null;
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
  userId?: string;       // Added for Events.tsx
  joinDate?: string;     // Added for Events.tsx
}

/**
 * Available sort options for the leaderboard
 */
export type SortByOptions = 'rank' | 'spent' | 'change' | 'streak';

/**
 * Filter for typed leaderboard queries
 */
export interface TypedLeaderboardFilter {
  team?: TeamColor | string | null;
  tier?: UserTier | string | null;
  minSpent?: number;
  maxSpent?: number;
  minRank?: number;
  maxRank?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

/**
 * The available tabs for the leaderboard
 */
export type LeaderboardTab = 'all' | 'team' | 'friends' | 'events';

/**
 * Leaderboard filter interface
 */
export interface LeaderboardFilter {
  team?: string;
  tier?: string;
  timeFrame?: 'all' | 'day' | 'week' | 'month' | 'year';
  search?: string;
  sort?: string;
}

/**
 * Sort options for the leaderboard
 */
export interface SortByOption {
  value: string;
  label: string;
}

// Export types using export type syntax to avoid conflicts
export type { LeaderboardFilter, LeaderboardUser };
