
import { UserTier } from '@/types/user';

// Define the mockery action types
export type MockeryAction = 
  | 'shame'
  | 'taunt'
  | 'jest'
  | 'crown'
  | 'challenge'
  | 'defeat'
  | 'protection'
  | 'tomatoes'
  | 'putridEggs'
  | 'eggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'dunce'
  | 'smokeBomb'
  | 'immune'
  | 'jester'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'mock'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'expose'
  | 'target';

// Define the mockery tier types
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'elite' | 'premium';

// Define the mockery event interface
export interface MockeryEvent {
  id: string;
  userId: string;
  targetId?: string;
  action: MockeryAction;
  timestamp: number;
  duration: number;
  active: boolean;
  expiry: number;
  tier?: MockeryTier;
  sourceId?: string;
  appliedById?: string;
  appliedAt?: number;
  expiresAt?: number;
}

// Define the mockery status interface
export interface MockeryStatus {
  userId: string;
  activeEffects: MockeryEvent[];
  cooldowns: Record<MockeryAction, number>;
  protection: {
    active: boolean;
    until: number;
  };
}

// Define a mock user for testing
export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: UserTier;
  lastMocked?: string;
  mockeryCount?: number;
  rank?: number;
}

// Define the public shaming actions
export type ShameAction = 'shame' | 'protection' | 'taunt' | 'tomatoes' | 'eggs' | 'putridEggs' | 'stocks' | 'ridicule' | 'silence' | 'courtJester' | 'jester' | 'dunce';

// Define extended mockery action (for compatibility)
export type ExtendedMockeryAction = MockeryAction;

// Define mockery effect data
export interface MockeryEffectData {
  type: MockeryAction;
  duration: number;
  strength: number;
  appliedBy: string;
  timestamp: number;
}

// Define user mockery status
export type UserMockeryStatus = MockeryStatus;
