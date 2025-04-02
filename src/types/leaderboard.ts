
import { TeamColor, UserTier } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  avatarUrl?: string; // Added for compatibility
  tier: UserTier | string;
  team: TeamColor | string;
  rank: number;
  previousRank: number;
  totalSpent: number;
  walletBalance: number;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  // Added properties to fix errors
  rankChange?: number;
  spendChange?: number;
  amountSpent?: number;
  spentAmount?: number;
  joinDate?: string;
  createdAt?: string;
}

export interface LeaderboardFilter {
  team: string | null;
  tier: UserTier | 'all';
  timeframe: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all'; // Added 'all' for compatibility
  sortBy: 'rank' | 'spent' | 'username';
  // Added to fix errors
  sortDirection?: 'asc' | 'desc';
  search?: string;
  limit?: number;
  page?: number;
}

export interface LeaderboardConfig {
  title: string;
  filters: LeaderboardFilter;
  showTeam: boolean;
  compact: boolean;
  limit: number;
}

export interface LeaderboardProps {
  config?: Partial<LeaderboardConfig>;
  onUserClick?: (userId: string, username: string) => void;
  onFilterChange?: (filters: LeaderboardFilter) => void;
  className?: string;
}

// TypedLeaderboardFilter should extend but allow string sortBy
export interface TypedLeaderboardFilter extends Omit<LeaderboardFilter, 'sortBy'> {
  sortBy: string; // Allow any string for backward compatibility
}
