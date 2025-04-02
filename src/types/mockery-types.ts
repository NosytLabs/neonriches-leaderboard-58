
// Define the team color options
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';

// Define the user tier options
export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'elite'
  | 'legendary';

// Define the mockery tier options
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal' | 'basic';

// Define the mockery actions
export type MockeryAction = 
  | 'boost'
  | 'shame'
  | 'gift'
  | 'challenge'
  | 'follow'
  | 'unfollow'
  | 'mention'
  | 'comment'
  | 'react'
  | 'mock'
  | 'praise'
  | 'invite'
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'stocks'
  | 'crown'
  | 'jester'
  | 'courtJester'
  | 'smokeBomb'
  | 'silence'
  | 'protection'
  | 'taunt'
  | 'joust'
  | 'duel'
  | 'thumbsDown';

// Define gender options
export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble' | 'none';

// Define the team data interface
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  memberCount: number;
  totalSpent: number;
  rank: number;
  crest: string;
  leaderUsername?: string;
  leaderAvatar?: string;
  members?: number; // Added for compatibility
  logoUrl?: string; // Added for compatibility
  totalContribution?: number; // Added for compatibility
  previousRank?: number; // Added for compatibility
}

// Define the leaderboard user interface
export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  amountSpent?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  joinDate?: string;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
  walletBalance?: number; // Added for compatibility
}

// Define the leaderboard filter interface
export interface LeaderboardFilter {
  team: 'all' | TeamColor;
  tier: 'all' | UserTier;
  timeframe: 'all-time' | 'today' | 'week' | 'month' | 'year';
  search: string;
  sortBy: 'rank' | 'spent' | 'username';
  sortDirection: 'asc' | 'desc';
  limit?: number; // Added for compatibility
}

// Define the mockery event interface
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  sourceUserId: string;
  targetUserId: string;
  timestamp: string;
  message?: string;
  amount?: number;
  visibility: 'public' | 'private' | 'team';
  fromUserId?: string; // Added for compatibility
}

// Define the mocked user interface
export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  userId?: string; // Added for compatibility
}
