
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

export type ShameAction = 'tomatoes' | 'eggs' | 'stocks';

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetName?: string;
  appliedBy: string;
  action: MockeryAction;
  timestamp: string;
  duration?: number;
  expiresAt: string;
  isActive: boolean;
  cost?: number;
}

export interface MockedUser {
  id: string;
  userId?: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  mockedReason?: string;
  mockedTimestamp?: string;
  mockedBy?: string;
  mockedTier?: string;
  mockeryCount?: number;
  lastMocked?: string;
  team?: string;
  tier?: string;
  mockedUntil: string;
}

export type MockeryTier = 'basic' | 'premium' | 'royal' | 'silver' | 'legendary' | 'epic' | 'rare';

// Add a consistent type alias to support legacy code
export type MockeryActionType = MockeryAction;
