
// Team colors
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'neutral' 
  | 'none'
  | 'silver'
  | 'bronze'
  | 'crimson';

// User tiers
export type UserTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'founder'
  | 'free'
  | 'pro'
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

// Mockery tiers
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
  | 'gold'
  | 'bronze';

// Gender types
export type Gender = 
  | 'male' 
  | 'female' 
  | 'nonbinary' 
  | 'other' 
  | 'prefer-not-to-say'
  | 'none';

// Mockery actions
export type MockeryAction = 
  | 'tomato'
  | 'egg'
  | 'putridEgg'
  | 'crown'
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
  | 'thumbs_down'
  | 'laugh'
  | 'rotten_egg';

// Team data
export interface TeamData {
  color: TeamColor;
  name: string;
  ranking?: number;
  memberCount?: number;
  teamId?: string;
}

// Mockery user
export interface MockeryUser {
  id: string;
  username: string;
  displayName: string;
  avatarUrl?: string;
  profileImage?: string;
  team?: TeamColor;
  tier?: UserTier;
  rank?: number;
  mockedCount?: number;
  isMockable?: boolean;
  isProtected?: boolean;
}

// Mockery event
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  fromUserId: string;
  fromUsername: string;
  toUserId: string;
  toUsername: string;
  timestamp: string;
  cost: number;
  public: boolean;
}

// Mockery result
export interface MockeryResult {
  success: boolean;
  message: string;
  cost?: number;
  actionType?: MockeryAction;
  targetId?: string;
  error?: string;
}

// Leaderboard user
export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage: string;
  avatarUrl?: string;
  totalSpent: number;
  amountSpent: number;
  rank: number;
  previousRank: number;
  team: TeamColor | string;
  tier: UserTier | string;
  spendStreak?: number;
  walletBalance?: number;
  rankChange?: number;
  spendChange?: number;
  isProtected?: boolean;
  isVerified?: boolean;
}

// Leaderboard filter
export interface LeaderboardFilter {
  timeframe: 'all' | 'week' | 'month' | 'year' | 'today' | 'all-time';
  team: TeamColor | 'all' | string;
  tier: string;
  sortDirection: 'asc' | 'desc';
  sortBy: 'totalSpent' | 'joinDate' | 'username' | 'rank' | 'spendStreak';
  limit?: number;
  page?: number;
  sort?: string;
  period?: string;
  search?: string;
}
