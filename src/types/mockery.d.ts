
import { ElementType } from 'react';

export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'silence' 
  | 'courtJester'
  | 'jester'
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'protected'
  | 'immune'
  | 'dunce'
  | 'roast'
  | 'ridicule'
  | 'taunt'
  | 'protection'
  | 'removal';

export type ShameAction = MockeryAction;

export type ExtendedMockeryAction = MockeryAction;

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'basic'
  | 'premium'
  | 'elite';

export interface MockeryEvent {
  id: string;
  targetUser: string;
  action: MockeryAction;
  mockingUser: string;
  timestamp: string;
  expiresAt: string;
  price: number;
  tier: MockeryTier;
  isActive: boolean;
  description?: string;
}

export interface ShameEffect {
  action: ShameAction;
  timestamp: number;
  until: number;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  tier?: MockeryTier;
  title?: string;
  description?: string;
  price?: number;
  icon?: string;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  isMocked: boolean;
  mockedUntil?: string;
  protectedUntil?: string;
  activeMockeries?: MockeryEvent[];
}

export interface MockUser {
  id: string;
  username: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: Date;
}

export interface MockeryProtection {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  username?: string;
  expiresAt?: number;
}

export interface MockeryStats {
  totalMockeries: number;
  mostUsedAction: MockeryAction;
  mostMockedUser: string;
  mostExpensiveMockery: number;
  totalSpent: number;
  totalMockery?: number;
}
