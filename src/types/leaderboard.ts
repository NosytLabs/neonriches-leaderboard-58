
import { TeamType, UserTier } from './user';
import { MockeryAction } from './mockery';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  team?: TeamType;
  tier?: UserTier;
  joinedAt?: string;
  isOnline?: boolean;
  lastActive?: string;
  isProtected?: boolean;
}

export interface HistoricalRankEntry {
  rank: number;
  date: string;
  spending: number;
}

export interface TeamScore {
  team: TeamType;
  score: number;
  memberCount: number;
  averageSpending: number;
}

export interface LeaderboardFilter {
  timeFrame: string;
  timespan: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  team?: TeamType;
}

export interface LeaderboardSnapshot {
  id: string;
  date: string;
  entries: LeaderboardUser[];
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  averageSpent: number;
  topTeam: TeamType;
  fastestRiser: {
    username: string;
    rankChange: number;
  };
}

// Re-export MockeryAction to avoid duplicate declarations
export type { MockeryAction };
