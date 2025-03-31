
import { LucideIcon } from 'lucide-react';
import { User, UserProfile } from './user';
import { SoundOptions } from './sound-types';

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

// Extended mockery actions with all possibilities
export type ExtendedMockeryAction = 
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
  | 'defeat'
  | 'removal'
  | 'fool';

// Core mockery action used in main functionality
export type MockeryAction = ExtendedMockeryAction;

// Simplified subset for shame actions
export type ShameAction = ExtendedMockeryAction;

export type NotificationSoundOptions = SoundOptions;

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
  tier?: MockeryTier;
  type?: string;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage?: string;
  mockedBy: string;
  mockedAction?: MockeryAction;
  mockedUntil: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
}

// Alias for backward compatibility
export type MockUser = MockedUser;

export interface ShameActionType {
  type: MockeryAction;
  name: string;
  description: string;
  icon: LucideIcon;
  price: number;
  tier: MockeryTier;
}

export interface ShameEffectData {
  type: MockeryAction;
  timestamp: string;
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
  // Add missing properties for compatibility
  mockUsers: any[];
  isUserProtected: (username: string) => boolean;
  protectUser: (username: string) => void;
  isUserShamed: (username: string) => boolean;
  mockUser: (user: User, username: string, action: MockeryAction) => void;
  getUserMockeryCount: (userId: string) => number;
  getUserMockedOthersCount: (userId: string) => number;
}

export interface UseShameEffectReturn {
  handleShame: (userId: number, username: string, type: MockeryAction, amount?: number) => boolean;
  getShameCount: (userId: number) => number;
  getActiveMockery: (userId: number) => ShameEffectData | null;
  shameEffects: Record<number, ShameEffectData>;
  shameCooldown: Record<number, boolean>;
  shameCount: Record<number, number>;
  isMocking: boolean;
}
