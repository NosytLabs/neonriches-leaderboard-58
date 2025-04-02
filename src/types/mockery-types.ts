
// Define the available mockery actions
export type MockeryAction = 
  | 'tomato' 
  | 'egg' 
  | 'putridEgg' 
  | 'rotten_egg' 
  | 'crown' 
  | 'thumbs_down' 
  | 'thumbsDown'
  | 'mock' 
  | 'stocks' 
  | 'jester' 
  | 'courtJester' 
  | 'silence' 
  | 'taunt' 
  | 'smokeBomb' 
  | 'protection' 
  | 'shame' 
  | 'challenge' 
  | 'joust' 
  | 'duel'
  | 'royal_decree'
  | 'flame'
  | 'heart'
  | 'skull'
  | 'laugh';

// Define mockery tiers (rarity levels)
export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'royal'
  | 'noble';

// Define the result of a mockery action
export interface MockeryResult {
  success: boolean;
  message: string;
  cost?: number;
  remainingBalance?: number;
  target?: {
    userId: string;
    username: string;
  };
  action?: MockeryAction;
  timestamp?: string;
}

// Define a mockery event that happened
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  tier: MockeryTier;
  cost: number;
  targetId: string;
  targetUsername: string;
  senderId: string;
  senderUsername: string;
  timestamp: string;
  isPublic: boolean;
  message?: string;
}

// Define team colors
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none';

// Define user tiers
export type UserTier = 'basic' | 'premium' | 'pro' | 'noble' | 'royal' | 'legendary';

// Define gender for user profile
export type Gender = 'male' | 'female' | 'other' | 'prefer_not_to_say';

// Define leaderboard filter options
export interface LeaderboardFilter {
  limit: number;
  page?: number;
  team?: string;
  tier?: string;
  timeframe?: 'all' | 'week' | 'month' | 'year' | 'today' | 'all-time';
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  sort?: string; // Added for compatibility
  period?: string; // Added for compatibility
}

// Define leaderboard user item
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  rank: number;
  previousRank: number;
  tier: string;
  team: TeamColor | string;
  totalSpent: number;
  amountSpent: number;
  walletBalance: number;
  spendStreak: number;
  
  // Add missing properties used in components
  isVerified?: boolean;
  isProtected?: boolean;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
}
