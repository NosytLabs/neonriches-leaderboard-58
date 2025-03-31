
import { TeamColor, UserTier } from './user';

export interface LeaderboardEntry {
  id: string;
  username: string;
  rank: number;
  totalSpent: number;
  team?: TeamColor;
  tier?: UserTier;
}

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  team?: TeamColor;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  spentAmount?: number;
  supporters?: number;
  supporting?: number;
  isVIP?: boolean;
  isFounder?: boolean;
  isVerified?: boolean;
  avatarUrl?: string;
  userId?: string;
  spendStreak?: number;
  isProtected?: boolean;
}

export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  sortBy: 'rank' | 'totalSpent' | 'username';
  sortDirection: 'asc' | 'desc';
  query: string;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: number;
  username?: string;
}

export interface SolanaTransaction {
  id: string;
  sender: string;
  receiver: string;
  amount: number;
  timestamp: number;
  transactionHash: string;
  status: 'pending' | 'confirmed' | 'failed';
}
