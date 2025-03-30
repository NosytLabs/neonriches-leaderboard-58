
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs' 
  | 'stocks' 
  | 'silence' 
  | 'courtJester' 
  | 'dunce' 
  | 'jester'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'protection'
  | 'immune'
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

// Define ShameAction to be the same as MockeryAction for compatibility
export type ShameAction = MockeryAction;

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'premium';

export interface MockeryEvent {
  id: string;
  sourceId: string;
  targetId: string;
  action: MockeryAction;
  appliedAt: Date;
  expiresAt: Date;
  isActive: boolean;
}

export interface MockUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  team?: 'red' | 'green' | 'blue' | null;
  rank?: number;
  lastMocked?: Date;
  mockeryCount?: number;
  displayName?: string;
}

export interface MockedUser {
  username: string;
  displayName: string;
  avatarUrl?: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount: number;
}

export interface UserMockeryStatus {
  username: string;
  isProtected: boolean;
  protectionExpiresAt?: Date;
  isMocked: boolean;
  mockeryAction?: MockeryAction;
  mockeryExpiresAt?: Date;
  mockeryCount: number;
  mockedOthersCount: number;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration: number;
}

// Export ExtendedMockeryAction for backward compatibility
export type ExtendedMockeryAction = MockeryAction;
