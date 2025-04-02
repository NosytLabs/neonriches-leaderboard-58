
import { TeamColor } from './team';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  avatarUrl?: string;  // For backward compatibility
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent: number;
  tier: string;
  team: TeamColor | string;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  rankChange?: number;
  spendChange?: number;
  walletBalance?: number;
}

export interface LeaderboardFilter {
  team: string;
  tier: string;
  timeframe: string;
  search: string;
  sortBy: string;
  sortDirection: string;
  limit: number;
  sort?: string; // For compatibility with leaderboardService
}

export interface LeaderboardConfig {
  filter: LeaderboardFilter;
  currentUserId?: string;
  limit?: number;
  includeUser?: boolean;
}

export interface LeaderboardProps {
  filter?: Partial<LeaderboardFilter>;
  limit?: number;
  showShameButton?: boolean;
  showRankChange?: boolean;
  showSpendChange?: boolean;
  onUserClick?: (userId: string) => void;
  onUserShamed?: (userId: string) => void;
}

export interface LeaderboardResponse {
  users: LeaderboardUser[];
  total: number;
  currentUserRank?: number;
}

export interface UseLeaderboardResult {
  leaderboard: LeaderboardUser[];
  loading: boolean;
  error: Error | null;
  refreshLeaderboard: () => Promise<void>;
  userRank?: number;
}
