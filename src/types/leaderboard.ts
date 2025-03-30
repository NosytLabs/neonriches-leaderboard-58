
import { TeamType, UserTier } from './user';
import { MockeryAction } from './mockery';

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
}

export type LeaderboardUser = {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
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
}

export { MockeryAction };
