
import { TeamType, UserTier } from './user-types';

export type MockeryTier = 'standard' | 'premium' | 'royal' | 'basic' | 'rare' | 'epic' | 'legendary' | 'uncommon' | 'common';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown' 
  | 'jester' 
  | 'stocks'
  | 'protection'
  | 'shame'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'immune'
  | 'dunce'
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
  | 'dungeons'
  | 'removal'
  | 'laughing'
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'ghost'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'dragon'
  | 'jest'
  | 'challenge'
  | 'defeat'
  | 'target';

export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  userId: string;
  tier: UserTier;
  team: TeamType;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  reason?: string;
  mockeryCount?: number;
  mockedBy?: string | { id: string; username: string };
  mockedAction?: string;
  mockedTimestamp?: string;
  mockedUntil?: string;
  mockedTier?: UserTier;
  mockedReason?: string;
  lastMocked?: string;
}

export interface MockeryEvent {
  id: string;
  targetId: string;
  actorId: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  tier: MockeryTier;
  cost: number;
  appliedBy?: string;
}

export interface ShameEffectData {
  username: string;
  action: MockeryAction;
  isActive: boolean;
  timestamp?: string;
  type?: MockeryAction;
}

export type NotificationSoundOptions = {
  volume?: number;
  loop?: boolean;
  rate?: number;
}

export type ExtendedMockeryAction = MockeryAction;

export type ShameAction = MockeryAction;

export type UseMockery = {
  mockUser: (userId: string, action: MockeryAction, reason: string) => Promise<boolean>;
  removeMockery: (userId: string) => Promise<boolean>;
  getMockedUsers: () => MockedUser[];
  isUserMocked: (userId: string) => boolean;
  getUserMockeryDetails: (userId: string) => MockedUser | null;
  isUserImmune: (userId: string) => boolean;
};

// Helper function to check if a string is a valid MockeryAction
export const isValidMockeryAction = (action: string): action is MockeryAction => {
  return true; // Simplified for now, should be implemented properly
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  return true; // Simplified for now, should be implemented properly
};
