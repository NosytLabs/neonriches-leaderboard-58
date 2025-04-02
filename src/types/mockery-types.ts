
/**
 * Define all the mockery action types
 */

export type MockeryAction = 
  | 'shame'
  | 'mock'
  | 'praise' 
  | 'taunt'
  | 'carrot' 
  | 'honor'
  | 'applaud'
  | 'laugh'
  | 'bribe'
  | 'challenge'
  | 'dare'
  | 'compliment'
  | 'ridicule'
  | 'tease'
  | 'encourage'
  | 'admire'
  | 'gift'
  | 'empower'
  | 'crown'
  | 'throne'
  | 'buy'
  | 'boost'
  | 'tomatoes'
  | 'eggs'
  | 'confetti'
  | 'flowers'
  | 'putridEggs'
  | 'stocks'
  | 'jester'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'joust'
  | 'duel'
  | 'fish'
  | 'thumbsDown'
  | 'alert'
  | 'warning';

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'unique'
  | 'mythic'
  | 'gold'
  | 'basic'
  | 'premium'
  | 'standard'
  | 'silver'
  | 'bronze'
  | 'crimson';

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

export type TeamData = {
  id: string;
  name: string;
  color: TeamColor;
  members: number;
  totalSpent: number;
  rank: number;
  description?: string;
};

export type LeaderboardUser = {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: TeamColor;
  rank: number;
  previousRank: number;
  walletBalance: number;
  totalSpent: number;
  amountSpent: number;
  isVerified?: boolean;
  spendStreak?: number;
  isProtected?: boolean;
  joinDate?: string;
  createdAt?: string;
  rankChange?: number;
  spendChange?: number;
};

export type LeaderboardFilter = {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  timeframe: 'day' | 'week' | 'month' | 'all' | 'today' | 'all-time' | 'week' | 'month' | 'year';
  sortBy: 'rank' | 'spent' | 'streak' | 'username';
  search?: string;
};

export type MockeryEvent = {
  id: string;
  fromUserId: string;
  toUserId: string;
  action: MockeryAction;
  timestamp: string;
  amount?: number;
  message?: string;
  public?: boolean;
  tier?: MockeryTier;
  data?: Record<string, any>;
};

export type MockedUser = {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  team?: TeamColor;
  rank?: number;
  action?: MockeryAction;
  totalSpent?: number;
  amountSpent?: number;
  mockCount?: number;
  shameCount?: number;
  lastMocked?: string;
};

export type UserTier = 
  | 'free'
  | 'basic'
  | 'premium'
  | 'elite'
  | 'royal'
  | 'founder'
  | 'pro'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'platinum'
  | 'diamond'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'legendary';

export type Gender = 
  | 'male'
  | 'female'
  | 'other'
  | 'none'
  | 'king'
  | 'queen'
  | 'jester'
  | 'noble'
  | 'prefer-not-to-say';
