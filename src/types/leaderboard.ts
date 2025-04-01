
import { TeamColor } from './team';
import { UserTier } from './tier';

export interface LeaderboardFilter {
  timeframe?: 'day' | 'week' | 'month' | 'all';
  team?: TeamColor | string;
  tier?: UserTier | string;
  limit?: number;
}

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  totalSpent: number;
  amountSpent?: number;
  rank: number;
  previousRank: number;
  team: TeamColor;
  tier: UserTier;
  spendStreak: number;
  walletBalance: number;
  isVerified: boolean;
  isProtected?: boolean;
  joinDate?: string;
  joinedDate?: string;
}

export interface LeaderboardEntry extends LeaderboardUser {
  spendChange?: number;
  rankChange?: number;
}

export interface TeamLeaderboardData {
  teamId: string;
  teamColor: TeamColor;
  teamName: string;
  totalSpent: number;
  memberCount: number;
  averageSpent: number;
  rank: number;
  previousRank: number;
}
