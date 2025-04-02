
import { 
  MockeryAction, 
  MockeryTier, 
  TeamColor, 
  UserTier, 
  Gender, 
  MockeryUser, 
  MockeryEvent,
  LeaderboardUser,
  LeaderboardFilter
} from './mockery-types';

// Export the types to make them available for importing from this file
export type { 
  MockeryAction, 
  MockeryTier, 
  TeamColor, 
  UserTier, 
  Gender, 
  MockeryUser, 
  MockeryEvent,
  LeaderboardUser,
  LeaderboardFilter
};

// Define MockeryResult type for use in the mockery system
export interface MockeryResult {
  success: boolean;
  message: string;
  cost?: number;
  actionType?: MockeryAction;
  targetId?: string;
  error?: string;
}

// Export legacy aliases for backward compatibility
export type TeamType = TeamColor;
