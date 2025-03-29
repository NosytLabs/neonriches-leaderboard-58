
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
  | 'drama'
  | 'custom'
  | 'protection'
  | 'removal';

export type ShameAction = 
  | 'stocks' 
  | 'dunce' 
  | 'roast' 
  | 'ridicule'
  | 'taunt'
  | 'shame';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'premium'
  | 'basic'
  | 'elite';

export interface MockeryEffect {
  id: string;
  name: string;
  description: string;
  action: MockeryAction;
  tier: MockeryTier;
  cost: number;
  duration: number;
  cssClass: string;
  animation?: string;
}

export interface ShameEffect {
  id: string;
  name: string;
  description: string;
  action: ShameAction;
  timestamp: number;
  until: number;
  tier?: MockeryTier;
  cost: number;
  duration: number;
  cssClass: string;
  animation?: string;
}

export interface MockeryStats {
  totalMockeries: number;
  receivedMockeries: number;
  sentMockeries: number;
  protectedCount: number;
  mostUsedAction: MockeryAction;
  mockeryRank: number;
  favoriteTarget: string;
  totalSpent: number;
}

export interface MockeryProtection {
  userId: number | string;
  startTime: number;
  expiresAt: number;
  username?: string;
  endDate?: string;
  isActive?: boolean;
}
