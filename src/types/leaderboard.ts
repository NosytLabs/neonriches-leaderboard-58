
/**
 * Leaderboard type definitions
 */

import { TeamColor, UserTier } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  avatarUrl?: string; // For compatibility
  team: TeamColor;
  tier: UserTier;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  amountSpent?: number; // For backward compatibility
  spentAmount?: number; // Legacy field
  isVerified?: boolean;
  isProtected: boolean;
  walletBalance?: number;
  spendStreak?: number;
  // Additional fields needed across the codebase
  joinedDate?: string;
  joinDate?: string;
  joinedAt?: string;
  createdAt?: string;
  spendChange?: number;
  rankChange?: number;
  thumbsDown?: number;
  carrot?: number;
  fish?: number;
  sortDirection?: 'asc' | 'desc';
}

export interface LeaderboardState {
  users: LeaderboardUser[];
  loading: boolean;
  error: string | null;
  filter: string;
  sortBy: string;
  page: number;
  itemsPerPage: number;
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  topSpender: {
    username: string;
    amount: number;
  };
  averageSpent: number;
  recentActivity: {
    username: string;
    action: string;
    amount: number;
    timestamp: string;
  }[];
}

export interface LeaderboardFilter {
  team?: TeamColor | 'all';
  tier?: UserTier | 'all';
  timeframe?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all' | string;
  timeFrame?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all' | string;
  search?: string;
  sort?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface SortByOptions {
  value: string;
  label: string;
}

export interface TypedLeaderboardFilter extends LeaderboardFilter {
  sort?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}
