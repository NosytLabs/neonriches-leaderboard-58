
/**
 * Leaderboard type definitions
 */

import { TeamColor, UserTier, LeaderboardUser, LeaderboardFilter } from './mockery-types';

// Re-export types for backwards compatibility
export type { LeaderboardUser, LeaderboardFilter };

export interface LeaderboardState {
  users: LeaderboardUser[];
  loading: boolean;
  error: string | null;
  filter: string;
  sortBy: string;
  page: number;
  itemsPerPage: number;
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  topSpender: {
    username: string;
    amount: number;
  };
  averageSpent: number;
  recentActivity: {
    username: string;
    action: string;
    amount: number;
    timestamp: string;
  }[];
}

export interface SortByOptions {
  value: string;
  label: string;
}

export interface TypedLeaderboardFilter extends LeaderboardFilter {
  sort?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface OnChainLeaderboardEntry {
  address: string;
  username: string;
  amount: number;
  rank: number;
  timestamp: number;
}

export interface SolanaTransaction {
  id: string;
  signature: string;
  sender: string;
  receiver?: string; // Added for compatibility
  amount: number;
  timestamp: string;
  status: 'confirmed' | 'pending' | 'failed';
  type: 'deposit' | 'withdraw' | 'transfer' | 'spend';
  blockHeight?: number;
  fee?: number;
  metadata?: Record<string, any>;
}
