
import { TeamColor } from './user';

export type MockeryAction = 
  | 'shame'
  | 'egg'
  | 'mock'
  | 'downvote'
  | 'taunt'
  | 'gift';

export type MockeryTier = 
  | 'basic'
  | 'standard'
  | 'premium'
  | 'royal'
  | 'silver';

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

export type MockeryAction = 
  | 'shame'
  | 'egg'
  | 'mock'
  | 'downvote'
  | 'taunt'
  | 'gift';

export { TeamColor };
