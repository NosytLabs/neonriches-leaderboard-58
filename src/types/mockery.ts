
export type MockeryAction = 
  | 'tomatoes'
  | 'putridEggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'dunce'
  | 'protection'
  | 'smokeBomb'
  | 'royalPie'
  | 'glitterBomb'
  | 'jokeCrown'
  | 'memeFrame'
  | 'eggs'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'immune';

export type ShameAction = 
  | 'tomatoes'
  | 'putridEggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'dunce'
  | 'protection'
  | 'smokeBomb'
  | 'royalPie'
  | 'glitterBomb'
  | 'jokeCrown'
  | 'memeFrame'
  | 'eggs'
  | 'ridicule'
  | 'shame';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'premium';

export interface MockeryEffect {
  action: MockeryAction;
  timestamp: number;
  until: number;
}

export interface MockedUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: number;
  mockeryCount?: number;
}

export interface MockeryStats {
  totalMockeriesReceived: number;
  totalMockeriesSent: number;
  mostReceivedAction: MockeryAction;
  mostSentAction: MockeryAction;
  longestEffect: {
    action: MockeryAction;
    duration: number;
  };
}

export interface MockeryEvent {
  id: string;
  sourceUserId: string;
  targetUserId: string;
  action: MockeryAction;
  timestamp: number;
  expiresAt: number;
}

export interface MockUser {
  id: string;
  username: string;
  tier?: UserTier;
}

export type ExtendedMockeryAction = MockeryAction | string;
