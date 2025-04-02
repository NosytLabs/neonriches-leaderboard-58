
import { TeamColor, UserTier } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage: string;
  avatarUrl?: string;
  totalSpent: number;
  amountSpent: number;
  rank: number;
  previousRank: number;
  team: TeamColor | string;
  tier: UserTier | string;
  spendStreak?: number;
  walletBalance?: number;
  rankChange?: number;
  spendChange?: number;
  isProtected?: boolean;
  isVerified?: boolean;
}

export interface LeaderboardFilter {
  timeframe: 'all' | 'week' | 'month' | 'year' | 'today' | 'all-time';
  team: TeamColor | 'all' | string;
  tier: string;
  sortDirection: 'asc' | 'desc';
  sortBy: 'totalSpent' | 'joinDate' | 'username' | 'rank' | 'spendStreak';
  limit?: number;
  page?: number;
}

export interface LeaderboardProps {
  users: LeaderboardUser[];
  filter: LeaderboardFilter;
  onFilterChange: (filter: Partial<LeaderboardFilter>) => void;
  onProfileClick?: (userId: string, username: string) => void;
  onShameUser?: (user: LeaderboardUser) => void;
  currentUserId?: string;
}
