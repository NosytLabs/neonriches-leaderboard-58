
/**
 * Unified type definitions for the mockery/shame system
 */

// Define core mockery action types
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown' 
  | 'stocks' 
  | 'jester' 
  | 'protection' 
  | 'shame';

// For backwards compatibility  
export type ShameAction = MockeryAction;

// Define mockery event structure
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  duration: number;
  isActive: boolean;
  timestamp: string;
}

// Active mockery effects map by user ID
export interface MockeryEffects {
  [userId: string]: {
    action: MockeryAction;
    timestamp: number;
  }
}

// Mockery cooldown tracker
export interface MockeryCooldown {
  [userId: string]: boolean;
}

// Mockery count tracker
export interface MockeryCount {
  [userId: string]: number;
}

// Basic mockery application options
export interface MockeryOptions {
  duration?: number;
  message?: string;
  anonymous?: boolean;
}

// Premium mockery options
export interface PremiumMockeryOptions extends MockeryOptions {
  effect?: 'standard' | 'enhanced' | 'royal';
  visibility?: 'normal' | 'highlighted' | 'featured';
}

// User who has been mocked
export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  totalSpent: number;
  rank: number;
  tier: string;
  team: string;
  isMocked: boolean;
  isProtected: boolean;
}
