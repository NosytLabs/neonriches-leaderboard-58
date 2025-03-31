
// Define the base mockery action types
export type MockeryAction = 
  | 'ghost'
  | 'target'
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'crown'
  | 'dragon' 
  | 'demon'
  | 'dunce'
  | 'jester'
  | 'troll'
  | 'peasant'
  | 'rat'
  | 'skeleton'
  | 'zombie'
  | 'witch'
  | 'monster'
  | 'knight'
  | 'king'
  | 'queen'
  | 'bishop'
  | 'rook'
  | 'pawn'
  | 'immune'
  | 'protection'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'jest'
  | 'defeat'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'taunt'
  | 'guillotine'
  | 'removal'
  | 'fool'
  | 'shame'
  | 'challenge'
  | 'dungeons';

// Define extended mockery action type
export type ExtendedMockeryAction = MockeryAction;

// Define mockery tier
export type MockeryTier = 
  | 'basic' 
  | 'common'
  | 'uncommon'
  | 'premium' 
  | 'silver'
  | 'rare' 
  | 'epic' 
  | 'royal' 
  | 'legendary'
  | 'bronze';

// Define shame action for event pages
export type ShameAction = MockeryAction; 

// Define the mockery event interface
export interface MockeryEvent {
  id: string;
  action: MockeryAction;
  targetId: string;
  appliedBy: string;
  expiresAt: string;
  duration: number;
  isActive: boolean;
  appliedAt?: string;
  cost?: number;
  reason?: string;
  type?: string;
  timestamp?: string;
  tier?: string;
}

// Define the mocked user interface
export interface MockedUser {
  id: string;
  username: string;
  action: MockeryAction;
  expiresAt: string;
  appliedAt: string;
  appliedBy: {
    id: string;
    username: string;
  };
  // Additional properties for compatibility
  userId?: string;
  displayName?: string;
  profileImage?: string;
  mockedAction?: MockeryAction;
  mockedBy?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
  mockedUntil?: string;
}

// Define the user mockery state
export interface UserMockeryState {
  isProtected: boolean;
  protectionExpiresAt?: string;
  activeShame?: {
    type: MockeryAction;
    expiresAt: string;
    appliedBy: string;
  };
  history: MockeryEvent[];
  appliedMockery: MockeryEvent[];
}

export type ShameEffectData = {
  username: string;
  action: MockeryAction;
  timestamp: string;
};

// Define useMockery hook return type
export interface UseMockery {
  mockUsers: (targetId: string, action: MockeryAction) => Promise<boolean>;
  isUserProtected: (userId: string) => boolean;
  protectUser: (userId: string) => Promise<boolean>;
  mockUser: (targetId: string, action: MockeryAction) => Promise<boolean>;
  isUserShamed: (userId: string) => boolean;
  getActiveMockery: (userId: string) => MockeryEvent | null;
  getUserMockeryCount: (userId: string) => number;
  getUserMockedOthersCount: (userId: string) => number;
  isUserMocked?: (userId: string) => boolean;
  applyMockery?: (targetId: string, action: MockeryAction) => Promise<boolean>;
}

// Additional type definitions for notification sound options
export interface NotificationSoundOptions {
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
}
