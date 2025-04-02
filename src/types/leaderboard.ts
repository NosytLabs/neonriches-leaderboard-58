
import { TeamColor } from './user';

export interface LeaderboardFilter {
  timeframe?: 'all-time' | 'today' | 'week' | 'month' | 'year';
  team?: TeamColor | 'all';
  limit?: number;
  tier?: string;
  skip?: number;
  search?: string;
  sortBy?: string;
  userId?: string;
  minRank?: number;
  maxRank?: number;
  minSpent?: number;
  maxSpent?: number;
}

export interface LeaderboardSortOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface LeaderboardFilterOption {
  id: string;
  label: string;
  value: string;
  description?: string;
  icon?: string;
}

export interface LeaderboardTimeframeOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export const defaultLeaderboardFilter: LeaderboardFilter = {
  timeframe: 'all-time',
  team: 'all',
  limit: 50,
  skip: 0,
  sortBy: 'rank'
};
