
import { TeamColor } from './user';

export interface LeaderboardUser {
  id: string;
  userId: string; // Added this to fix errors
  username: string;
  displayName?: string;
  profileImage: string;
  tier: string;
  team: TeamColor;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  walletBalance?: number;
  isVerified?: boolean;
  isProtected?: boolean; // Added this
  spendStreak?: number;
  avatarUrl?: string; // Added this
  spentAmount?: number; // For backward compatibility
}

export interface LeaderboardFilter {
  team?: string;
  timeFrame?: 'all' | 'day' | 'week' | 'month' | 'year';
  tier?: string;
  search?: string;
  limit?: number;
  sortBy?: 'rank' | 'totalSpent' | 'username' | 'joined';
  sortDirection?: 'asc' | 'desc';
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  topSpender: {
    username: string;
    amount: number;
  };
  teamStats: Record<string, {
    users: number;
    spent: number;
  }>;
}

export interface LeaderboardEntry {
  id: string;
  username: string;
  rank: number;
  totalSpent: number;
  team: string;
  tier: string;
  avatarUrl?: string;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: number;
  username?: string; // Added this property
}

export interface SolanaTransaction {
  signature: string;
  amount: number;
  sender: string;
  recipient: string;
  timestamp: number;
  blockTime: number;
  status: 'confirmed' | 'pending' | 'failed';
  type: 'deposit' | 'withdrawal' | 'spend' | 'transfer';
}
