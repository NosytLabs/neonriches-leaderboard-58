
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
  | 'memeFrame';

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
  | 'memeFrame';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

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
