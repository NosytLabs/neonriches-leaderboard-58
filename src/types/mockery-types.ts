
/**
 * Type definitions for mockery feature
 */

export type MockeryAction = 
  | 'tomato'
  | 'egg'
  | 'rotten_egg'
  | 'flame'
  | 'heart'
  | 'thumbs_down' 
  | 'laugh'
  | 'skull'
  | 'crown'
  | 'putridEgg'
  | 'stocks'
  | 'jester'
  | 'shame'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'fish'
  | 'thumbsDown';

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal';

export interface MockeryEventBase {
  id: string;
  action: MockeryAction;
  fromUserId: string;
  toUserId: string;
  timestamp: string;
  tier?: MockeryTier;
  message?: string;
  isAnonymous?: boolean;
  cost?: number; // Add cost property to satisfy the use in hooks
}

export interface MockeryEvent extends MockeryEventBase {
  fromUser?: MockedUser;
  toUser?: MockedUser;
  // Added targetId and fromId for backward compatibility
  targetId?: string;
  fromId?: string;
  // Added seen and appliedBy for compatibility
  seen?: boolean;
  appliedBy?: string;
}

export interface MockedUser {
  id?: string;
  userId?: string; // Add userId property for compatibility
  username: string;
  displayName: string;
  profileImage: string;
  team: TeamColor;
  tier: UserTier;
  rank?: number;
  // Add additional properties used in use-mockery.tsx
  action?: MockeryAction;
  appliedBy?: string;
  appliedAt?: string;
  expiresAt?: string;
  totalSpent?: number;
  spendStreak?: number;
  mockeryCount?: number;
  lastMockedAt?: string;
  recentActions?: MockeryAction[];
  reason?: string;
}

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

// Export LeaderboardUser type from correct location to fix imports
export { LeaderboardUser, LeaderboardFilter } from '@/types/leaderboard';

// Define mock results interface
export interface MockeryResult {
  success: boolean;
  event?: MockeryEvent;
  error?: string;
  mockeryText?: string;
  victim?: MockedUser;
  mocker?: MockedUser;
}

// Export TeamData interface to fix imports
export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  logo?: string;
  logoUrl?: string;
  memberCount?: number;
  members?: number;
  totalContribution?: number;
  rank: number;
  previousRank?: number;
  leaderUsername?: string;
  leaderUserId?: string;
  benefits?: string[];
}
