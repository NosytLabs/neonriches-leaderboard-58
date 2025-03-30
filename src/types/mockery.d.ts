
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
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

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

export type ShameAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'shame' 
  | 'protection' 
  | 'taunt' 
  | 'putridEggs' 
  | 'dunce' 
  | 'ridicule' 
  | 'silence' 
  | 'courtJester' 
  | 'jester';

export type ExtendedMockeryAction = MockeryAction;

export interface ExtendedMockeryTier extends MockeryTier {
  common: string;
  uncommon: string;
  rare: string;
  epic: string;
  legendary: string;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration?: number;
  tier?: MockeryTier;
  strength?: number;
}

export interface UserMockeryStatus {
  protected: boolean;
  protectedUntil?: string;
  activeEffects: MockeryEvent[];
  totalReceived: number;
  totalApplied: number;
}

export interface MockUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: string;
  mockeryCount?: number;
}
