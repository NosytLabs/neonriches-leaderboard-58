
// Define the mockery types

export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'shame'
  | 'taunt'
  | 'jest'
  | 'crown'
  | 'challenge'
  | 'defeat'
  | 'protection'
  // Extended action types
  | 'putridEggs'
  | 'stocks'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'immune'
  | 'jester'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'royalPie'
  | 'target';

export type ShameAction = MockeryAction;
export type ExtendedMockeryAction = MockeryAction;

export type MockeryTier = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond';

export interface MockeryEvent {
  id: string;
  actionId: string;
  action: MockeryAction;
  sourceId: string; // User who applied the mockery
  sourceName?: string; // Username who applied the mockery
  targetId: string; // User who received the mockery
  targetUserId?: string; // Alternative name for targetId
  timestamp: number;
  until: number; // When the mockery expires
  tier: MockeryTier;
  visible: boolean;
  cost: number;
  isActive?: boolean;
  active?: boolean;
  appliedById?: string;
  appliedAt?: string;
  expiresAt?: string;
}

export interface MockeryProtection {
  userId: string;
  startTime: number;
  endTime: number;
  level: number;
}

export interface MockedUser {
  id: string;
  username: string;
  mockeryCount: number;
  lastMocked: string;
  mockeryStatus: 'mocked' | 'protected' | 'none';
}

export interface MockeryEffectData {
  action: MockeryAction;
  timestamp: number;
  until: number;
}

export interface UserMockeryStatus {
  protected: boolean;
  protectionExpires?: number;
  currentMockery?: MockeryEffectData;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  mockeryCount?: number;
  lastMocked?: string;
}
