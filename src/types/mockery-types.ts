
import { UserProfile, UserTier, TeamColor } from '@/types/user';

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'crown'
  | 'dragon'
  | 'demon'
  | 'dunce'
  | 'jester'
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'knight'
  | 'bishop'
  | 'rook'
  | 'pawn'
  | 'king'
  | 'queen'
  | 'ghost'
  | 'target'
  | 'challenge'
  | 'immune'
  | 'shame'
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
  | 'dungeons'
  | 'fool'
  | 'banned'
  | 'scarlet'
  | 'cursed'
  | 'laughing'
  | 'poor'
  | 'muted'
  | 'exile'
  | 'knighthood'
  | 'tarAndFeather'
  | 'rotten'
  | 'pillory';

export type ExtendedMockeryAction = MockeryAction | string;

export type MockeryTier = 
  | 'basic'
  | 'premium'
  | 'royal'
  | 'legendary'
  | 'rare'
  | 'epic'
  | 'common'
  | 'uncommon'
  | 'silver'
  | 'bronze';

export type ShameAction = MockeryAction; // All mockery actions can be used for shaming

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  duration?: number;
  isActive: boolean;
  cost?: number;
  tier?: MockeryTier;
  type?: string;
  metadata?: Record<string, any>;
}

export interface MockedUser {
  id: string;
  username: string;
  action: MockeryAction;
  appliedAt: string;
  appliedBy: string | { id: string; username: string; };
  expiresAt: string;
  userId?: string;
  displayName?: string;
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedUntil?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
  mockedAction?: MockeryAction;
}

export interface ShameEffectData {
  username: string;
  action: MockeryAction;
  tier?: MockeryTier;
  duration?: number;
  isActive: boolean;
  timestamp?: string;
  type?: ShameAction;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

export interface NotificationSoundOptions {
  volume?: number;
  pitch?: number;
  loop?: boolean;
  playbackRate?: number;
  delay?: number;
}

export interface UseMockery {
  mockUsers: MockedUser[];
  isUserProtected: (username: string) => boolean;
  protectUser: (username: string) => Promise<boolean>;
  isUserShamed: (username: string) => boolean;
  mockUser: (targetId: string, action: MockeryAction) => Promise<boolean>;
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  getActiveMockery: (username: string) => MockeryAction | null;
}
