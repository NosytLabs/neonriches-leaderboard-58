
// Add missing MockeryAction and MockeryTier values

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

export type Gender = 'male' | 'female' | 'non-binary' | 'other' | 'prefer-not-to-say' | 'king' | 'queen' | 'jester' | 'noble';

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
  | 'protection';

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

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  avatarUrl?: string; // For backward compatibility
  totalSpent: number;
  amountSpent: number;
  rank: number;
  team: TeamColor;
  tier: UserTier | string;
  spendStreak?: number;
  walletBalance?: number;
  previousRank?: number;
  joinDate?: string;
  isVerified?: boolean;
  rankChange?: number;
  spendChange?: number;
  isProtected?: boolean;
}

export interface LeaderboardFilter {
  team: string | TeamColor | 'all';
  tier: string;
  timeframe: string;
  sortBy: string;
  sortDirection?: 'asc' | 'desc';
  search?: string;
  limit?: number;
}

// Add the TeamData interface with all required properties
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
  logoUrl?: string;
  totalContribution?: number;
  totalSpent?: number;
  rank?: number;
  previousRank?: number;
}

export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  senderId: string;
  senderName: string;
  targetId: string;
  targetName: string;
  timestamp: string;
  message?: string;
  tier: MockeryTier;
  cost?: number;
  type?: string; // Required by some components
}

export interface MockeryUser {
  id: string;
  username: string;
  displayName: string; // Add required by some components
  profileImage: string;
  rank: number;
  tier: UserTier;
  team: TeamColor;
  userId?: string; // Add required by some components
}
