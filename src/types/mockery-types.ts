
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
  | 'target'
  | 'fish'
  | 'message'
  | 'mockery';

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
  reason?: string;
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

// Fixed LeaderboardUser import to come from leaderboard.ts instead of redefining
export { LeaderboardUser } from './leaderboard';

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  fromId: string;
  timestamp: string;
  isAnonymous: boolean;
  message?: string;
  duration?: number;
  appliedBy?: string;
}

// Export type for compatibility with isolated modules
export type { TeamColor };
