
import { MockeryAction, MockeryTier, TeamColor, TeamData, UserTier } from './mockery-types';

// Re-export types correctly
export type { MockeryAction, MockeryTier, TeamColor, TeamData, UserTier };

// Add any other types needed
export interface MockeryNotification {
  id: string;
  fromUserId: string;
  toUserId: string;
  action: MockeryAction;
  timestamp: string;
  read: boolean;
}

export interface MockerySettings {
  allowMockery: boolean;
  notifyOnMockery: boolean;
  protectionEnabled: boolean;
  protectionEndDate?: string;
}

// These are forward exports
export * from './mockery-types';
