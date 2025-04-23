
// Import the MockeryAction and related types from mockery-types.ts
import { MockeryAction, MockeryTier, MockeryResult, MockeryEvent } from './mockery-types';

/**
 * Mockery target information
 */
export interface MockeryTarget {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  activeEffects?: MockeryEffect[];
  mockeryCount?: number;
}

/**
 * Mockery effect details
 */
export interface MockeryEffect {
  id?: string;
  action: MockeryAction;
  type?: MockeryAction;
  appliedAt: string;
  timestamp?: string;
  expiresAt: string;
  appliedById?: string;
  appliedByUsername?: string;
}

/**
 * Mockery purchase options
 */
export interface MockeryOption {
  action: MockeryAction;
  name: string;
  description: string;
  cost: number;
  duration: number; // in hours
  tier: MockeryTier;
  available: boolean;
  iconPath?: string;
}

/**
 * Mockery history record
 */
export interface MockeryHistory {
  id: string;
  userId: string;
  targetId: string;
  targetUsername: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  cost: number;
  isActive: boolean;
}

export type { MockeryAction, MockeryTier, MockeryResult, MockeryEvent };
