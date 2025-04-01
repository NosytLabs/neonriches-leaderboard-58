
// Remove duplicate exports if they exist
import { TeamColor } from './team';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
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
}

export interface LeaderboardFilter {
  timeframe?: 'day' | 'week' | 'month' | 'all';
  team?: TeamColor | null;
  limit?: number;
}

// Add these types for solanaService
export interface LeaderboardEntry extends LeaderboardUser {}

export interface OnChainLeaderboardEntry {
  publicKey: string;
  amountSpent: number;
  rank: number;
  username?: string;
  profileImage?: string;
}

export interface SolanaTransaction {
  signature: string;
  slot: number;
  timestamp: number;
  amount: number;
  sender: string;
  receiver: string;
  status: 'confirmed' | 'pending' | 'failed';
  type: 'spend' | 'deposit' | 'withdrawal' | 'transfer';
}
