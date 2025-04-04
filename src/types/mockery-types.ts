
// Team colors available in the system
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'none';

// User tier levels
export type UserTier = 
  | 'basic' 
  | 'bronze' 
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'diamond' 
  | 'royal';

// Gender options for user profiles
export type Gender = 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';

// Mockery action types
export type MockeryAction = 
  | 'mock'
  | 'thumbsDown'
  | 'tomato'
  | 'shame'
  | 'rotten_tomato' 
  | 'royal_decree'
  | 'public_mockery'
  | 'challenge'
  | 'joust'
  | 'duel';

// Mockery result types
export interface MockeryResult {
  success: boolean;
  message: string;
  cost?: number;
  effect?: string;
  targetId?: string;
}

// Mockery tier system
export type MockeryTier = 'basic' | 'advanced' | 'royal';

// Mockery event types
export interface MockeryEvent {
  id: string;
  actionType: MockeryAction;
  source: string;
  target: string;
  timestamp: string;
  status: 'pending' | 'completed' | 'failed';
}

// Leaderboard user interface
export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  previousRank?: number;
  amountSpent: number;
  team?: TeamColor;
  tier?: UserTier;
  spendingHistory?: number[];
}

// Filter options for leaderboard
export type LeaderboardFilter = 
  | 'all'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'team-red'
  | 'team-blue'
  | 'team-green';

// Leaderboard search and filter options
export interface LeaderboardOptions {
  filter?: LeaderboardFilter;
  search?: string;
  team?: TeamColor | null;
}

// Mock user for mockery operations
export interface MockeryUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  team?: TeamColor;
  tier?: UserTier;
  immunityPoints?: number;
}

// Define team data for team-related operations
export interface TeamData {
  id: TeamColor;
  name: string;
  color: string;
  members: number;
  totalSpent: number;
  description: string;
  motto: string;
  icon: string;
}
