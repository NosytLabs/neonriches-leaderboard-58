
import { TeamColor } from './mockery-types';
import { UserTier } from './user';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  avatarUrl?: string;
  rank: number;
  previousRank: number;
  team: TeamColor;
  tier: UserTier | string;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  spendStreak: number;
  isVerified?: boolean;
  isProtected?: boolean;
  joinDate?: string;
  bio?: string;
}

export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  timeframe: 'year' | 'month' | 'week' | 'all-time' | 'today';
  search: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  limit: number;
}

export interface LeaderboardResponse {
  items: LeaderboardUser[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface UseLeaderboardResult {
  loading: boolean;
  error: string | null;
  data: LeaderboardUser[];
  total: number;
  fetchLeaderboard: (filter: LeaderboardFilter) => Promise<void>;
  refetch: () => Promise<void>;
  page: number;
  setPage: (page: number) => void;
  hasMore: boolean;
}
