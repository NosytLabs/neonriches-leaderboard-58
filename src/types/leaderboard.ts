
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
  amountSpent: number; // Ensure this property is required
  walletBalance: number;
  spendStreak: number;
  isVerified?: boolean;
  isProtected?: boolean;
  joinDate?: string;
  bio?: string;
  // Optional properties
  rankChange?: number;
  spendChange?: number;
}

export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  timeframe: 'year' | 'month' | 'week' | 'all-time' | 'today' | 'all'; // Added 'all' as valid option
  search: string;
  sortBy: 'username' | 'rank' | 'spent' | 'totalSpent'; // Added 'totalSpent' as valid option
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

// Export these interfaces for use throughout the application
export interface LeaderboardConfig {
  showRankChange: boolean;
  showSpendChange: boolean;
  showActions: boolean;
  showTeam: boolean;
  compact: boolean;
}

export interface LeaderboardProps {
  title?: string;
  config?: Partial<LeaderboardConfig>;
  initialFilter?: Partial<LeaderboardFilter>;
  onUserClick?: (userId: string) => void;
  maxItems?: number;
}
