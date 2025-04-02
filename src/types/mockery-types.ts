
import { TeamColor } from "./team";

// Define UserTier since it's used in MockedUser
export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
  | 'legendary'
  | 'founder'
  | 'platinum'
  | 'diamond'
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'vip'
  | 'whale'
  | 'shark'
  | 'dolphin'
  | 'noble'
  | 'standard'
  | 'elite';

export type MockeryAction = 
  | 'taunt'
  | 'shame'
  | 'jester'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'tomato' 
  | 'egg' 
  | 'crown'
  | 'stocks'
  | 'putridEgg'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'thumbsDown';

// Legacy MockeryAction aliases
export type LegacyMockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs';

// Conversion function
export function normalizeMockeryAction(action: MockeryAction | LegacyMockeryAction): MockeryAction {
  if (action === 'tomatoes') return 'tomato';
  if (action === 'eggs') return 'egg';
  if (action === 'putridEggs') return 'putridEgg';
  return action as MockeryAction;
}

export interface LeaderboardUser {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage: string;
  totalSpent: number;
  rank: number;
  team: TeamColor;
  tier: UserTier | string;
  spendStreak: number;
  walletBalance?: number;
  previousRank?: number;
  joinDate?: string;
  isVerified?: boolean;
}

export interface LeaderboardFilter {
  team: TeamColor | 'all' | string;
  tier: string;
  timeframe: string;
  search: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  limit?: number;
}

export interface MockeryEvent {
  id: string;
  fromUser?: string;
  toUser?: string;
  action: MockeryAction | LegacyMockeryAction;
  timestamp: string;
  isAnonymous?: boolean;
  message?: string;
  appliedBy?: string;
  seen?: boolean;
  targetId?: string;
  fromId?: string;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  profileImage: string;
  tier: UserTier | string;
  team: TeamColor;
  action: MockeryAction | LegacyMockeryAction;
  appliedAt: string;
  expiresAt: string;
  displayName?: string;
  reason?: string;
  totalSpent?: number;
  rank?: number;
  spendStreak?: number;
  appliedBy?: string; // Add this property
}

// Helper function to convert a legacy action to a new action
export function convertLegacyAction(action: MockeryAction | LegacyMockeryAction): MockeryAction {
  if (action === 'tomatoes') return 'tomato';
  if (action === 'eggs') return 'egg';
  if (action === 'putridEggs') return 'putridEgg';
  return action as MockeryAction;
}

// Re-export for consistency
export { TeamColor };
export type { LeaderboardUser, LeaderboardFilter, MockedUser, MockeryEvent, UserTier };
