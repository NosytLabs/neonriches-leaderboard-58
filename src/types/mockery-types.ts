
// Core mockery actions - unified definition
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'protection'
  | 'shame'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'dunce'
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'ghost'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'dragon'
  | 'jest'
  | 'challenge'
  | 'defeat'
  | 'taunt'
  | 'target'
  | 'immune';

// Mockery tiers - unified definition
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'royal'
  | 'silver'
  | 'bronze';

// For extended actions used in the UI but not in the core system
export type ExtendedMockeryAction = MockeryAction;

// Team colors
export type TeamColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'none'
  | 'neutral';

// Alias for backward compatibility 
export type ShameAction = MockeryAction;

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
  return [
    'tomatoes', 'eggs', 'crown', 'stocks', 'jester', 'protection', 'shame',
    'putridEggs', 'silence', 'courtJester', 'smokeBomb', 'glitterBomb',
    'dunce', 'troll', 'peasant', 'rat', 'ghost', 'skeleton', 'zombie',
    'witch', 'monster', 'dragon', 'jest', 'challenge', 'defeat', 'taunt',
    'target', 'immune'
  ].includes(action as MockeryAction);
};

// Helper function to check if a string is a valid MockeryTier
export const isValidMockeryTier = (tier: string): tier is MockeryTier => {
  return ['common', 'uncommon', 'rare', 'epic', 'legendary', 'basic', 'premium', 'royal', 'silver', 'bronze'].includes(tier as MockeryTier);
};
