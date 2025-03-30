
// Mockery type definitions

export type MockeryAction = 
  | 'crown'
  | 'challenge'
  | 'eggs'
  | 'shame'
  | 'taunt' 
  | 'jest'
  | 'defeat'
  | 'protection';

// Additional actions that are treated as MockeryAction in the codebase
export const mockeryActionExtensions = [
  'putridEggs',
  'stocks',
  'dunce',
  'silence',
  'courtJester',
  'smokeBomb',
  'glitterBomb',
  'immune',
  'jester',
  'royalPie',
  'jokeCrown',
  'memeFrame',
  'roast',
  'ridicule',
  'humiliate',
  'expose',
  'mock',
  'guillotine',
  'dungeons',
  'removal',
  'target'
] as const;

export type ExtendedMockeryAction = MockeryAction | typeof mockeryActionExtensions[number];

export type MockeryTier = 'basic' | 'standard' | 'premium' | 'elite';

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  targetId: string;
  appliedById: string;
  timestamp: number;
  expires: number;
  isActive: boolean;
  tier: MockeryTier;
  sourceName?: string;
  targetName?: string;
  message?: string;
  duration?: number;
}

export interface ShameAction {
  action: MockeryAction;
  timestamp: number;
  until: number;
}

export interface MockedUser {
  id: string;
  username: string;
  lastMocked: number;
  mockeryStatus: MockeryEvent[];
  displayName?: string;
  avatarUrl?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
}

export interface MockeryEffectData {
  action: MockeryAction;
  user: MockedUser;
  expiration: number;
}

export interface UserMockeryStatus {
  activeEffects: MockeryEvent[];
  immunityUntil: number;
  lastMocked: number;
}
