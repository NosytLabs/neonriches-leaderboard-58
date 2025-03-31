
export interface NotificationSoundOptions {
  volume?: number;
  loop?: boolean;
  delay?: number;
}

export interface MockeryAction {
  type: string;
  target: string;
  appliedBy: string;
  timestamp: number;
  duration: number;
  isActive: boolean;
}

export type MockeryActionType = 
  | 'tomatoes' 
  | 'eggs' 
  | 'shame' 
  | 'dungeons' 
  | 'immune' 
  | 'crown' 
  | 'stocks' 
  | 'dunce' 
  | 'jester' 
  | 'fool' 
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

export interface MockeryEvent {
  id: string;
  targetId: string;
  targetName?: string;
  appliedBy: string;
  action: MockeryActionType;
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
