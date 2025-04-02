
import { TeamColor } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  rank: number;
  previousRank?: number;
  tier: string;
  team: TeamColor | string;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  spendStreak: number;
  
  // Add missing properties used in components
  isVerified?: boolean;
  isProtected?: boolean;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
}

export interface LeaderboardFilter {
  limit: number;
  page?: number;
  team?: string;
  tier?: string;
  timeframe?: 'all' | 'week' | 'month' | 'year' | 'today' | 'all-time';
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  sort?: string; // Added for compatibility
  period?: string; // Added for compatibility
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}
