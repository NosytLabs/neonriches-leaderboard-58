
import { UserProfile, UserTier, TeamType } from './user-types';
import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

// Core mockery action types - expanded to include all used values
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'crown'
  | 'jester'
  | 'stocks'
  | 'shame'
  | 'protection'
  | 'target'
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
  | 'fool'
  | 'demon';

export type ExtendedMockeryAction = MockeryAction | string;

export type MockeryActionType = MockeryAction;

// Mockery tiers for different levels of mockery
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'standard'
  | 'premium'
  | 'royal'
  | 'basic'
  | 'silver';

export type ShameAction = MockeryAction;

// Mockery event represents an instance of mockery applied to a user
export interface MockeryEvent {
  id: string;
  action?: MockeryAction;
  type?: string | MockeryAction;
  targetId?: string;
  targetUserId?: string;
  appliedBy?: string;
  appliedById?: string;
  appliedAt?: string;
  createdAt?: string;
  expiresAt: string;
  duration?: number;
  isActive?: boolean;
  active?: boolean;
  cost?: number;
  tier?: MockeryTier;
  metadata?: Record<string, any>;
}

// Represents a user who has been mocked
export interface MockedUser {
  id: string;
  username: string;
  userId?: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  team?: TeamType;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  reason?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedUntil?: string;
  mockedBy?: string | { id: string; username: string };
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  mockedAction?: MockeryAction;
}

// Data structure for visual effects
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
  rate?: number;
}

// Hook interface for mockery functionality
export interface UseMockery {
  mockUser: (userId: string, action: MockeryAction, reason?: string) => Promise<boolean>;
  removeMockery: (userId: string) => Promise<boolean>;
  getMockedUsers: () => MockedUser[];
  isUserMocked: (userId: string) => boolean;
  getUserMockeryDetails: (userId: string) => MockedUser | null;
  isUserImmune: (userId: string) => boolean;
  mockUsers?: MockedUser[];
  isUserProtected?: (username: string) => boolean;
  protectUser?: (username: string) => Promise<boolean>;
  isUserShamed?: (username: string) => boolean;
  getUserMockeryCount?: (username: string) => number;
  getUserMockedOthersCount?: (username: string) => number;
  getActiveMockery?: (username: string) => MockeryAction | null;
}

// Helper function to check if a string is a valid MockeryAction
export const isValidMockeryAction = (action: string): action is MockeryAction => {
  return true; // Simplified for now, should be implemented properly
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  return true; // Simplified for now, should be implemented properly
};
