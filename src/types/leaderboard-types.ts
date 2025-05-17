
import { TeamColor } from './mockery-types';

/**
 * Core leaderboard user interface used across all components
 */
export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  avatarUrl?: string;
  rank: number;
  previousRank?: number;
  tier?: string;
  team?: TeamColor | string;
  totalSpent: number;
  amountSpent?: number;
  isCurrentUser?: boolean;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  walletBalance?: number;
  rankChange?: number;
  spendChange?: number;
  amount?: number;
}

/**
 * Filter options for leaderboard views
 */
export type LeaderboardTimeFrame = 'daily' | 'weekly' | 'monthly' | 'all-time';
export type TimeframeFilter = 'day' | 'week' | 'month' | 'year' | 'all';

/**
 * Leaderboard sorting options
 */
export type LeaderboardSortOption = 'rank' | 'amount' | 'recent' | 'team';
export type SortOption = 'rank' | 'spending' | 'streak' | 'newest';

/**
 * Unified leaderboard filter configuration
 */
export interface LeaderboardFilters {
  team?: TeamColor | string | 'all';
  tier?: string | 'all';
  timeframe?: TimeframeFilter | LeaderboardTimeFrame;
  search?: string;
  sortBy?: LeaderboardSortOption | SortOption;
  sortDirection?: 'asc' | 'desc';
  limit?: number;
  page?: number;
}

/**
 * Leaderboard response from API
 */
export interface LeaderboardResponse {
  users: LeaderboardUser[];
  totalUsers?: number;
  total?: number;
  currentPage?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
}

/**
 * Team leaderboard interfaces
 */
export interface TeamLeaderboardEntry {
  team: TeamColor;
  totalSpent: number;
  memberCount: number;
  avgSpent: number;
  position: number;
}

export interface TeamLeaderboardResponse {
  teams: TeamLeaderboardEntry[];
  total: number;
}

// For backward compatibility
export type LeaderboardFilter = LeaderboardFilters;
