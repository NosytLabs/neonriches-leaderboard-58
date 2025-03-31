
import { TeamColor, UserTier } from './team';

/**
 * Leaderboard user interface
 */
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: UserTier | string;
  team: TeamColor | string;
  rank: number;
  previousRank: number;
  walletBalance: number;
  totalSpent: number;
  isVerified: boolean;
  isProtected: boolean;
  avatarUrl?: string;
  spendStreak?: number;
  joined?: string;
  changePercent?: number;
  badges?: string[];
  spentAmount?: number;
}

export interface LeaderboardFilter {
  sortBy: "rank" | "totalSpent" | "spent" | "username" | "joined";
  sortDirection: "asc" | "desc";
  team: "all" | TeamColor;
  tier: "all" | UserTier;
  search: string;
  limit?: number;
  timeFrame?: string;
}

export type LeaderboardSortOption = {
  value: string;
  label: string;
  timeEnabled?: boolean;
};

export type LeaderboardTimeFrame = {
  value: string;
  label: string;
};
