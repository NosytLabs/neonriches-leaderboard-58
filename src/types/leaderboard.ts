
import { TeamColor } from './team';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  avatarUrl?: string; // Add for backward compatibility
  tier?: string;
  team?: TeamColor;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  spentAmount?: number;  // For backward compatibility
  amountSpent?: number;  // For backward compatibility
  isVerified?: boolean;
  spendStreak?: number;
  // Add missing properties for dashboard components
  isProtected?: boolean;
  rankChange?: number;
  spendChange?: number;
  joinedAt?: string;     // Add joinedAt as an optional property
}

export interface LeaderboardFilter {
  timeframe?: 'day' | 'week' | 'month' | 'all';
  team?: TeamColor | null;
  limit?: number;
  sort?: string;         // Add sort option
  search?: string;       // Add search option
  tier?: string;         // Add tier filter
}

// Add this interface for PersistentLeaderboard.tsx
export interface TypedLeaderboardFilter extends LeaderboardFilter {
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

// Export types for solanaService
export interface LeaderboardEntry extends LeaderboardUser {}

export interface OnChainLeaderboardEntry {
  publicKey: string;     // Correct property name
  amount: number;
  rank: number;
  username?: string;
  profileImage?: string;
  timestamp?: string;    // Add timestamp
}

export interface SolanaTransaction {
  id?: string;           // Add optional id
  signature?: string;
  slot?: number;
  timestamp: number | string; // Allow string or number
  amount: number;
  sender: string;
  receiver: string;
  status: 'confirmed' | 'pending' | 'failed' | 'completed'; // Add 'completed'
  type: 'spend' | 'deposit' | 'withdrawal' | 'transfer' | 'purchase'; // Add 'purchase'
  transactionHash?: string; // Add missing property
}

// Add SortByOptions for components
export interface SortByOptions {
  value: string;
  label: string;
}
