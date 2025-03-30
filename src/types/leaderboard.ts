
import { UserProfile, UserTeam } from './user';

export interface LeaderboardFilter {
  timespan: string;   // 'day', 'week', 'month', 'year', 'all'
  timeFrame?: string; // Same as timespan but allows backward compatibility
  sortBy: string;     // 'amountSpent', 'rank', 'joinDate', etc.
  sortDirection: 'asc' | 'desc';
  team?: UserTeam | string;
  limit?: number;
  search?: string;
}

export interface LeaderboardUser extends UserProfile {
  rank: number;
  amountSpent: number;
  previousRank?: number;
  rankDelta?: number;
  team: UserTeam;
}

// For backwards compatibility
export type LeaderboardEntry = LeaderboardUser;
