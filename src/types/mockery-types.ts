
// MockeryAction represents the different types of mockery actions available
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown' 
  | 'stocks' 
  | 'jester'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'shame'
  | 'protection'
  | 'challenge'
  | 'taunt'
  | 'mock'
  | 'joust'
  | 'duel';

// MockeryTier represents the rarity/quality of mockery actions
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'royal';

// TeamColor represents the different team colors available
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'silver' | 'bronze' | 'none' | 'neutral';

// MockedUser interface for storing basic user information that has been mocked
export interface MockedUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  team?: TeamColor;
  rank?: number;
  displayName?: string;
  userId?: string;
  action?: MockeryAction;
  appliedAt?: string;
  expiresAt?: string;
  appliedBy?: string;
}

// MockeryEvent interface for storing mockery events
export interface MockeryEvent {
  id: string;
  targetUserId: string;
  sourceUserId: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt?: string;
  type?: string;
  appliedBy?: string;
}

// Mock timing details
export interface MockeryTiming {
  duration: number; // in hours
  cooldown: number; // in hours
}

// Price structure for mockery actions
export type MockeryPrices = Record<MockeryAction, number>;

// Duration structure for mockery actions
export type MockeryDurations = Record<MockeryAction, number>;
