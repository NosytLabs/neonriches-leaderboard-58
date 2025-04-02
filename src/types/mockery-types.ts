
// MockeryAction enum
export type MockeryAction = 
  | 'tomato'
  | 'egg'
  | 'rotten_egg'
  | 'flame'
  | 'heart'
  | 'thumbs_down'
  | 'laugh'
  | 'skull'
  | 'crown';

// MockeryTier enum
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

// TeamColor enum
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

// UserTier enum
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

// Gender enum
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

// TeamData interface
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  memberCount: number;
  totalSpent: number;
  rank: number;
  leaderUsername?: string;
  leaderAvatar?: string;
}

// LeaderboardUser interface
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  avatarUrl?: string;
  totalSpent: number;
  amountSpent?: number;
  rank: number;
  previousRank: number;
  team: TeamColor;
  tier: string;
  spendStreak: number;
  walletBalance?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  spendChange?: number;
  rankChange?: number;
  joinDate?: string;
}

// LeaderboardFilter interface
export interface LeaderboardFilter {
  team: TeamColor | 'all' | undefined;
  tier: string | undefined;
  timeframe: string;
  search: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  limit: number;
}

// MockeryEvent interface
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  fromUserId: string;
  toUserId: string;
  timestamp: string;
  cost: number;
  tier: MockeryTier;
  fromUsername?: string;
  toUsername?: string;
  fromAvatar?: string;
  toAvatar?: string;
}

// MockedUser interface
export interface MockedUser {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  mockeryCount: number;
  lastMockedAt: string;
  recentActions: MockeryAction[];
}
