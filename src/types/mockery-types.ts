
/**
 * Type definitions for the mockery/shame system
 */

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

export interface MockeryEffects {
  [userId: string]: {
    action: MockeryAction;
    timestamp: number;
  }
}

export interface MockeryCooldown {
  [userId: string]: boolean;
}

export interface MockeryCount {
  [userId: string]: number;
}

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
