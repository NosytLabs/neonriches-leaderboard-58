
import { TeamColor } from './user-types';
import { UserTier } from './user-types';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  team?: TeamColor;
  tier?: UserTier;
  spendingHistory?: number[];
  userId?: string;
  totalSpent?: number;
  spendStreak?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  rankChange?: number;
}

export type LeaderboardFilter = 
  | 'all'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'team-red'
  | 'team-blue'
  | 'team-green';

export interface LeaderboardOptions {
  filter?: LeaderboardFilter;
  search?: string;
  team?: TeamColor | null;
  timeframe?: string;
  tier?: string;
  page?: number;
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  totalPages: number;
  currentPage: number;
  total: number;
}
