
// Consolidated mockery types to replace inconsistent definitions across the codebase

// Mockery action types
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
  | 'shame';  // For backward compatibility

// For backwards compatibility
export type ShameAction = MockeryAction;
export type ExtendedMockeryAction = MockeryAction;

// Mockery tiers for categorizing actions
export type MockeryTier = 
  | 'basic' 
  | 'premium' 
  | 'royal' 
  | 'legendary'
  | 'rare'
  | 'epic'
  | 'silver'
  | 'common'
  | 'uncommon';

// Extended mockery tiers for broader categorization
export type ExtendedMockeryTier = MockeryTier;

// User who has been mocked
export interface MockedUser {
  id?: string;
  userId?: string;
  username: string;
  displayName: string;
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedUntil: string;
  mockedBy: string;
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
  sourceId?: string; // For backward compatibility
  timestamp?: string; // For backward compatibility
  tier?: string; // For backward compatibility
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
