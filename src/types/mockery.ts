
import { UserProfile, UserTier, TeamType } from './user-types';
import { LucideIcon } from 'lucide-react';

// Core mockery actions
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'shame'
  | 'protection';

// Mockery tiers
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'royal'
  | 'silver'
  | 'bronze';

// Team colors
export type TeamColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple';

// Alias for backward compatibility 
export type ShameAction = MockeryAction;

// Mockery event represents an instance of mockery applied to a user
export interface MockeryEvent {
  id: string;
  type?: MockeryAction;
  action?: MockeryAction;
  targetId?: string;
  targetUserId?: string;
  appliedBy?: string;
  appliedById?: string;
  appliedAt?: string;
  createdAt?: string;
  expiresAt: string;
  duration?: number;
  isActive: boolean;
  active?: boolean;
  cost?: number;
  tier?: MockeryTier;
  metadata?: Record<string, any>;
}

// Represents a user who has been mocked
export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  team?: TeamColor;
  action?: MockeryAction;
  appliedBy?: string;
  appliedAt?: string;
  mockedBy?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedUntil?: string;
  mockedTier?: MockeryTier;
  mockeryCount?: number;
  lastMocked?: string;
  expiresAt?: string;
  reason?: string;
}

// Data structure for visual effects
export interface ShameEffectData {
  username?: string;
  type?: MockeryAction;
  action?: MockeryAction;
  tier?: MockeryTier;
  duration?: number;
  isActive?: boolean;
  timestamp?: string;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

export interface NotificationSoundOptions {
  volume?: number;
  playbackRate?: number;
  delay?: number;
}

// Helper function to check if a string is a valid MockeryAction
export const isValidMockeryAction = (action: string): action is MockeryAction => {
  return ['tomatoes', 'eggs', 'crown', 'stocks', 'jester', 'shame', 'protection'].includes(action as MockeryAction);
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  return ['common', 'uncommon', 'rare', 'epic', 'legendary', 'basic', 'premium', 'royal', 'silver', 'bronze'].includes(tier as MockeryTier);
};

// Remove the interface for use-mockery since we'll be exporting the actual implementation
