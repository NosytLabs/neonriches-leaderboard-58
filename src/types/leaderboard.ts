
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
  sort?: string;  // Added for compatibility with leaderboardService
  period?: string; // Added for compatibility with Leaderboard page
  search?: string; // Added for compatibility with useLeaderboard
}

export interface LeaderboardConfig {
  title: string;
  description?: string;
  showRank?: boolean;
  showAvatar?: boolean;
  showTeam?: boolean;
  showSpending?: boolean;
  showChange?: boolean;
  compact?: boolean;
  limit?: number;
  animated?: boolean;
  filter?: LeaderboardFilter;
}

export interface LeaderboardProps {
  users: LeaderboardUser[];
  filter: LeaderboardFilter;
  onFilterChange: (filter: Partial<LeaderboardFilter>) => void;
  onProfileClick?: (userId: string, username: string) => void;
  onShameUser?: (user: LeaderboardUser) => void;
  currentUserId?: string;
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  totalUsers: number;
  currentPage: number;
  totalPages: number;
  filter: LeaderboardFilter;
}

export interface UseLeaderboardResult {
  users: LeaderboardUser[];
  isLoading: boolean;
  error: Error | null;
  filter: LeaderboardFilter;
  setFilter: (filter: Partial<LeaderboardFilter>) => void;
  refetch: () => void;
  totalUsers: number;
  currentPage: number;
  totalPages: number;
}
