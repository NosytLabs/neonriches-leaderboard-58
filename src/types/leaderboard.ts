
import { TeamColor } from './team';
import { UserTier } from './tier';

/**
 * LeaderboardUser interface
 */
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  spendStreak?: number;
  walletBalance?: number;
  previousRank?: number;
  joinDate?: string;
  isVerified?: boolean;
  // Add missing properties used in components
  rankChange?: number;
  spendChange?: number;
  isProtected?: boolean;
  avatarUrl?: string;
}

/**
 * LeaderboardFilter type
 */
export type LeaderboardFilter = 'all' | 'day' | 'week' | 'month' | 'team';

/**
 * OnChainLeaderboardEntry type
 */
export interface OnChainLeaderboardEntry {
  address: string;
  displayName: string;
  rank: number;
  totalSpent: number;
  // Add missing properties
  pubkey?: string;
}

/**
 * SolanaTransaction type
 */
export interface SolanaTransaction {
  id: string;
  userId: string;
  amount: number;
  timestamp: string;
  status: 'confirmed' | 'pending' | 'failed';
  type: 'spend' | 'deposit' | 'withdrawal' | 'transfer';
  signature?: string;
  recipient?: string;
}

// Alias for backward compatibility
export type TypedLeaderboardFilter = LeaderboardFilter;
