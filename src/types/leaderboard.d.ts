
import { TeamColor, UserTier } from './user';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: UserTier;
  team?: TeamColor;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  spentAmount?: number;
  amountSpent?: number;
  supporters?: number;
  supporting?: number;
  isVIP?: boolean;
  isFounder?: boolean;
  isVerified?: boolean;
  isProtected?: boolean;
  avatarUrl?: string;
}

export interface LeaderboardFilter {
  timeFrame: 'allTime' | 'thisWeek' | 'thisMonth' | 'today';
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  count: number;
  page: number;
  sortBy?: 'rank' | 'username' | 'totalSpent' | 'team';
  sortDirection?: 'asc' | 'desc';
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  topSpender: {
    username: string;
    amount: number;
  };
  topTeam: {
    name: string;
    members: number;
    contribution: number;
  };
  averageSpent: number;
  medianRank: number;
}
