
import { TeamColor, UserTier } from './user';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: UserTier;
  team?: TeamColor;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  spentAmount?: number;
  amountSpent?: number;
  supporters?: number;
  supporting?: number;
  isVIP?: boolean;
  isFounder?: boolean;
  isVerified?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  lastActive?: string;
  createdAt?: string;
}

export interface LeaderboardFilter {
  timeFrame?: 'allTime' | 'thisWeek' | 'thisMonth' | 'today';
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  count: number;
  page: number;
  sortBy?: 'rank' | 'username' | 'totalSpent' | 'team';
  sortDirection?: 'asc' | 'desc';
  timespan?: string;
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  topSpender: {
    username: string;
    amount: number;
  };
  topTeam: {
    name: string;
    members: number;
    contribution: number;
  };
  averageSpent: number;
  medianRank: number;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  userId: string;
  amount: number;
  timestamp: number;
  username?: string;
  publicKey?: string;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number;
  joinDate?: number;
}

export type SolanaTransaction = {
  signature: string;
  timestamp: number;
  sender: string;
  recipient: string;
  amount: number;
  type: 'deposit' | 'withdrawal' | 'transfer';
  status: 'confirmed' | 'pending' | 'failed';
};
