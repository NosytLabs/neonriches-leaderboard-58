
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
  | 'defeat'
  | 'jester'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'shame'
  | 'taunt'
  | 'guillotine'
  | 'dungeons'
  | 'removal';

export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetId: string;
  sourceId?: string;
  sourceUsername?: string;
  targetUsername?: string;
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
  active: boolean;
  isActive?: boolean;
  tier?: MockeryTier;
  appliedAt?: string;
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

export type ShameAction = 
  | 'tomatoes'
  | 'eggs'
  | 'putridEggs'
  | 'stocks'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'shame'
  | 'protection'
  | 'taunt'
  | 'ridicule'
  | 'jester';

export type ExtendedMockeryAction = MockeryAction | ShameAction;

export interface MockeryEffectData {
  id: string;
  action: MockeryAction;
  targetUsername: string;
  sourceUsername: string;
  timestamp: number;
  duration: number;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionExpiresAt: number;
  activeMockeries: MockeryEvent[];
}

export type MockUser = MockedUser;
