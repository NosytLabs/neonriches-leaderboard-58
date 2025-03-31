
import { UserProfile, UserTier, TeamColor } from '@/types/user';
import { FC } from 'react';
import { LucideIcon } from 'lucide-react';

// Core mockery action types
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'crown'
  | 'jester'
  | 'stocks'
  | 'shame'
  | 'protection';

export type ExtendedMockeryAction = MockeryAction | string;

export type MockeryActionType = MockeryAction | string;

// Mockery tiers for different levels of mockery
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export type ShameAction = MockeryAction;

// Mockery event represents an instance of mockery applied to a user
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId?: string;
  targetUserId?: string;
  appliedBy?: string;
  appliedById?: string;
  appliedAt: string;
  expiresAt: string;
  duration?: number;
  isActive?: boolean;
  active?: boolean;
  cost?: number;
  tier?: MockeryTier;
  type?: string;
  metadata?: Record<string, any>;
}

// Represents a user who has been mocked
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
}

// Hook interface for mockery functionality
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

// Define mocked user compatibility type for legacy code
export type LegacyMockedUser = {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedUntil: string;
  mockedBy: string;
  mockedTier: string;
  mockeryCount: number;
  lastMocked: string;
  team: string;
  tier: string;
};
