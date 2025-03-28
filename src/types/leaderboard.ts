
import { UserTeam } from './user';

export interface LeaderboardEntry {
  id: string;
  username: string;
  displayName?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  profileImage?: string;
  team?: UserTeam;
  joinedAt: string;
  lastActive?: string;
  spendStreak?: number;
  isMocked?: boolean;
  mockedUntil?: string;
  isProtected?: boolean;
  protectedUntil?: string;
  badges?: string[];
  tier?: string;
}

export interface TeamStanding {
  team: UserTeam;
  totalSpent: number;
  memberCount: number;
  rank: number;
  previousRank?: number;
}

export interface SpendingSummary {
  totalSpent: number;
  weeklySpent: number;
  monthlySpent: number;
  dailyAverage: number;
  allTimeHighest: number;
  allTimeHighestDate: string;
}

export interface RankChangeData {
  userId: string;
  username: string;
  previousRank: number;
  currentRank: number;
  rankChange: number;
  timestamp: string;
}

export interface LeaderboardFilters {
  team?: UserTeam | null;
  timeframe?: 'all' | 'week' | 'month' | 'day';
  search?: string;
  limit?: number;
}
