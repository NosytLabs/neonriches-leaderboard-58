
// Add or update the mockery-types.ts file
export type MockeryAction = 
  | 'tomato'
  | 'egg'
  | 'putridEgg'
  | 'rotten_egg'
  | 'jester'
  | 'crown'
  | 'stocks'
  | 'shame'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'flame'
  | 'thumbs_down'
  | 'thumbsDown'
  | 'heart'
  | 'skull'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'trumpet'
  | 'confetti'
  | 'taunt'
  | 'laugh'  // Added
  | 'fish';  // Added

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'silver'
  | 'bronze'
  | 'basic'
  | 'premium'
  | 'standard';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';

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

// Missing types that are referenced in other files
export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  fromUserId: string;
  toUserId: string;
  timestamp: string;
  fromUser: MockeryUser;
  toUser: MockeryUser;
  cost: number;
}

export interface MockeryUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage?: string;
  team?: TeamColor | string;
  tier?: string;
  rank: number;
  totalSpent: number;
}

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  benefits: string[];
  leader: string;
  joinFee: number;
  icon: string;
}

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage?: string;
  avatarUrl?: string;  // For backward compatibility
  rank: number;
  previousRank?: number;
  totalSpent?: number;
  amountSpent?: number;
  tier?: string;
  team?: TeamColor | string;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  rankChange?: number;
  spendChange?: number;
  walletBalance?: number;
  joinDate?: string; // Added for compatibility
}

export interface LeaderboardFilter {
  team?: string;
  tier?: string;
  timeframe?: string;
  search?: string;
  sortBy?: string;
  sortDirection?: string;
  limit?: number;
  sort?: string; // For compatibility with leaderboardService
}
