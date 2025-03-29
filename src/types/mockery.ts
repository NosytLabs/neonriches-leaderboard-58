
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'elite';

export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester' | 'jester' | 'protection' | 'immune' | 'dunce' | 'drama' | 'taunt';

export type ShameAction = 'tomatoes' | 'eggs' | 'silence' | 'roast' | 'ridicule' | 'stocks' | 'courtJester' | 'jester' | 'shame' | 'dunce';

export type ExtendedMockeryAction = MockeryAction | 'protected' | 'immune' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt' | 'drama';

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
}

export interface MockeryEvent {
  id: string;
  type: MockeryAction;
  appliedBy: string;
  appliedTo: string;
  timestamp: Date;
  message?: string;
}

export interface MockeryEffectData {
  action: MockeryAction;
  timestamp: number;
  until: number;
}

export interface UserMockeryStatus {
  activeEffects: MockeryEffectData[];
  cooldowns: Record<MockeryAction, number>;
  protection?: boolean;
  immunityUntil?: number;
}

export interface MockUser {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  rank: number;
}
