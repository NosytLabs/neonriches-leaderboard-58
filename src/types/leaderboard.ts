
import { TeamColor } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage: string;
  tier: string;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  joinDate?: string;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
}

export type LeaderboardFilter = 
  | 'all'
  | 'team-red'
  | 'team-blue'
  | 'team-green'
  | 'team-gold'
  | 'team-purple'
  | 'friends'
  | 'following'
  | 'followers'
  | 'vip'
  | 'new';

export interface LeaderboardConfig {
  timeframe?: 'daily' | 'weekly' | 'monthly' | 'all-time';
  filter?: LeaderboardFilter;
  limit?: number;
  includeProtected?: boolean;
  includeTeams?: boolean;
}

export interface LeaderboardProps {
  config?: LeaderboardConfig;
  className?: string;
  showHeader?: boolean;
  showFilters?: boolean;
  showTimeframe?: boolean;
  showSearch?: boolean;
  initialFilter?: LeaderboardFilter;
  initialTimeframe?: 'daily' | 'weekly' | 'monthly' | 'all-time';
}
