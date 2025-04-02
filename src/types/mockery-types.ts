
// Define the base types for the mockery system
export type MockeryAction = 'tomato' | 'egg' | 'putridEgg' | 'crown' | 'thumbsDown' | 'mock' | 'stocks' | 'jester' | 'taunt';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';
export type UserTier = 'free' | 'basic' | 'premium' | 'royal' | 'legendary' | 'founder';

// Define the interfaces
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  members: number;
  totalSpent: number;
  rank: number;
  previousRank?: number;
  logo?: string;
  description?: string;
  leaderUsername?: string;
  createdAt: string;
}

export interface MockeryEvent {
  id: string;
  targetUserId: string;
  actionType: MockeryAction;
  actionTier: MockeryTier;
  initiatorUserId: string;
  timestamp: string;
  expiresAt: string;
  message?: string;
  isPublic: boolean;
  isActive: boolean;
}

export interface MockeryUser {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  totalMockeriesReceived: number;
  totalMockeriesSent: number;
  currentMockeries: MockeryEvent[];
  lastMockedAt?: string;
  isProtected: boolean;
  protectionExpiresAt?: string;
}

export interface LeaderboardUser {
  id?: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  team?: string | TeamColor;
  tier?: string;
  rank?: number;
  previousRank?: number;
  totalSpent?: number;
  amountSpent?: number;
  joinedDate?: string;
  isVerified?: boolean;
}

export interface LeaderboardFilter {
  timeframe: 'all' | 'week' | 'month' | 'year';
  team: string | TeamColor | 'all';
  tier?: string | 'all';
  search?: string;
  sortBy?: 'totalSpent' | 'rank' | 'joinDate';
  sortDirection?: 'asc' | 'desc';
}

export interface MockeryResult {
  success: boolean;
  message: string;
  cost: number;
  mockeryId?: string;
  expiresAt?: string;
  actionType?: MockeryAction;
}

// Use 'export type' for re-exporting types to avoid conflicts
export type {
  MockeryAction,
  MockeryTier,
  TeamColor,
  Gender,
  UserTier,
  TeamData,
  MockeryEvent,
  MockeryUser,
  LeaderboardUser,
  LeaderboardFilter,
  MockeryResult
};
