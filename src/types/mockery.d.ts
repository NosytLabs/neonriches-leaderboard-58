
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
  | 'clown'
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
  | 'pawn';

export type ShameAction = MockeryAction;

export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'legendary'
  | 'silver';

export interface MockeryInfo {
  icon: string;
  title: string;
  description: string;
  tier: MockeryTier;
  price: number;
  duration: number;
}

export type ShameEffect = {
  action: MockeryAction;
  duration: number;
  appliedAt: number;
  appliedBy: string;
  isActive: boolean;
};

export interface ShameEffectOptions {
  duration?: number;
  message?: string;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  appliedBy: string;
  appliedAt: number;
  duration: number;
  isActive: boolean;
  expiresAt: number;
  targetName?: string;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: UserTier;
  team: TeamColor;
  mockeryCount: number;
  lastMocked: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: MockeryTier;
}
