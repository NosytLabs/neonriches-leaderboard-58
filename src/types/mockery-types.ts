
import { TeamColor, UserTier } from './user-consolidated';

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'shame'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockedUser {
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  spendStreak: number;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  sourceUserId: string;
  targetUserId: string;
  timestamp: string;
  message?: string;
  expiresAt?: string;
  isActive: boolean;
}

export interface LeaderboardUser {
  userId: string;
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  walletBalance: number;
  isVerified: boolean;
  isProtected: boolean;
  spendStreak: number;
  spendChange?: number;
  rankChange?: number;
}

export interface LeaderboardFilter {
  userId?: string;
  search?: string;
  timeframe?: 'day' | 'week' | 'month' | 'all';
  team?: TeamColor;
  limit?: number;
  tier?: UserTier;
}

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  totalContribution: number;
  members: number;
  memberIds: string[];
  rank: number;
  previousRank: number;
  description: string;
  logoUrl: string;
}
