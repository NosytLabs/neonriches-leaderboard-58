
// Define the available team colors
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze' | 'crimson';

// Define the available mockery actions
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'confetti'
  | 'flowers'
  | 'shame'
  | 'crown'
  | 'mock'
  | 'jester'
  | 'praise'
  | 'thumbsDown'
  | 'putridEggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'taunt'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'carrot'
  | 'fish'
  | 'gift';

// Define the mockery tiers
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'standard'
  | 'silver'
  | 'bronze'
  | 'crimson';

// Define user tiers
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

// Define team data interface
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  members: number;
  totalSpent: number;
  totalContribution?: number;
  rank: number;
  previousRank: number;
  icon: string;
  logoUrl?: string;
  description: string;
}

// Define user interfaces for mockery system
export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  team: TeamColor;
  tier: UserTier;
  // Additional fields used in the code
  userId?: string;
  action?: MockeryAction;
  appliedBy?: string;
  appliedAt?: string;
  expiresAt?: string;
  reason?: string;
  totalSpent?: number;
  rank?: number;
  spendStreak?: number;
}

export interface MockeryEvent {
  id: string;
  fromUserId: string;
  toUserId: string;
  timestamp: string;
  seen: boolean;
  // Additional fields used in the code
  actionType?: MockeryAction;
  action?: MockeryAction;
  targetId?: string;
  fromId?: string;
  isAnonymous?: boolean;
  message?: string;
  appliedBy?: string;
}

// Add LeaderboardUser interface
export interface LeaderboardUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  avatarUrl?: string;
  isVerified?: boolean;
  isProtected?: boolean;
  team: string;
  tier: string;
  rank: number;
  previousRank: number;
  totalSpent: number;
  walletBalance?: number;
  spendStreak?: number;
  joinedDate?: string;
  joinDate?: string;
}

// Define LeaderboardFilter type
export interface LeaderboardFilter {
  team: "all" | TeamColor;
  tier: "all" | string;
  timeframe: "all-time" | "today" | "week" | "month" | "year" | "all";
  search: string;
  sortBy: "rank" | "spent" | "username";
  sortDirection: "asc" | "desc";
}
