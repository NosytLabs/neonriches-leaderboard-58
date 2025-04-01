
/**
 * Types of mockery actions that can be performed
 */
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'crown'
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
  | 'duel';

/**
 * Mockery tier types for rarity and quality
 */
export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'silver'
  | 'bronze';

/**
 * Mockery target types
 */
export interface MockeryTarget {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  tier?: string;
}

/**
 * Mocked user data
 */
export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  tier?: string;
  team?: TeamColor;
}

/**
 * Mockery event interface
 */
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  fromId: string;
  timestamp: string;
  isAnonymous: boolean;
  message?: string;
  duration?: number;
}

/**
 * Available mockery effects
 */
export interface MockeryEffect {
  id: string;
  name: string;
  action: MockeryAction;
  description: string;
  price: number;
  tier: string;
  requiredRank?: number;
  duration?: number;
  icon?: string;
  cssClass?: string;
}

/**
 * Team color types for users and groups
 */
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none' 
  | 'neutral'
  | 'silver'
  | 'bronze';
