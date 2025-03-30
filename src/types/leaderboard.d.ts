
import { TeamType, UserTier } from './user';

export interface LeaderboardEntry {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  previousRank?: number;
  team?: TeamType;
  tier?: UserTier;
  totalSpent?: number;
  amountSpent?: number;
  spentAmount?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
  walletBalance?: number;
  joinedAt?: string;
}

// Add LeaderboardUser as an alias for backward compatibility
export type LeaderboardUser = LeaderboardEntry;
