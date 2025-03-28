
import { UserTeam } from './user';

export interface LeaderboardEntry {
  id: string;
  username: string;
  rank: number;
  totalDeposited?: number;
  currentBalance?: number;
  team: UserTeam;
  profileImage?: string;
  lastDepositDate: string;
  joinDate: string;
  tier: string;
}

export interface LeaderboardState {
  entries: LeaderboardEntry[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: string;
}

export interface LeaderboardFilter {
  timeRange: 'all' | 'week' | 'month' | 'year';
  team: UserTeam | 'all';
  tier: string | 'all';
  sortBy: 'rank' | 'spending' | 'recent';
}

export default LeaderboardEntry;
