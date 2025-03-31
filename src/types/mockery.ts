
import { LucideIcon } from 'lucide-react';
import { User, UserProfile } from './user';
import { AudioOptions } from './sound-types';

export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'silver' 
  | 'epic' 
  | 'rare' 
  | 'legendary'
  | 'common'
  | 'uncommon'
  | 'bronze';

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
  | 'protection'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'jest'
  | 'defeat'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'taunt'
  | 'guillotine'
  | 'removal'
  | 'fool';

// Simplified subset for shame actions using actual MockeryAction
export type ShameActions = MockeryAction; 

// Alias for backward compatibility
export type MockeryActionType = MockeryAction;

export type MockeryDuration = 'short' | 'medium' | 'long' | 'permanent';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetName?: string;
  appliedBy: string;
  action: MockeryAction;
  timestamp?: string;
  expiresAt: string;
  isActive: boolean;
  duration: number;
  appliedAt?: string;
  cost?: number;
  reason?: string;
  type?: string;
  tier?: string;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  action: MockeryAction;
  expiresAt: string;
  appliedAt: string;
  appliedBy: {
    id: string;
    username: string;
  };
  mockedAction?: MockeryAction;
  mockedBy?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedUntil?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
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
  getActiveMockery: (userId: string) => MockeryEvent | null;
  isUserMocked: (userId: string) => boolean;
  mockedUsers: MockedUser[];
  mockedCount: number;
  isLoading: boolean;
  error: string | null;
  mockUsers?: (targetId: string, action: MockeryAction) => Promise<boolean>;
  isUserProtected?: (userId: string) => boolean;
  protectUser?: (userId: string) => Promise<boolean>;
  mockUser?: (targetId: string, action: MockeryAction) => Promise<boolean>;
  isUserShamed?: (userId: string) => boolean;
  getUserMockeryCount?: (userId: string) => number;
  getUserMockedOthersCount?: (userId: string) => number;
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

// Additional type definitions for notification sound options
export interface NotificationSoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
}
