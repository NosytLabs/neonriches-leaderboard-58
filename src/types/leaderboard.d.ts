
import { TeamColor } from './user';

export interface LeaderboardUser {
  id: string;
  userId?: string;
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
  isProtected?: boolean;
  spendStreak?: number;
  avatarUrl?: string;
  spentAmount?: number; // For backward compatibility
  amountSpent?: number; // For backward compatibility
}

export interface LeaderboardFilter {
  team?: string | 'all';
  timeFrame?: 'all' | 'day' | 'week' | 'month' | 'year';
  tier?: string | 'all';
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
  username?: string;
  userId?: string;
  publicKey?: string;
  amountSpent?: number; 
  totalDeposited?: number;
  rank?: number;
  joinDate?: number;
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
