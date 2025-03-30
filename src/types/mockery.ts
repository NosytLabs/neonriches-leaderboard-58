
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
  | 'taunt'
  | 'ridicule'
  | 'shame'
  | 'mock'
  | 'humiliate'
  | 'expose'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'roast'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame';

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
  action: MockeryAction;
  timestamp: string;
  expiresAt: string;
  active: boolean;
  tier?: MockeryTier;
  sourceId?: string;
  appliedAt?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
}

export interface MockedUser {
  username: string;
  displayName?: string;
  avatarUrl?: string;
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  id?: string;
  rank?: number;
  team?: string;
  tier?: string;
}

// Add ShameAction type alias
export type ShameAction = MockeryAction;

// Add MockUser type alias
export type MockUser = MockedUser;

// Add MockeryEffectData interface
export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration?: number;
  tier?: MockeryTier;
}

// Add UserMockeryStatus interface
export interface UserMockeryStatus {
  username: string;
  protected: boolean;
  mockeryEffects: MockeryEvent[];
  mockeryCount: number;
  protectionUntil?: string | Date;
}

// Add ExtendedMockeryAction type alias
export type ExtendedMockeryAction = MockeryAction;
