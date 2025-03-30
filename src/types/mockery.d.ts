
export type MockeryAction = 
  | 'target'
  | 'challenge'
  | 'crown'
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'putridEggs'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'protection'
  | 'immune'
  | 'jest'
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

export type ShameAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'putridEggs'
  | 'dunce'
  | 'shame'
  | 'protection'
  | 'taunt'
  | 'ridicule'
  | 'silence'
  | 'courtJester'
  | 'jester';

export type ExtendedMockeryAction = MockeryAction | ShameAction;

export type MockeryTier = 
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'royal'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export interface MockeryEvent {
  id: string;
  mockeryType: MockeryAction;
  targetId: string;
  targetUsername: string;
  sourceId?: string;
  sourceUsername: string;
  timestamp: number;
  expiresAt: number;
  active: boolean;
  tier: MockeryTier;
}

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

export interface MockedUser {
  id: string;
  username: string;
  displayName: string;
  avatarUrl: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier: string;
  mockeryCount: number;
}

export interface MockUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: number;
  mockeryCount?: number;
}
