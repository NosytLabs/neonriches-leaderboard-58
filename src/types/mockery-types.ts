
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
 * Mockery target types
 */
export type MockeryTarget = {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  tier?: string;
};

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
