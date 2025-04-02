
// Define the mockery action types with all variations
export type MockeryAction = 
  | 'tomato'
  | 'egg' 
  | 'rotten_egg'
  | 'flame'
  | 'heart'
  | 'thumbs_down'
  | 'skull'
  | 'crown'
  | 'putridEgg'
  | 'stocks'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'silence'
  | 'laugh'
  | 'fish'
  | 'taunt'
  | 'thumbsDown'
  | 'trumpet'
  | 'confetti'
  | 'shame'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'royal_decree'
  | 'shame_certificate'
  | 'insult'
  | 'humiliate';

// Define mockery tier types
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// Team color types
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';

// Gender types
export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

// User tier types
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

// Mockery event interface
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  fromUserId: string;
  targetUserId: string;
  timestamp: string;
  value: number;
  description?: string;
}

// Mockery user interface
export interface MockeryUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  team?: TeamColor;
  tier?: UserTier;
  rank?: number;
  spendStreak?: number;
}

// Leaderboard user interface
export interface LeaderboardUser {
  id?: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  isVerified?: boolean;
  rank: number;
  previousRank?: number;
  team?: TeamColor | string;
  tier?: UserTier | string;
  totalSpent?: number;
  amountSpent?: number;
  spendStreak?: number;
}

// Leaderboard filter interface
export interface LeaderboardFilter {
  period: 'daily' | 'weekly' | 'monthly' | 'all-time';
  team: TeamColor | 'all' | string;
  limit: number;
}

// Export all types
export default {
  MockeryAction,
  MockeryTier,
  TeamColor,
  Gender,
  UserTier,
  MockeryEvent,
  MockeryUser,
  LeaderboardUser,
  LeaderboardFilter
};
