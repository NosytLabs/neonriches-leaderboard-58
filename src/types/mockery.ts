
import { TeamColor } from './user';

// Define core mockery action types
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown'
  | 'jester'
  | 'stocks'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'shame'
  | 'protection';

// Mockery tier types
export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary';

// Simple mockery event structure
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  action?: MockeryAction; // For backward compatibility
  targetId: string;
  appliedBy: string;
  timestamp: string;
  appliedAt?: string; // For backward compatibility
  expiresAt?: string;
  isActive?: boolean;
  active?: boolean;
}

// Mockery application options
export interface MockeryOptions {
  message?: string;
  anonymous?: boolean;
}

// Mocked user interface
export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  tier: string;
  team: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  reason?: string;
}

// For backward compatibility
export type ShameAction = MockeryAction;
export type ShameEvent = MockeryEvent;
