
import { UserProfile, UserTier, TeamType } from './user';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  amountSpent: number;
  totalSpent?: number;
  totalDeposited?: number;
  rank: number;
  previousRank?: number;
  team?: TeamType;
  tier?: UserTier;
  joinDate?: string;
  createdAt?: string;
  gender?: string;
  avatarUrl?: string;
}

export interface LeaderboardFilter {
  timespan: string;
  timeFrame?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  team?: string;
  limit?: number;
}

export interface LeaderboardStats {
  topSpender: LeaderboardUser | null;
  totalUsers: number;
  totalSpent: number;
  averageSpent: number;
}

export interface TeamLeaderboardStats {
  red: {
    totalSpent: number;
    memberCount: number;
    topSpender: LeaderboardUser | null;
  };
  green: {
    totalSpent: number;
    memberCount: number;
    topSpender: LeaderboardUser | null;
  };
  blue: {
    totalSpent: number;
    memberCount: number;
    topSpender: LeaderboardUser | null;
  };
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: number;
  userId?: string;
  username?: string;
  publicKey?: string;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number;
  joinDate?: number;
  totalSpent?: number;
}
