
import { TeamType, UserTier } from './user';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: UserTier;
  team?: TeamType;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  spentAmount: number;
  supporters?: number;
  supporting?: number;
  isVIP?: boolean;
  isFounder?: boolean;
  isVerified?: boolean;
}

export interface LeaderboardEntry {
  user: LeaderboardUser;
  position: number;
  previousPosition?: number;
  change?: number;
  score: number;
}

export interface TeamLeaderboard {
  id: string;
  name: string;
  color: TeamType;
  members: number;
  totalContribution: number;
  rank: number;
  previousRank?: number;
  change?: number;
}

export interface LeaderboardFilter {
  timeframe?: 'all' | 'day' | 'week' | 'month' | 'year';
  team?: TeamType;
  tier?: UserTier;
  search?: string;
  limit?: number;
}

export interface LeaderboardState {
  users: LeaderboardUser[];
  teams: TeamLeaderboard[];
  loading: boolean;
  error: string | null;
  filters: LeaderboardFilter;
  timestamp: string;
}
