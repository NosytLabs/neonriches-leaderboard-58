
// Unified mockery types for the entire application

// Mockery action types - comprehensive list of all possible actions
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'putridEggs'
  | 'dungeons' 
  | 'immune' 
  | 'crown' 
  | 'stocks' 
  | 'dunce' 
  | 'jester' 
  | 'courtJester'
  | 'jest'
  | 'troll' 
  | 'peasant' 
  | 'rat' 
  | 'ghost' 
  | 'skeleton' 
  | 'zombie' 
  | 'witch' 
  | 'monster' 
  | 'demon' 
  | 'dragon' 
  | 'king' 
  | 'queen' 
  | 'knight' 
  | 'bishop' 
  | 'rook' 
  | 'pawn' 
  | 'target' 
  | 'challenge'
  | 'protection'
  | 'silence'
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
  | 'defeat'
  | 'removal'
  | 'shame';  

// For backwards compatibility
export type ShameAction = MockeryAction;

// Mockery tiers for categorizing actions
export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'legendary'
  | 'rare'
  | 'epic'
  | 'common'
  | 'uncommon'
  | 'silver';

// User who has been mocked
export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage?: string;
  mockedBy: string;
  mockedAction?: MockeryAction;
  mockedUntil: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
  rank?: number;
}

// Active mockery event
export interface MockeryEvent {
  id: string;
  targetId: string;
  appliedBy: string;
  action: MockeryAction;
  isActive: boolean;
  createdAt: string;
  expiresAt: string;
  duration?: number;
  metadata?: Record<string, any>;
}

// Extended mockery action type for broader compatibility
export type ExtendedMockeryAction = MockeryAction | string;

// Sound options for mockery effects
export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  playbackRate?: number;
}

// Shape of available mockery data
export interface MockeryData {
  users: MockedUser[];
  events: MockeryEvent[];
  protectedUsers: string[];
  cooldowns: Record<string, string>;
}

// Mockery hook return type
export interface UseMockeryReturn {
  mockUsers: MockedUser[];
  mockeryEvents: MockeryEvent[];
  isLoading: boolean;
  error: string | null;
  mockUser: (userId: string, targetUsername: string, action: MockeryAction) => boolean;
  protectUser: (username: string) => boolean;
  isUserProtected: (username: string) => boolean;
  isUserShamed: (username: string) => boolean;
  canUserBeMocked: (username: string) => boolean;
  getActiveMockery: (username: string) => MockeryEvent | null;
  getUserMockeryCount: (username: string) => number;
  getUserMockedOthersCount: (username: string) => number;
  applyMockery: (targetId: string, action: MockeryAction) => Promise<boolean>;
  removeMockery: (targetId: string) => Promise<boolean>;
}
