
/**
 * Simplified mockery type definitions
 */

// Define core mockery action types
export type MockeryAction = 'tomatoes' | 'eggs' | 'crown';

// Simple mockery event structure
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  appliedBy: string;
  timestamp: string;
}

// Mockery application options
export interface MockeryOptions {
  message?: string;
  anonymous?: boolean;
}

// For backward compatibility
export type ShameAction = MockeryAction;
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
