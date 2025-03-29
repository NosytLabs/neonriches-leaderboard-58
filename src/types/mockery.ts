
export type MockeryAction = 'tomatoes' | 'putridEggs' | 'stocks' | 'silence' | 'courtJester' | 'jester' | 'dunce' | 'smokeBomb' | 'royalPie' | 'glitterBomb' | 'jokeCrown' | 'memeFrame' | 'protection' | 'immune' | 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
export type ShameAction = 'jester' | 'roast' | 'duel' | 'shame' | 'crown' | 'eggs';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'elite';

export interface MockeryEffect {
  id: string;
  action: MockeryAction;
  source: string;
  target: string;
  timestamp: number;
  duration: number;
  until: number;
  message?: string;
}

export interface ShameEffect {
  id: string;
  action: ShameAction;
  source: string;
  target: string;
  timestamp: number;
  duration: number;
  until: number;
  message?: string;
}

export interface MockedUser {
  username: string;
  imageUrl?: string;
  timestamp: number;
  action: MockeryAction;
  source: string;
  duration: number;
  until: number;
}

export interface MockeryStats {
  totalMockeries: number;
  usersMocked: number;
  popularMockery: MockeryAction;
  mostMockedUser: string;
  mostActiveUser: string;
}
