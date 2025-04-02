
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
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}
