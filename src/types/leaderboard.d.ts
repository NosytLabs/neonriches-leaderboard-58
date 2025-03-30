
import { UserTeam } from './user';

export interface LeaderboardEntry {
  id: string;
  userId: string;
  rank: number;
  previousRank: number;
  amountSpent: number;
  timestamp: string;
}

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team?: UserTeam;
  tier?: string;
  previousRank?: number;
  joinedAt?: string;
  joinDate?: string;
  userId?: string;
}

export interface LeaderboardSnapshot {
  id: string;
  createdAt: string;
  entries: LeaderboardEntry[];
}
