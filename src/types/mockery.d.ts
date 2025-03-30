
// Mockery actions
export type ShameAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'protection'
  | 'putridEggs'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'shame'
  | 'taunt'
  | 'ridicule'
  | 'jester'
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

export type MockeryAction = ShameAction;

export type MockeryTier =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond';

export interface MockeryEvent {
  id: string;
  userId: string;
  targetUserId: string;
  mockeryType: MockeryAction;
  createdAt: string;
  appliedAt?: string;
  expiresAt?: string;
  isActive: boolean;
  action?: MockeryAction;
  tier?: MockeryTier;
  active?: boolean;
  cost?: number;
  duration?: number;
  appliedById?: string;
  sourceId?: string;
  sourceName?: string;
  targetId?: string;
  targetName?: string;
}

export interface MockUser {
  id: string;
  username: string;
  profileImage?: string;
  team?: string;
  tier?: string;
  mockeryCount?: number;
  lastMocked?: string;
}

export interface MockedUser {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  profileImage: string;
  mockedReason: string;
  mockedTimestamp: string;
  mockedBy: string;
  mockedTier: string;
  mockeryCount: number;
  lastMocked?: string;
  team?: string;
}

export type ExtendedMockeryAction = MockeryAction;

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  timestamp?: number;
  until?: number;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionExpires?: string;
  activeMockery?: MockeryEffectData;
  totalMockeryReceived: number;
  totalMockeryGiven: number;
}
