
/**
 * Type definitions for mockery feature
 */

export type MockeryAction = 
  | 'tomato'
  | 'egg'
  | 'rotten_egg'
  | 'flame'
  | 'heart'
  | 'thumbs_down' 
  | 'laugh'
  | 'skull'
  | 'crown'
  | 'putridEgg'
  | 'stocks'
  | 'jester'
  | 'shame'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'taunt'
  | 'mock'
  | 'challenge'
  | 'joust'
  | 'duel'
  | 'fish'
  | 'thumbsDown';

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal';

export interface MockeryEventBase {
  id: string;
  action: MockeryAction;
  fromUserId: string;
  toUserId: string;
  timestamp: string;
  tier?: MockeryTier;
  message?: string;
  isAnonymous?: boolean;
}

export interface MockeryEvent extends MockeryEventBase {
  fromUser?: MockedUser;
  toUser?: MockedUser;
}

export interface MockedUser {
  id: string;
  username: string;
  displayName: string;
  profileImage: string;
  team: TeamColor;
  tier: UserTier;
  rank?: number;
}

export type TeamColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'none'
  | 'neutral'
  | 'silver'
  | 'bronze'
  | 'crimson';

export type UserTier = 
  | 'free'
  | 'basic'
  | 'pro'
  | 'premium'
  | 'royal'
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
  | 'elite'
  | 'legendary';

export type Gender = 
  | 'male'
  | 'female'
  | 'non-binary'
  | 'other'
  | 'prefer-not-to-say'
  | 'king'
  | 'queen'
  | 'jester'
  | 'noble';

// Define the leaderboard filter interface
export interface LeaderboardFilter {
  team: TeamColor | 'all';
  tier: UserTier | 'all';
  timeframe: 'year' | 'month' | 'week' | 'all-time' | 'today';
  search: string;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  limit: number;
}

// Define mock results interface
export interface MockeryResult {
  success: boolean;
  event?: MockeryEvent;
  error?: string;
  mockeryText?: string;
  victim?: MockedUser;
  mocker?: MockedUser;
}
