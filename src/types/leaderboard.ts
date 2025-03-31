
import { TeamColor, UserTier } from './user';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  team?: TeamColor;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  spentAmount?: number; // Adding this for compatibility
  joinDate?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  walletBalance?: number;
  spendStreak?: number;
  lastActive?: string;
  activeTitle?: string;
  isVIP?: boolean;
  isFounder?: boolean;
  supporters?: number;
  supporting?: number;
}

export interface LeaderboardFilter {
  team: 'all' | TeamColor;
  tier: 'all' | UserTier;
  search: string;
  sortBy?: 'username' | 'rank' | 'spent' | 'totalSpent' | 'joined';
  sortDirection?: 'asc' | 'desc';
  limit?: number; // Adding this for compatibility
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: number;
  username?: string; // Adding this for compatibility
  publicKey?: string;
  amountSpent?: number;
  totalDeposited?: number;
  rank?: number; 
  joinDate?: number;
  userId?: string;
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  averageSpent: number;
  highestIndividualSpent: number;
  usersSpendingLast24h: number;
  totalSpentLast24h: number;
}
