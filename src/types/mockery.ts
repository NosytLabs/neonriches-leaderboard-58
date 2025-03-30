
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'silence' 
  | 'courtJester' 
  | 'smokeBomb' 
  | 'protection' 
  | 'immune' 
  | 'glitterBomb'
  | 'target'
  | 'challenge'
  | 'jest'
  | 'crown'
  | 'defeat';

export type MockeryTier = 'basic' | 'premium' | 'royal';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetId: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
  active: boolean;
  tier?: MockeryTier;
}

export interface MockedUser {
  username: string;
  displayName?: string;
  avatarUrl?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount: number;
}
