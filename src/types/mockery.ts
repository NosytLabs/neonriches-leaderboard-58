
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs' 
  | 'stocks' 
  | 'silence' 
  | 'jester' 
  | 'courtJester' 
  | 'dunce' 
  | 'roast' 
  | 'ridicule' 
  | 'taunt' 
  | 'drama' 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary' 
  | 'protected' 
  | 'immune'
  | 'protection'
  | 'removal';

export interface MockeryEvent {
  id: string;
  sourceId: string;
  sourceUsername: string;
  targetId: string;
  targetUsername: string;
  action: MockeryAction;
  timestamp: number;
  expiresAt: number;
  sourceUser?: string;
  targetUser?: string;
}

export interface MockedUser {
  userId: string;
  username: string;
  profileImage?: string;
  mockery: MockeryEvent | null;
  isProtected: boolean;
  protectionExpiresAt: number | null;
  tier?: string;
  lastMocked?: number;
  mockedTimestamp?: number;
  mockedReason?: string;
  mockedBy?: string;
  mockedTier?: MockeryTier;
  displayName?: string;
}

export interface MockeryStats {
  totalMockeries: number;
  activeShames: number;
  popularShames: Record<MockeryAction, number>;
  mostShamedUser: {
    username: string;
    count: number;
  } | null;
  mostShamingUser: {
    username: string;
    count: number;
  } | null;
}

export type ExtendedMockeryAction = MockeryAction;
export type MockeryTier = 'basic' | 'premium' | 'elite' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ShameAction = MockeryAction;
export interface MockeryEffectData {
  action: MockeryAction;
  tier: MockeryTier;
  title: string;
  description: string;
  price: number;
  icon: string;
}

export type UserMockeryStatus = 'active' | 'expired' | 'protected';
export type MockUser = MockedUser;
export type MockeryProtection = {
  userId: string;
  expiresAt: number;
  level: number;
};

export interface ShameEffect {
  action: ShameAction;
  timestamp: number;
  until: number;
}
