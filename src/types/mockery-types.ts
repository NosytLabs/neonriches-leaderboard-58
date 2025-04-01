
/**
 * Mockery type definitions
 */

// Re-export the core mockery action types from mockery.d.ts
export type { 
  MockeryAction,
  MockeryTier,
  MockeryItem,
  MockeryResponse,
  MockeryStats
} from './mockery';

// Import TeamColor for proper typing
import { TeamColor } from './team';

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
