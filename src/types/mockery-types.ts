
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
  | 'taunt';

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

export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage?: string;
  avatarUrl?: string;
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
}

export interface LeaderboardFilter {
  team?: string;
  tier?: string;
  timeframe?: string;
  search?: string;
  sortBy?: string;
  sortDirection?: string;
  limit?: number;
  sort?: string;
}
