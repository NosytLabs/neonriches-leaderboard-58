
import { TeamColor, UserTier } from '@/types/mockery-types';

/**
 * User information for leaderboard displays
 */
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  rank: number;
  amount: number;
  totalSpent?: number;
  team?: TeamColor;
  tier?: UserTier;
  avatarUrl?: string;
  profileImage?: string;
  isCurrentUser?: boolean;
}

/**
 * Filter options for leaderboard views
 */
export type LeaderboardTimeFrame = 'daily' | 'weekly' | 'monthly' | 'all-time';

/**
 * Leaderboard sorting options
 */
export type LeaderboardSortOption = 'rank' | 'amount' | 'recent' | 'team';

/**
 * Leaderboard filter configuration
 */
export interface LeaderboardFilters {
  timeFrame: LeaderboardTimeFrame;
  team?: TeamColor | 'all';
  tier?: UserTier | 'all';
  search?: string;
  sortBy?: LeaderboardSortOption;
  sortDirection?: 'asc' | 'desc';
}

/**
 * Leaderboard state for UI components
 */
export interface LeaderboardState {
  users: LeaderboardUser[];
  filters: LeaderboardFilters;
  loading: boolean;
  error?: string;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
