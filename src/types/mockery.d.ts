
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs' 
  | 'putridEggs'
  | 'stocks'
  | 'dunce'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'smokeBomb'
  | 'glitterBomb'
  | 'taunt'
  | 'ridicule'
  | 'shame'
  | 'mock'
  | 'humiliate'
  | 'expose'
  | 'guillotine'
  | 'dungeons'
  | 'removal'
  | 'crown'
  | 'target'
  | 'challenge'
  | 'jest'
  | 'protection'
  | 'immune'
  | 'defeat'
  | 'roast'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame';

export type MockeryTier = 'common' | 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockeryEffect {
  id: string;
  target: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
  tier: MockeryTier;
}

export interface MockeryHistoryItem {
  id: string;
  target: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface MockeryStats {
  applied: number;
  received: number;
  active: number;
}
