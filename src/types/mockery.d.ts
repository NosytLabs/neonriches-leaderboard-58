
import { LucideIcon } from 'lucide-react';
import { SoundType, AudioOptions } from './sound-types';

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'silver' | 'epic' | 'rare' | 'legendary';

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
  | 'challenge'
  | 'protection';

// Alias for backward compatibility
export type MockeryActionType = MockeryAction;

// Define the subset of mockery actions that are specifically for shame actions
export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

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
  duration?: number;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  mockedReason?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
  mockedUntil: string;
  mockedTimestamp?: string;
}

// Alias type for backward compatibility
export type MockUser = MockedUser;

export interface ShameActionDetails {
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

export type NotificationSoundOptions = AudioOptions;
