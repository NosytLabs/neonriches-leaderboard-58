
import { TeamColor } from './team';

// Define unified MockeryAction type
export type MockeryAction =
  | 'tomato'
  | 'egg'
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'shame'
  | 'protection'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'putridEggs'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'thumbsDown'
  | 'carrot'
  | 'target'
  | 'fish'
  | 'confetti';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'
  | 'standard'
  | 'premium'
  | 'basic';

export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'pro' 
  | 'royal' 
  | 'legendary';

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

export interface LeaderboardUser {
  id: string;
  userId?: string; // Added for compatibility
  username: string;
  displayName: string;
  profileImage: string;
  rank: number;
  previousRank: number;
  tier: UserTier | string;
  totalSpent: number;
  amountSpent?: number;
  spentAmount?: number; // Added for compatibility
  team: TeamColor;
  walletBalance?: number;
  rankChange?: number; // Added for compatibility
  spendChange?: number; // Added for compatibility
  spendStreak?: number; // Added for compatibility
  isVerified?: boolean; // Added for compatibility
  isProtected?: boolean; // Added for compatibility
}

export interface LeaderboardFilter {
  timeframe: string;
  team: string;
  limit: number;
  tier?: string; // Added for compatibility
  search?: string; // Added for compatibility
  sortBy?: string; // Added for compatibility
  sortDirection?: 'asc' | 'desc'; // Added for compatibility
}

// Mock data types
export interface MockedUser {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: UserTier | string;
  team: TeamColor;
  rank: number;
  action?: MockeryAction; // Added for compatibility
  userId?: string; // Added for compatibility
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  fromUser: MockedUser;
  toUser: MockedUser;
  timestamp: string;
  action?: MockeryAction; // Added for compatibility
  toUserId?: string; // Added for compatibility
  targetId?: string; // Added for compatibility
}

// Export type to avoid breaking existing code
export type { TeamColor, UserTier, LeaderboardUser, LeaderboardFilter, MockedUser, MockeryEvent };
