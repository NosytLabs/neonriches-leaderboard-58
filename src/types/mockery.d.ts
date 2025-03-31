
export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'shame' 
  | 'dungeons' 
  | 'immune' 
  | 'crown' 
  | 'stocks' 
  | 'dunce' 
  | 'jester' 
  // | 'fool' // Removed as it's causing issues
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
  | 'challenge';

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetName?: string;
  appliedBy: string;
  action: MockeryAction;
  timestamp: number;
  duration: number;
  isActive: boolean;
  expiresAt: number;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
}

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'silver' | 'legendary';

// Add a consistent type alias to support legacy code
export type MockeryActionType = MockeryAction;
