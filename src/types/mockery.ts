
import { TeamType } from './team';

export type MockeryAction = 
  | 'tomatoes' 
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'silence'
  | 'shame'
  | 'taunt'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection';

export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal'
  | 'legendary';

export type ShameAction = 
  | 'shame' 
  | 'mock' 
  | 'ridicule' 
  | 'humiliate'
  | 'expose';

export type ExtendedMockeryAction = MockeryAction | ShameAction;

export interface MockeryEvent {
  id: string;
  userId: string;
  targetUserId: string;
  mockeryType: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  createdAt: string;
  isActive: boolean;
  sourceId?: string;
  sourceName?: string;
  targetId?: string;
  targetName?: string;
  action?: MockeryAction;
  appliedById?: string;
  duration?: number;
  active?: boolean;
  cost?: number;
  tier?: MockeryTier;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: string;
  mockeryCount?: number;
  rank?: number;
  team?: TeamType;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier: string;
  mockeryCount: number;
  lastMocked?: string;
  team?: TeamType;
  rank?: number;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionExpiresAt?: string;
  isMocked: boolean;
  mockeryExpiresAt?: string;
  mockeryType?: MockeryAction;
  mockeryCount: number;
  lastMockedAt?: string;
}

export type { 
  MockeryAction, 
  MockeryEvent, 
  MockeryTier, 
  MockUser, 
  MockedUser, 
  ShameAction, 
  ExtendedMockeryAction,
  MockeryEffectData,
  UserMockeryStatus
};
