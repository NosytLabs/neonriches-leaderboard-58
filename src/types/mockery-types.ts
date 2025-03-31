
/**
 * Simplified mockery type definitions
 */

// Define core mockery action types - reducing to only essential ones
export type MockeryAction = 'tomatoes' | 'eggs' | 'crown';

// Simple mockery event structure
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  appliedBy: string;
  timestamp: string;
  isActive: boolean;
}

// Mockery application options
export interface MockeryOptions {
  message?: string;
  anonymous?: boolean;
}
