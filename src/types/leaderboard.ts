
import { TeamColor } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string; // Required field
  profileImage?: string;
  avatarUrl?: string; // Some components use this alternative
  tier: string;
  team: TeamColor | string;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance?: number;
  isVerified?: boolean;
  spendStreak?: number;
  isProtected?: boolean;
  rankChange?: number;
  spendChange?: number;
  joinDate?: string;
}

export interface LeaderboardFilter {
  timeframe: 'day' | 'week' | 'month' | 'all' | 'year' | 'all-time' | 'today';
  team?: TeamColor | 'all';
  limit?: number;
  page?: number;
  tier?: string;
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface LeaderboardConfig {
  title?: string;
  showFilter?: boolean;
  showSearch?: boolean;
  showTeamFilter?: boolean;
  variant?: 'default' | 'compact' | 'royal' | 'minimal';
  maxItems?: number;
  hideRankChange?: boolean;
  highlightUser?: boolean;
  currentUserId?: string;
}

export interface LeaderboardProps {
  users: LeaderboardUser[];
  filter?: LeaderboardFilter;
  onFilterChange?: (filter: Partial<LeaderboardFilter>) => void;
  config?: LeaderboardConfig;
  isLoading?: boolean;
  showActions?: boolean;
  onUserClick?: (userId: string) => void;
  onShameUser?: (user: LeaderboardUser) => void;
}
