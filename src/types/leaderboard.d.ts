
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
  walletBalance?: number;
  totalSpent?: number;
  spentAmount?: number;
  amountSpent?: number;  // For backward compatibility
  avatarUrl?: string;    // For backward compatibility
  isVIP?: boolean;
  isVerified?: boolean;
  isProtected?: boolean;
  isFounder?: boolean;
  spendStreak?: number;
  joinedAt?: string;
  lastActive?: string;
  createdAt?: string;
}

export interface LeaderboardEntry {
  userId: string;
  rank: number;
  amount: number;
  username: string;
  timestamp?: string;
}

export interface OnChainLeaderboardEntry {
  pubkey: string;
  amount: number;
  timestamp: string;
  username?: string;
}

export interface LeaderboardFilter {
  timespan?: string;
  team?: string;
  tier?: string;
  timeFrame?: string;  // For backward compatibility
  sortBy?: string;     // For backward compatibility
  sortDirection?: 'asc' | 'desc'; // For backward compatibility
}

export interface SolanaTransaction {
  id: string;
  timestamp: string | Date;
  amount: number;
  sender: string;
  receiver: string;
  transactionHash: string;
  status: 'pending' | 'completed' | 'failed';
  type: string;
}
