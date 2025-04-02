
/**
 * Core mockery types for the application
 */

// User & Team related types
export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'elite' 
  | 'royal' 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'pro'
  | 'platinum'
  | 'diamond'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'legendary'
  | 'founder';

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

// Legacy type alias
export type TeamType = TeamColor;

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  logoUrl?: string;
  logo?: string;
  members?: number;
  memberCount?: number;
  totalSpent?: number;
  totalContribution?: number;
  rank?: number;
  previousRank?: number;
  description?: string;
  bannerImage?: string;
}

// Mockery types
export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'tomatoes'
  | 'eggs'
  | 'crown'
  | 'stocks'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'confetti'
  | 'flowers'
  | 'thumbsDown';

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
  | 'bronze'
  | 'standard'
  | 'crimson';

export interface MockedUser {
  userId: string;
  username: string;
  profileImage: string;
  rank: number;
  team: TeamColor;
  tier: UserTier;
  displayName?: string;
  id?: string; // Added for compatibility with use-mockery.tsx
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  timestamp: string;
  message?: string;
  fromUserId?: string;
  toUserId?: string; // Added for compatibility with use-mockery.tsx
}

// Leaderboard Types
export interface LeaderboardFilter {
  search?: string;
  team: 'all' | TeamColor;
  tier: 'all' | UserTier;
  timeframe: 'all-time' | 'today' | 'week' | 'month' | 'year' | 'all';
  sortBy: 'rank' | 'spent' | 'username';
  limit?: number;
  page?: number;
  sortDirection?: 'asc' | 'desc';
}

// Extend the LeaderboardUser interface to include rankChange, spendChange, and avatarUrl
export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  avatarUrl?: string; // Added for components that reference this
  tier: UserTier | string;
  team: TeamColor | string | null;
  rank: number;
  previousRank: number;
  totalSpent: number;
  walletBalance: number;
  isVerified?: boolean;
  isProtected?: boolean;
  spendStreak?: number;
  // New properties to fix errors
  rankChange?: number;
  spendChange?: number;
  joinDate?: string;
  amountSpent?: number;
  spentAmount?: number;
  createdAt?: string;
}

// Gender type
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

// UserProfile 
export interface UserProfile {
  id: string;
  username: string;
  email?: string;
  displayName?: string;
  profileImage?: string;
  bio?: string;
  totalSpent?: number;
  amountSpent?: number;
  walletBalance?: number;
  rank?: number;
  previousRank?: number;
  team?: TeamColor;
  tier?: UserTier;
  joinedDate?: string;
  joinDate?: string;
  badges?: string[];
  cosmetics?: Record<string, string[]>;
  settings?: UserSettings;
  spendStreak?: number;
  isVerified?: boolean;
  isProtected?: boolean;
  gender?: Gender;
}

export interface UserSettings {
  theme: 'dark' | 'light' | 'system' | 'royal';
  notifications: boolean;
  sound: boolean;
  profileVisibility: 'public' | 'private' | 'followers' | 'friends';
  emailNotifications: boolean;
}

// OnChain related types 
export interface SolanaTransaction {
  id: string;
  signature: string;
  timestamp: string;
  amount: string | number;
  sender: string;
  status: string;
  type: string;
  receiver?: string;
  slot?: number;
}

export interface OnChainLeaderboardEntry {
  userId: string;
  publicKey: string;
  totalSpent: string | number;
  signature: string;
  timestamp: string;
}
