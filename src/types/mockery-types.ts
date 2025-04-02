
// Create this file to include the MockeryAction type with 'carrot' and 'confetti'
import { TeamColor, UserTier } from './user';

export type MockeryAction = 
  | 'tomato' 
  | 'egg' 
  | 'flower' 
  | 'gold_star' 
  | 'crown' 
  | 'torch' 
  | 'shame_bell'
  | 'carrot'
  | 'confetti'
  | 'taunt'
  | 'shame'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'protection'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'putridEggs'
  | 'stocks'
  | 'jester'
  | 'thumbsDown';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'premium'
  | 'royal'
  | 'basic';

export interface MockedUser {
  id: string;
  username: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  tier: UserTier;
  team: TeamColor;
  action?: MockeryAction; 
  userId?: string;
}

export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  fromUserId: string;
  fromUsername: string;
  targetUserId: string;
  targetUsername: string;
  timestamp: string;
  message?: string;
  toUserId?: string;
  action?: MockeryAction;
}

export interface LeaderboardUser {
  id: string;
  username: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  spendStreak?: number;
  walletBalance?: number;
  isVerified?: boolean;
  isVIP?: boolean;
  displayName?: string;
  isProtected?: boolean;
  amountSpent?: number;
  userId?: string;
  spentAmount?: number;
  rankChange?: number;
  spendChange?: number;
  avatarUrl?: string;
  joinDate?: string; 
}

export interface MockeryAction {
  id: string;
  type: string;
  cost: number;
  name: string;
  description: string;
  iconUrl: string;
  rarity: string;
  cooldown: number;
}

export interface MockeryResponse {
  success: boolean;
  message: string;
  actionId?: string;
  mockedUserId?: string;
  tier?: MockeryTier;
}

// Export TeamColor and UserTier to ensure they're accessible when importing from this file
export { TeamColor, UserTier };

// Export LeaderboardFilter type
export interface LeaderboardFilter {
  team?: string | 'all';
  tier?: string | 'all';
  timeframe?: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all';
  search?: string;
  sortBy?: 'rank' | 'spent' | 'username';
  sortDirection?: 'asc' | 'desc';
  limit?: number;
}

// Export TeamData
export interface TeamData {
  color: TeamColor;
  name: string;
  description: string;
  memberCount: number;
  totalSpent: number;
  captain?: string;
  motto?: string;
  benefits?: string[];
  icon?: string;
}
