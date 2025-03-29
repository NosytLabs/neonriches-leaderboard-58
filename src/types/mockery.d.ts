
import { ElementType } from 'react';
import { LucideIcon } from 'lucide-react';

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
  | 'shame'
  | 'protection'
  | 'removal';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'premium'
  | 'basic'
  | 'elite';

export type ShameAction = 
  | 'eggs' 
  | 'tomatoes' 
  | 'dunce' 
  | 'stocks'
  | 'ridicule'
  | 'shame'
  | 'silence' // Added silence as a ShameAction
  | 'courtJester'
  | 'jester';

export interface MockeryEffect {
  id: string;
  userId: string;
  action: MockeryAction;
  appliedBy: string;
  timestamp: number;
  until: number;
  tier: MockeryTier;
}

export interface ShameEffect extends MockeryEffect {
  action: ShameAction;
  timestamp: number;
  until: number;
}

export interface MockeryProtection {
  id: string;
  username: string; // Added username
  userId: string;
  startDate: string;
  endDate: string; // Added endDate
  isActive: boolean; // Added isActive
  purchasedBy?: string;
}

export interface MockeryStats {
  userId: string;
  totalMockeries: number;
  mockeryBreakdown: Record<MockeryAction, number>;
  received: number;
  sent: number;
  mostUsed: MockeryAction;
  favoriteTarget?: string;
}

export interface MockeryEvent {
  id: string;
  timestamp: number;
  action: MockeryAction;
  targetUserId: string;
  sourceUserId: string;
  expiry: number;
}

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
}

export interface UserMockeryStatus {
  isMocked: boolean;
  isProtected: boolean;
  mockeries: MockeryEffect[];
  protection?: MockeryProtection;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  lastMocked?: number;
}

export type ExtendedMockeryAction = MockeryAction | ShameAction;
