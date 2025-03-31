
import { UserProfile, UserTier, TeamType } from './user-types';
import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

// Simplify mockery actions to a core set
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'crown'
  | 'jester'
  | 'stocks'
  | 'shame'
  | 'protection'
  | 'target';

// Simplify mockery tiers for different levels
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
  userId: string;
  username: string;
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
  return ['tomatoes', 'eggs', 'crown', 'jester', 'stocks', 'shame', 'protection', 'target'].includes(action as MockeryAction);
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  return ['common', 'uncommon', 'rare', 'epic', 'legendary', 'standard', 'premium', 'royal', 'basic', 'silver'].includes(tier as MockeryTier);
};
