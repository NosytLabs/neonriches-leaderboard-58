
// Define the basic types
export type MockeryAction = 
  | 'tomato' 
  | 'egg' 
  | 'putridEgg'
  | 'crown'
  | 'shame'
  | 'thumbsDown'
  | 'mock'
  | 'stocks'
  | 'jester'
  | 'courtJester'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'silence'
  | 'taunt'
  | 'smokeBomb'
  | 'protection'
  | 'royal_decree'
  | 'flame'
  | 'heart'
  | 'skull'
  | 'thumbs_down'
  | 'rotten_egg';

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
  | 'gold';

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

export type Gender = 
  | 'male' 
  | 'female' 
  | 'non-binary' 
  | 'other' 
  | 'prefer-not-to-say' 
  | 'king' 
  | 'queen' 
  | 'jester' 
  | 'noble';

// Define more complex types
export interface TeamData {
  name: string;
  color: string;
  description: string;
  memberCount?: number;
  teamId?: string;
  motto?: string;
  ranking?: number;
  benefits?: string[];
  icon?: string;
  banner?: string;
}

export interface MockeryUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  team?: TeamColor;
  tier?: UserTier;
  spendStreak?: number;
  walletBalance?: number;
  mockeryStats?: {
    mockedCount: number;
    beenMockedCount: number;
    lastMockedAt?: string;
    lastMockedBy?: string;
    favoriteAction?: MockeryAction;
  };
}

export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  targetId: string;
  initiatorId: string;
  timestamp: string;
  cost: number;
  successful: boolean;
  tier: MockeryTier;
  message?: string;
  initiatorName?: string;
  targetName?: string;
  initiatorImg?: string;
  targetImg?: string;
}

export interface LeaderboardUser {
  id?: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  avatarUrl?: string;
  totalSpent?: number;
  amountSpent?: number;
  rank?: number;
  previousRank?: number;
  team?: string;
  tier?: string;
  spendStreak?: number;
  walletBalance?: number;
  rankChange?: number;
  spendChange?: number;
  isProtected?: boolean;
  isVerified?: boolean;
}

export interface LeaderboardFilter {
  timeframe: 'all' | 'week' | 'month' | 'year' | 'today' | 'all-time';
  team: TeamColor | 'all' | string;
  tier?: string;
  sortDirection?: 'asc' | 'desc';
  sortBy?: 'totalSpent' | 'joinDate' | 'username' | 'rank' | 'spendStreak';
  limit?: number;
  page?: number;
}

export interface MockeryResult {
  success: boolean;
  message: string;
  cost?: number;
  actionType?: MockeryAction;
  targetId?: string;
  error?: string;
}

// No need for the duplicate exports at the end since they're already exported above
