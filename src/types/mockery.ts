
import { LucideIcon } from 'lucide-react';
import { User, UserProfile } from './user';
import { NotificationSoundOptions } from './sound-types';

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'silver' | 'epic' | 'rare';

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

// Alias for backward compatibility
export type MockeryActionType = MockeryAction;

export type MockeryDuration = 'short' | 'medium' | 'long' | 'permanent';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetName?: string;
  appliedBy: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
  isActive: boolean;
  cost: number;
}

export interface MockedUser {
  id: string;
  username: string;
  mockedReason: string;
  mockedBy: string;
  mockedUntil: string;
}

// Alias type for backward compatibility
export type MockUser = MockedUser;

export interface ShameAction {
  type: MockeryAction;
  name: string;
  description: string;
  icon: LucideIcon;
  price: number;
  tier: MockeryTier;
}

export interface UseMockery {
  applyMockery: (targetId: string, targetName: string, action: MockeryAction) => Promise<boolean>;
  removeMockery: (targetId: string) => Promise<boolean>;
  getActiveMockery: (targetId: string) => MockeryEvent | null;
  isUserMocked: (targetId: string) => boolean;
  mockedUsers: MockedUser[];
  mockedCount: number;
  isLoading: boolean;
  error: string | null;
}

export interface UseShameEffectReturn {
  handleShame: (userId: number, username: string, type: MockeryAction, amount?: number) => boolean;
  getShameCount: (userId: number) => number;
  getActiveMockery: (userId: number) => {
    type: MockeryAction;
    timestamp: string;
  } | null;
  shameEffects: Record<number, {
    type: MockeryAction;
    timestamp: string;
  }>;
  shameCooldown: Record<number, boolean>;
  shameCount: Record<number, number>;
  isMocking: boolean;
}
