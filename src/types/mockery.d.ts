
// Define basic Mockery types
export type MockeryTier = 
  | 'bronze' 
  | 'silver' 
  | 'gold' 
  | 'platinum' 
  | 'diamond' 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'royal';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'protection' 
  | 'silence' 
  | 'courtJester' 
  | 'immune' 
  | 'jest' 
  | 'defeat'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'jester'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'shame'
  | 'taunt'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'target'
  | 'challenge'
  | 'crown';

export type ShameAction = MockeryAction;
export type ExtendedMockeryAction = MockeryAction;

export interface MockedUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank?: number;
  team?: string;
  tier?: string;
  mockeryCount?: number;
  lastMocked?: string;
}

export type MockUser = MockedUser;

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetName: string;
  sourceId?: string;
  sourceName?: string;
  action: MockeryAction;
  startTime?: string | Date;
  endTime?: string | Date;
  appliedAt?: string;
  expiresAt?: string;
  active: boolean;
  isActive?: boolean;
  tier?: MockeryTier;
  timestamp?: string;
  userId?: string;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  duration?: number;
  tier?: MockeryTier;
}

export interface UserMockeryStatus {
  username: string;
  protected: boolean;
  mockeryEffects: MockeryEvent[];
  mockeryCount: number;
  protectionUntil?: string | Date;
}
