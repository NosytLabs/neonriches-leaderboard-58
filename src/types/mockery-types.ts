
/**
 * Core mockery types for the application
 */

// User & Team related types
export type UserTier = 'free' | 'basic' | 'premium' | 'elite' | 'royal' | 'gold' | 'silver' | 'bronze' | 'pro';

export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none' 
  | 'neutral'
  | 'silver'
  | 'bronze'
  | 'crimson';

// Legacy type alias
export type TeamType = TeamColor;

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  logoUrl?: string;
  logo?: string;
  members?: number;
  memberCount?: number;
  totalSpent?: number;
  totalContribution?: number;
  rank?: number;
  previousRank?: number;
  description?: string;
  bannerImage?: string;
}

// Mockery types
export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'tomatoes'
  | 'eggs'
  | 'crown'
  | 'stocks'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'confetti';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'silver'
  | 'bronze'
  | 'standard';

export interface MockedUser {
  userId: string;
  username: string;
  profileImage: string;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  displayName?: string;
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  timestamp: string;
  message?: string;
  fromUserId?: string;
}

// Leaderboard Types
export interface LeaderboardFilter {
  search?: string;
  team: 'all' | TeamColor;
  tier: 'all' | UserTier;
  timeframe: 'all-time' | 'today' | 'week' | 'month' | 'year';
  sortBy: 'rank' | 'spent' | 'username';
  limit?: number;
  page?: number;
}

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank?: number;
  walletBalance?: number;
  totalSpent: number;
  amountSpent?: number;
  spendStreak?: number;
  isVerified?: boolean;
  isProtected: boolean;
  joinDate?: string;
}

// SoundTypes
export type SoundType = 
  | 'success' 
  | 'error' 
  | 'notification' 
  | 'purchase' 
  | 'achievement' 
  | 'deposit' 
  | 'withdrawal' 
  | 'rank_up' 
  | 'level_up' 
  | 'coin' 
  | 'shame' 
  | 'mockery' 
  | 'boost' 
  | 'throne' 
  | 'royal' 
  | 'click'
  | 'message'
  | 'reward'
  | 'chime'
  | 'fanfare'
  | 'coinDrop';

export interface SoundOptions {
  volume?: number;
  interrupt?: boolean;
  loop?: boolean;
}

// User Profile 
export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  totalSpent?: number;
  amountSpent?: number;
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  team?: TeamColor;
  tier?: UserTier;
  joinedDate?: string;
  joinDate?: string;
  badges?: string[];
  cosmetics?: Record<string, string[]>;
  settings?: UserSettings;
  spendStreak?: number;
  isVerified?: boolean;
  isProtected?: boolean;
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system';
  notifications: boolean;
  sound: boolean;
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  emailNotifications: boolean;
}

// OnChain related types 
export interface SolanaTransaction {
  id: string;
  signature: string;
  timestamp: string;
  amount: string;
  sender: string;
  status: string;
  type: string;
  receiver?: string;
  slot?: number;
}

export interface OnChainLeaderboardEntry {
  userId: string;
  publicKey: string;
  totalSpent: string;
  signature: string;
  timestamp: string;
}

// Add Gender for user-consolidated
export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';
