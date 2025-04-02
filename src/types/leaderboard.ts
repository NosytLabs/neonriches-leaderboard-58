
import { TeamColor } from './team';
import { UserTier } from './user';

export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage: string;
  tier: string;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  isVIP?: boolean;
  spendStreak?: number;
  joinDate?: string;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
  walletBalance?: number; // Added for compatibility
}

export interface LeaderboardFilter {
  team?: string | 'all';
  tier?: string | 'all';
  timeframe?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all';
  search?: string;
  sortBy?: 'rank' | 'spent' | 'username';
  sortDirection?: 'asc' | 'desc';
  limit?: number; // Added for compatibility
}

// Alias for compatibility - some files use TypedLeaderboardFilter
export type TypedLeaderboardFilter = LeaderboardFilter;

export interface LeaderboardConfig {
  title?: string;
  maxItems?: number;
  showTeam?: boolean;
  showRank?: boolean;
  showSpent?: boolean;
  showChangeIndicators?: boolean;
  allowFiltering?: boolean;
}

export interface LeaderboardProps {
  users?: LeaderboardUser[];
  config?: LeaderboardConfig;
  loading?: boolean;
  filter?: LeaderboardFilter;
  onFilterChange?: (filter: LeaderboardFilter) => void;
  onUserClick?: (userId: string) => void;
}

// Add these types for compatibility with solanaService.ts and treasuryService.ts
export interface OnChainLeaderboardEntry {
  publicKey: string;
  owner: string;
  rank: number;
  spent: number;
  username: string;
  team: string;
  amount?: number; // Added for solanaService.ts compatibility
}

export interface SolanaTransaction {
  signature: string;
  timestamp: number;
  slot: number;
  success: boolean;
  amount: number;
  from: string;
  to: string;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'spend';
  memo?: string;
  usdValue?: number;
  id?: string; // Added for solanaService.ts compatibility
  sender?: string; // Added for treasuryService.ts compatibility
  receiver?: string; // Added for treasuryService.ts compatibility
  recipient?: string; // Added for treasuryService.ts compatibility
}
