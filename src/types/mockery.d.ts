
import { TeamColor, UserTier } from './user';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'shame' 
  | 'dungeons' 
  | 'immune'
  | 'crown'
  | 'stocks'
  | 'dunce'
  | 'jester'
  | 'fool'
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'ghost'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'demon'
  | 'dragon'
  | 'king'
  | 'queen'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'pawn'
  | 'target'
  | 'challenge';

export type ShameAction = MockeryAction;

export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'legendary'
  | 'silver'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'bronze';

export interface MockeryInfo {
  icon: string;
  title: string;
  description: string;
  tier: MockeryTier;
  price: number;
  duration: number;
}

export interface ShameEffect {
  action: MockeryAction;
  duration: number;
  appliedAt: number;
  appliedBy: string;
  isActive: boolean;
}

export interface ShameEffectOptions {
  duration?: number;
  message?: string;
  volume?: number;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  targetUsername?: string;
  targetName?: string;
  appliedBy: string;
  appliedAt: number;
  duration: number;
  isActive: boolean;
  expiresAt: number;
  tier?: MockeryTier;
  sourceId?: string;
  sourceName?: string;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team?: TeamColor;
  mockeryCount: number;
  lastMocked?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: MockeryTier;
}

// Alias for backwards compatibility
export type MockUser = MockedUser;
