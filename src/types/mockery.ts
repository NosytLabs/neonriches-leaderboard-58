
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'elite';

export type MockeryAction = 
  | 'tomatoes' 
  | 'putridEggs' // Renamed from 'eggs'
  | 'stocks' 
  | 'silence' 
  | 'courtJester' 
  | 'jester' 
  | 'protection' 
  | 'immune' 
  | 'dunce' 
  | 'drama' 
  | 'taunt'
  | 'removal'
  | 'smokeBomb'; // Added new smoke bomb effect

export type ShameAction = 
  | 'tomatoes' 
  | 'putridEggs' // Renamed from 'eggs'
  | 'silence' 
  | 'roast' 
  | 'ridicule' 
  | 'stocks' 
  | 'courtJester' 
  | 'jester' 
  | 'shame' 
  | 'dunce'
  | 'smokeBomb'; // Added new smoke bomb effect

export type ExtendedMockeryAction = 
  | MockeryAction 
  | 'protected' 
  | 'immune' 
  | 'jester' 
  | 'dunce' 
  | 'roast' 
  | 'ridicule' 
  | 'taunt' 
  | 'drama'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary';

export interface MockeryEffect {
  id: string;
  type: MockeryAction;
  appliedBy: string;
  appliedTo: string;
  appliedAt: Date;
  expiresAt: Date;
  active: boolean;
  tier: MockeryTier;
  price: number;
  description?: string; // Added description field for better explanation
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  appliedBy: string;
  appliedTo: string;
  timestamp: Date;
  message?: string;
  sourceUser?: string;
  targetUser?: string;
  action?: MockeryAction;
  mockeryCount?: number; // Added field to track times user has been mocked
}

export interface MockeryEffectData {
  action: MockeryAction;
  timestamp: number;
  until: number;
  appliedBy?: string; // Added to track who applied the mockery
  description?: string; // Added for better explanation
}

export interface UserMockeryStatus {
  activeEffects: MockeryEffectData[];
  cooldowns: Record<MockeryAction, number>;
  protection?: boolean;
  immunityUntil?: number;
  mockeryCount: number; // Total times user has been mocked
  mockedOthersCount: number; // Total times user has mocked others
}

export interface MockUser {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  rank: number;
  lastMocked?: string; // Added to track last time mocked
  tier?: string; // Added to track user tier
  mockeryCount?: number; // Added to track total times mocked
}
