
import { TeamType, UserTier } from './user';

export type MockeryTier = 'standard' | 'premium' | 'royal';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'crown' 
  | 'jester' 
  | 'stocks'
  | 'protection';

export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  userId: string;
  tier: UserTier;
  team: TeamType;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  reason?: string;
  mockeryCount?: number;
}

export interface MockeryEvent {
  id: string;
  targetId: string;
  actorId: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  tier: MockeryTier;
  cost: number;
}

export interface ShameEffectData {
  username: string;
  action: MockeryAction;
  isActive: boolean;
  timestamp?: string;
}

export type NotificationSoundOptions = {
  volume?: number;
  loop?: boolean;
  rate?: number;
}

// Helper function to check if a string is a valid MockeryAction
export const isValidMockeryAction = (action: string): action is MockeryAction => {
  const validActions: MockeryAction[] = ['tomatoes', 'eggs', 'crown', 'jester', 'stocks', 'protection'];
  return validActions.includes(action as MockeryAction);
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  const validTiers: MockeryTier[] = ['standard', 'premium', 'royal'];
  return validTiers.includes(tier as MockeryTier);
};
