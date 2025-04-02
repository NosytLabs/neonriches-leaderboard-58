
import { TeamColor } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string;  // Make this required to match mockery-types version
  username: string;
  displayName?: string;
  profileImage: string;
  avatarUrl?: string; // Add avatarUrl as an optional property for backwards compatibility
  totalSpent: number;
  rank: number;
  team: TeamColor;
  tier: string;
  spendStreak: number;
  walletBalance?: number;
  previousRank: number;
  joinDate?: string;
  isVerified?: boolean;
  amountSpent?: number; // Add spentAmount as an alias
  spendAmount?: number; // Add another variant for compatibility
  spentAmount?: number; // Add another variant for compatibility 
  spendChange?: number;
  rankChange?: number;
  isProtected?: boolean;
}

export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: string;
  timeframe: string;
  search: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  limit: number;  // Make this required
}

export interface LeaderboardConfig {
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showChange: boolean;
  interactive: boolean;
  refreshInterval?: number;
  maxItems?: number;
  title?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  emptyMessage?: string;
}

export interface LeaderboardProps {
  users?: LeaderboardUser[];
  loading?: boolean;
  filter?: LeaderboardFilter;
  config?: LeaderboardConfig;
  onUserClick?: (user: LeaderboardUser) => void;
  onFilterChange?: (filter: LeaderboardFilter) => void;
  emptyComponent?: React.ReactNode;
  className?: string;
}
