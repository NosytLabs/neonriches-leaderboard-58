
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

export type ShameAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'silence' 
  | 'courtJester'
  | 'jester'
  | 'dunce'
  | 'roast'
  | 'ridicule'
  | 'taunt';

export type ExtendedMockeryAction = MockeryAction | 'protection' | 'removal';

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
  username: string;
}

export interface MockeryStats {
  totalMockeries: number;
  mostUsedAction: MockeryAction;
  mostMockedUser: string;
  mostExpensiveMockery: number;
  totalSpent: number;
  totalMockery?: number; // Add totalMockery property to fix errors
}
