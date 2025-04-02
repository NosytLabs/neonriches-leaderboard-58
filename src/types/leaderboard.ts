
import { TeamColor } from './user';

export interface LeaderboardFilter {
  timeframe?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all';
  team?: TeamColor | 'all';
  limit?: number;
  tier?: string;
  skip?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc'; // Add sortDirection
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
  sortBy: 'rank',
  sortDirection: 'asc' // Add default sortDirection
};

// Define the LeaderboardUser interface with all necessary properties
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  spentAmount?: number;
  walletBalance: number;
  isVerified: boolean;
  isProtected: boolean;
  spendStreak: number;
  spendChange?: number;
  rankChange?: number;
  avatarUrl?: string; // Added for compatibility
  joinedDate?: string; // Add joinedDate
  joinDate?: string; // Add joinDate
}

// Define typed version of the filter with more specific types
export interface TypedLeaderboardFilter extends Omit<LeaderboardFilter, 'timeframe' | 'team'> {
  sortBy: string;
  timeframe: string; // Changed from strict type to string for flexibility
  team: string;
  sortDirection?: 'asc' | 'desc'; // Added for compatibility
}

// Define other needed types for OnChain and SolanaTransaction
export interface OnChainLeaderboardEntry {
  address: string;
  username: string;
  totalSpent: number;
  rank: number;
  lastTx: string;
  publicKey?: string; // Added for compatibility
  amount?: number; // Add amount for compatibility
}

export interface SolanaTransaction {
  id: string;
  signature: string;
  amount: number;
  timestamp: string;
  block: number;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'spend';
  status: 'confirmed' | 'pending' | 'failed';
  sender: string;
  receiver?: string;
  slot?: number; // Added for compatibility
}
