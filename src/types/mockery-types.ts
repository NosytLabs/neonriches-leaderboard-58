
// Define all possible mockery actions
export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'tomato'
  | 'egg'
  | 'crown'
  | 'stocks'
  | 'putridEgg'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'thumbsDown'
  | 'laugh'
  | 'fish'
  | 'trumpet'
  | 'confetti'
  | 'rotten_egg'
  | 'flame'
  | 'thumbs_down'
  | 'heart'
  | 'skull';

// Legacy alias support
export type LegacyMockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs';

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

export interface MockeryItem {
  id: string;
  type: MockeryAction;
  senderId: string;
  targetId: string;
  message: string;
  createdAt: string;
  isPublic: boolean;
  cost: number;
  team?: TeamColor;
  reactions?: number;
}

export interface MockeryResponse {
  id: string;
  mockeryId: string;
  userId: string;
  content: string;
  createdAt: string;
  isPublic: boolean;
}

export interface MockeryStats {
  sentCount: number;
  receivedCount: number;
  responseRate: number;
  favoriteType: MockeryAction;
  topTarget?: {
    userId: string;
    username: string;
    count: number;
  };
}

// Export TeamColor so it's available when importing from this file
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

// Also define UserTier to include all possible values
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

// Add Gender type
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

// TeamData for team statistics
export interface TeamData {
  name: string;
  color: TeamColor;
  memberCount: number;
  totalSpent: number;
  rank: number;
  motto?: string;
  leader?: string;
  benefits?: string[];
}

// Define MockeryUser for user representation in mockery interactions
export interface MockeryUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage: string;
  rank: number;
  tier: string;
  team: TeamColor;
}

// Define MockeryEvent for events in the mockery system
export interface MockeryEvent {
  id: string;
  type?: string;
  actionType: MockeryAction;
  senderId: string;
  senderName: string;
  targetId: string;
  targetName: string;
  timestamp: string;
  message?: string;
  tier: MockeryTier;
  cost?: number;
}

// Define LeaderboardUser for leaderboard representation
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

// Define LeaderboardFilter for filtering leaderboard views
export interface LeaderboardFilter {
  sortBy: string;
  team: string;
  timeframe: "all" | "week" | "month" | "year";
  search: string;
  limit: number;
}

// Result of mockery actions
export interface MockeryResult {
  success: boolean;
  message: string;
  cost?: number;
  actionType?: MockeryAction;
  targetId?: string;
  error?: string;
}
