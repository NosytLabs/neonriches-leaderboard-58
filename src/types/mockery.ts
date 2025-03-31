
// Define mockery types for the SpendThrone app

// Types of mockery actions
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks' 
  | 'crown' 
  | 'jester'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'shame'
  | 'protection';

// Tiers of mockery items
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// Mockery action result
export interface MockeryResult {
  success: boolean;
  message: string;
  cost: number;
  timestamp: string;
  expiresAt: string;
  type: MockeryAction;
  target: {
    id: string;
    username: string;
  };
  sender: {
    id: string;
    username: string;
  };
}

// Interface for mockery in progress
export interface ActiveMockery {
  id: string;
  targetId: string;
  targetUsername: string;
  senderId: string;
  senderUsername: string;
  type: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  cost: number;
}

// Color themes for each mockery type
export interface MockeryColorTheme {
  main: string;
  highlight: string;
  shadow: string;
  background: string;
  text: string;
}

// For compatibility with other modules
export type { TeamColor, TeamType, NotificationSoundOptions } from '@/types/team';
