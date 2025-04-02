
// Use 'export type' for TeamColor and UserTier to fix isolated modules issue
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

export type MockeryAction = 
  | 'tomato' 
  | 'egg' 
  | 'rotten_egg'
  | 'putridEgg'
  | 'shame' 
  | 'mock' 
  | 'challenge' 
  | 'joust' 
  | 'duel' 
  | 'flame'
  | 'jester'
  | 'crown'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'thumbs_down'
  | 'thumbsDown'
  | 'taunt'
  | 'heart'
  | 'skull'
  | 'laugh'
  | 'fish';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal' | 'basic' | 'premium' | 'silver' | 'bronze' | 'standard';

export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  logoUrl: string;
  benefits: string[];
  members: number;
  memberCount?: number; // Added for backwards compatibility
  totalContribution: number;
  totalSpent: number; // Ensure this is required
  rank: number;
  previousRank: number;
}

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string; // Changed from optional to required
  profileImage?: string;
  tier: string | UserTier;
  team: string | TeamColor;
  rank: number;
  previousRank?: number;
  totalSpent: number;
  amountSpent: number;
  walletBalance?: number;
  isVerified?: boolean;
  spendStreak?: number;
  isProtected?: boolean;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string; // Added for compatibility
  joinDate?: string; // Added for compatibility
}

export interface LeaderboardFilter {
  timeframe: 'day' | 'week' | 'month' | 'all' | 'year' | 'all-time' | 'today';
  team?: TeamColor | 'all';
  limit?: number;
  page?: number;
  tier?: string;
  search?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
}

export interface MockeryEvent {
  id: string;
  type?: MockeryAction;
  action?: MockeryAction; // For backwards compatibility
  timestamp: string;
  fromUserId: string;
  toUserId: string;
  fromUser?: MockeryUser;
  toUser?: MockeryUser;
  fromUsername?: string;
  toUsername?: string;
  amount?: number;
  message?: string;
  publicDisplay?: boolean;
  cost?: number;
  tier?: MockeryTier;
}

export interface MockeryUser {
  id: string;
  userId?: string; // For compatibility
  username: string;
  displayName?: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  spendStreak?: number;
}

export interface MockeryStats {
  totalMockeries: number;
  mostReceivedType: MockeryAction;
  mostSentType: MockeryAction;
  totalReceived: number;
  totalSent: number;
  lastMockedBy?: string;
  lastMockedAt?: string;
}

// For compatibility
export type MockedUser = MockeryUser;

// Re-export types for convenience and backward compatibility
export type { TeamColor as TeamColorType };
export type { UserTier as UserTierType };
export type { Gender as GenderType };
