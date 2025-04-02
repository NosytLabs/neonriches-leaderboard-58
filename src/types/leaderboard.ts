
import { TeamColor } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: string;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  isVerified?: boolean;
  spendStreak?: number;
  joinDate?: string;
  // Add missing properties that are being used in components
  avatarUrl?: string;
  isProtected?: boolean;
  rankChange?: number;
  spendChange?: number;
}

export interface LeaderboardFilter {
  timeframe: 'day' | 'week' | 'month' | 'year' | 'all-time' | 'today' | 'all';
  team: string;
  tier?: string;
  search?: string;
  sortBy?: 'rank' | 'amountSpent' | 'username' | 'spendStreak' | 'spent';
  sortDirection?: 'asc' | 'desc';
  limit?: number;
  page?: number;
}

export interface LeaderboardConfig {
  maxItems?: number;
  variant?: 'default' | 'compact' | 'extended';
  showTeam?: boolean;
  showTier?: boolean;
  showRank?: boolean;
  showAmountSpent?: boolean;
  showSpendStreak?: boolean;
  highlightCurrentUser?: boolean;
}

export interface LeaderboardProps {
  users: LeaderboardUser[];
  filter?: LeaderboardFilter;
  onFilterChange?: (filter: Partial<LeaderboardFilter>) => void;
  onUserClick?: (userId: string) => void;
  config?: LeaderboardConfig;
  currentUserId?: string;
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
  items?: LeaderboardUser[]; // Add for compatibility
}

export interface UseLeaderboardResult {
  leaderboardUsers: LeaderboardUser[];
  loading: boolean;
  error: Error | null;
  filter: LeaderboardFilter;
  setFilter: (newFilter: Partial<LeaderboardFilter>) => void;
  refreshLeaderboard: () => Promise<void>;
  hasMore: boolean;
  loadMore: () => Promise<void>;
}
