
/**
 * Unified mock types file to resolve import/export conflicts
 */

import { 
  MockeryAction,
  MockeryTier,
  TeamColor,
  TeamData,
  LeaderboardUser,
  LeaderboardFilter,
  MockeryEvent,
  MockedUser
} from './mockery-types';

// Re-export all the types for use in other files
export type { 
  MockeryAction,
  MockeryTier,
  TeamColor,
  TeamData,
  LeaderboardUser,
  LeaderboardFilter,
  MockeryEvent,
  MockedUser
};

// Legacy aliases
export type TeamType = TeamColor;

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
