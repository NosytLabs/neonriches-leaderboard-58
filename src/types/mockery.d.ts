
import { TeamColor } from './team';

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

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'legendary' | 'silver';

export interface MockeryEvent {
  id: string;
  targetId: string;
  appliedBy: string;
  action: MockeryAction;
  timestamp: number;
  expiry: number;
  isActive: boolean;
  targetName?: string;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
}

export interface ShameEffectOptions {
  duration?: number;
  intensity?: 'light' | 'medium' | 'heavy';
  sound?: boolean;
  volume?: number;
}

export interface ShameEffect {
  type: ShameAction;
  options?: ShameEffectOptions;
}
