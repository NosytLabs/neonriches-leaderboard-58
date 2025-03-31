
// Core mockery actions - simplified definition
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'protection'
  | 'shame';

// Mockery tiers - simplified definition
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

// Team colors
export type TeamColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'none'
  | 'neutral';

// Mockery event represents an instance of mockery applied to a user
export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  duration: number;
  isActive: boolean;
  cost?: number;
  tier?: MockeryTier;
  timestamp?: string;
}

// Represents a user who has been mocked
export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  team?: TeamColor;
  action?: MockeryAction;
  appliedBy?: string;
  appliedAt?: string;
  expiresAt?: string;
  reason?: string;
}

// Data structure for visual effects
export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

// Helper function to check if a string is a valid MockeryAction
export const isValidMockeryAction = (action: string): action is MockeryAction => {
  return ['tomatoes', 'eggs', 'crown', 'stocks', 'jester', 'protection', 'shame'].includes(action as MockeryAction);
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  return ['common', 'uncommon', 'rare', 'epic', 'legendary'].includes(tier as MockeryTier);
};
