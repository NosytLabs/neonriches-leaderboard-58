
import { TeamColor } from './team';
import { UserTier } from './user-types';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName: string;
  rank: number;
  previousRank?: number;
  tier: UserTier;
  team: TeamColor;
  totalSpent: number;
  walletBalance?: number;
  profileImage?: string;
  
  // Additional fields needed by various components
  avatarUrl?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  userId?: string;
}

export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  search: string;
  sortBy?: 'rank' | 'spent' | 'username';
  sortDirection?: 'asc' | 'desc';
}

export interface LeaderboardEntry {
  id: string;
  userId: string;
  username: string;
  position: number;
  amount: number;
  timestamp: string;
  avatarUrl?: string;
  teamColor?: TeamColor;
}

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
  total: number;
  page: number;
  limit: number;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: string;
  username?: string;
}

export interface SolanaTransaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  timestamp: string;
  signature: string;
  account: string;
}
