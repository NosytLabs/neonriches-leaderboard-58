
import { TeamColor, UserTier } from './mockery-types';

export interface LeaderboardUser {
  id: string;
  userId: string; // Required property to match constraints
  username: string;
  displayName?: string;
  profileImage: string;
  team: string;
  tier: string;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  isVerified?: boolean;
  isProtected: boolean; // Required property to match constraints
  walletBalance?: number;
  spendStreak?: number;
  // Additional fields needed across the codebase
  joinedDate?: string;
  joinDate?: string;
  avatarUrl?: string;
  amountSpent?: number; // Added to support various code paths
  spendChange?: number; // Added to support various code paths
}

export interface LeaderboardState {
  users: LeaderboardUser[];
  loading: boolean;
  error: string | null;
  filter: string;
  sortBy: string;
  page: number;
  itemsPerPage: number;
}

export interface LeaderboardStats {
  totalUsers: number;
  totalSpent: number;
  topSpender: {
    username: string;
    amount: number;
  };
  averageSpent: number;
  recentActivity: {
    username: string;
    action: string;
    amount: number;
    timestamp: string;
  }[];
}
