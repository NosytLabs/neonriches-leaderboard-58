
import { TeamType } from './team';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier: string;
  team: TeamType;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  totalSpent?: number;
  joinDate?: string;
  joinedAt?: string;
  isVIP?: boolean;
  avatarUrl?: string;
  totalDeposited?: number;
  isVerified?: boolean;
  walletBalance?: number;
}

export type LeaderboardSortOption = 
  | "rank"
  | "amountSpent"
  | "totalSpent"
  | "joinDate"
  | "username";

export type LeaderboardSortDirection = "asc" | "desc";

export type LeaderboardTimeFrame = 
  | "all" 
  | "today" 
  | "week" 
  | "month" 
  | "year";

export interface LeaderboardFilter {
  timeFrame: string;
  timespan: string;
  sortBy: string;
  sortDirection: LeaderboardSortDirection;
  team?: TeamType;
}

export type LeaderboardEntry = LeaderboardUser;
