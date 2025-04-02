
import { TeamColor } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  rank: number;
  previousRank?: number;
  tier: string;
  totalSpent: number;
  team: TeamColor;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  walletBalance?: number;
  amountSpent?: number;
  rankChange?: number;
  spendChange?: number;
}

export interface LeaderboardFilter {
  team: TeamColor; 
  timeframe?: 'day' | 'week' | 'month' | 'year' | 'all';
  limit?: number;
  tier?: string;
  sort?: 'rank' | 'spending' | 'streak' | 'newest';
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  total: number;
  page: number;
  limit?: number;
}

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
