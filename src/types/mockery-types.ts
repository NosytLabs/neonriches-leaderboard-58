
import { TeamColor } from './user';

// Define all possible mockery actions - expanded to include all the ones used in the codebase
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
  | 'egg'
  | 'crown'
  | 'stocks'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'downvote'
  | 'gift'
  | 'target';

// Define all possible mockery tiers
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
  | 'standard';

export interface MockeryReaction {
  id: string;
  userId: string;
  username: string;
  action: MockeryAction;
  targetId: string;
  targetType: 'user' | 'post' | 'comment';
  appliedAt: string;
  expiresAt?: string;
}

export interface MockeryStats {
  shames: number;
  eggs: number;
  mocks: number;
  downvotes: number;
  taunts: number;
  gifts: number;
  totalReceived: number;
  totalSent: number;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: string | TeamColor;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  totalSpent: number;
  rank: number;
  spendStreak: number;
  reason?: string; // Added to fix property error
}

export interface MockeryProfile {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  mockeryStats: MockeryStats;
  activeShames: MockedUser[];
  activeMockeryOutgoing: MockeryReaction[];
}

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: TeamColor;
  rank: number;
  previousRank: number;
  totalSpent: number;
  spentAmount?: number; // Alias for totalSpent
  walletBalance: number;
  isVerified: boolean;
  isProtected: boolean;
  spendStreak: number;
  spendChange?: number;
  rankChange?: number;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  fromId: string;
  timestamp: string;
  isAnonymous: boolean;
  message?: string;
  duration?: number;
}

// Export type for compatibility with isolated modules
export type { TeamColor };
