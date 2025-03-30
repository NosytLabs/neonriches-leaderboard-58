
import { TeamType, UserTier } from './user';

export interface MockeryAction {
  id: string;
  name: string;
  description: string;
  cost: number;
  effect: string;
  duration: number;
  icon: string;
  targetId?: string;
  targetUsername?: string;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  publicKey?: string;
  amountSpent: number;
  totalDeposited: number;
  rank: number;
  joinDate: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  team?: TeamType;
  walletBalance?: number;
  avatarUrl?: string;
  previousRank?: number;
  isVerified?: boolean;
  id?: string;
}

export type LeaderboardUser = {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  tier?: UserTier;
  team?: TeamType;
  amountSpent?: number;
  walletBalance?: number;
  joinedAt?: string;
};

export interface LeaderboardFilter {
  timespan: 'all' | 'day' | 'week' | 'month' | 'year';
  team?: TeamType;
  tier?: UserTier;
  timeFrame?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export type { MockeryAction };
