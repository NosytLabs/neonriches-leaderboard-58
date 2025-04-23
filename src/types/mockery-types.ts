
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown' 
  | 'stocks' 
  | 'jester' 
  | 'shame' 
  | 'target' 
  | 'mock';

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'legendary';

export interface MockeryResult {
  success: boolean;
  message: string;
  cost: number;
  targetId: string;
  action: MockeryAction;
  timestamp: string;
}

export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  sourceId: string;
  timestamp: string;
  message?: string;
}

export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'silver' 
  | 'bronze' 
  | 'neutral' 
  | 'none' 
  | null;

export type UserTier = 
  | 'free' 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'gold' 
  | 'silver'
  | 'bronze'
  | 'elite'
  | 'pro';

export type Gender = 'male' | 'female' | 'other' | 'prefer-not-to-say';

export type LeaderboardFilter = 'daily' | 'weekly' | 'monthly' | 'all-time' | string;

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  rank: number;
  amount: number;
  team?: TeamColor;
  tier?: UserTier;
  avatarUrl?: string;
  profileImage?: string;
}
