
import { TeamColor, UserTier } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string; // Required field
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: TeamColor;
  rank: number;
  previousRank: number;
  walletBalance: number;
  totalSpent: number;
  amountSpent: number;
  isVerified?: boolean;
  spendStreak?: number;
  isProtected?: boolean;
  joinDate?: string;
  createdAt?: string;
  joinedDate?: string; // Added for compatibility
}

export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  timeframe: 'day' | 'week' | 'month' | 'all';
  sortBy: 'rank' | 'spent' | 'streak';
}

export interface LeaderboardEntry extends LeaderboardUser {
  change?: number;
  avatarUrl?: string;
  amount?: number;
  totalAmount?: number;
}

export interface LeaderboardState {
  users: LeaderboardUser[];
  loading: boolean;
  error: string | null;
  filters: LeaderboardFilter;
}

export type SortDirection = 'asc' | 'desc';

export interface SortOptions {
  field: keyof LeaderboardUser;
  direction: SortDirection;
}

// Added missing types from imports
export interface OnChainLeaderboardEntry {
  address: string;
  username: string;
  displayName: string;
  profileImage: string;
  rank: number;
  totalSpent: number;
  signature: string;
  timestamp: number;
}

export interface SolanaTransaction {
  id: string;
  signature: string;
  sender: string;
  recipient?: string;
  receiver?: string; // Add this property for compatibility
  amount: number;
  status: 'confirmed' | 'pending' | 'failed';
  timestamp: string;
  type: 'transfer' | 'spend' | 'deposit' | 'mint' | 'burn' | 'swap' | 'trade';
  blockHeight?: number;
  confirmations?: number;
  memo?: string;
  fee?: number;
}
