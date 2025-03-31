
// Consolidated mockery types to replace inconsistent definitions across the codebase

// Mockery action types
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'dungeons' 
  | 'immune' 
  | 'crown' 
  | 'stocks' 
  | 'dunce' 
  | 'jester' 
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
  | 'protection';

// Additional mockery actions for extended functionality
export type ExtendedMockeryAction = MockeryAction 
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'jest'
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
  | 'removal';

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
  | 'silver';

// Extended mockery tiers for broader categorization
export type ExtendedMockeryTier = MockeryTier
  | 'common'
  | 'uncommon';

// User who has been mocked
export interface MockedUser {
  id?: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp: string;
  mockedUntil: string;
  mockedBy: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
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
