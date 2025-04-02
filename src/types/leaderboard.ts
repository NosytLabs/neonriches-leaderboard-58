
import { TeamColor } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  totalSpent: number;
  amountSpent: number;
  rank: number;
  previousRank: number;
  team: TeamColor | string;
  tier: string;
  spendStreak: number;
  walletBalance: number;
  rankChange?: number;
  spendChange?: number;
  isProtected?: boolean;
  isVerified?: boolean;
  avatarUrl?: string;
}

export interface LeaderboardFilter {
  timeframe: 'all' | 'week' | 'month' | 'year';
  team: string;
  tier: string;
  sortDirection: 'asc' | 'desc';
  sortBy: string;
  limit: number;
  page: number;
  sort?: string;
  search?: string;
}

export interface LeaderboardProps {
  users: LeaderboardUser[];
  isLoading?: boolean;
  showTeams?: boolean;
  showTiers?: boolean;
  showRankChange?: boolean;
  onUserClick?: (userId: string) => void;
  onShameClick?: (userId: string) => void;
}
