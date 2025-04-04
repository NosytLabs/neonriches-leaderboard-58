
// Team colors available in the system
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'none' | 'purple' | 'silver' | 'bronze' | 'crimson' | 'neutral';

// User tier levels
export type UserTier = 
  | 'basic' 
  | 'bronze' 
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'diamond' 
  | 'royal'
  | 'free'
  | 'premium'
  | 'founder';

// Gender options for user profiles
export type Gender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';

// Mockery action types
export type MockeryAction = 
  | 'mock'
  | 'thumbsDown'
  | 'tomato'
  | 'shame'
  | 'rotten_tomato' 
  | 'royal_decree'
  | 'public_mockery'
  | 'challenge'
  | 'joust'
  | 'duel'
  // Extended action types to match implementations
  | 'egg'
  | 'putridEgg'
  | 'rotten_egg'
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'courtJester'
  | 'silence'
  | 'taunt'
  | 'smokeBomb'
  | 'protection'
  | 'flame'
  | 'heart'
  | 'skull'
  | 'laugh'
  | 'thumbs_down';

// Mockery result types
export interface MockeryResult {
  success: boolean;
  message: string;
  cost?: number;
  effect?: string;
  targetId?: string;
  actionType?: MockeryAction;
  error?: string;
}

// Mockery tier system
export type MockeryTier = 
  | 'basic' 
  | 'advanced' 
  | 'royal'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

// Mockery event types
export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  source: string;
  target: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
}

// Leaderboard user interface
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  team?: TeamColor;
  tier?: UserTier;
  spendingHistory?: number[];
  userId?: string;
  totalSpent?: number;
  spendStreak?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  rankChange?: number;
}

// Filter options for leaderboard
export type LeaderboardFilter = 
  | 'all'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'team-red'
  | 'team-blue'
  | 'team-green';

// Leaderboard search and filter options
export interface LeaderboardOptions {
  filter?: LeaderboardFilter;
  search?: string;
  team?: TeamColor | null;
  timeframe?: string;
  tier?: string;
  page?: number;
}

// Mock user for mockery operations
export interface MockeryUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  team?: TeamColor;
  tier?: UserTier;
  immunityPoints?: number;
}
