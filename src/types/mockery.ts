
export type MockeryAction = 
  | 'tomatoes' 
  | 'eggs'
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'silence' 
  | 'courtJester'
  | 'smokeBomb'
  | 'protection'
  | 'immune'
  | 'jester'
  | 'glitterBomb'
  | 'royalPie'
  | 'jokeCrown'
  | 'memeFrame'
  | 'roast'
  | 'ridicule'
  | 'humiliate'
  | 'expose'
  | 'mock'
  | 'shame'
  | 'taunt'
  | 'guillotine'
  | 'dungeons'
  | 'removal';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'premium';

export interface MockeryEvent {
  id: string;
  sourceId: string;
  sourceName: string;
  targetId: string;
  targetName: string;
  action: MockeryAction;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface MockUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  tier?: string;
  team?: 'red' | 'green' | 'blue' | null;
  rank?: number;
  lastMocked: string;
  mockeryCount: number;
}

export type ShameAction = 
  | 'tomatoes' 
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'silence' 
  | 'courtJester'
  | 'smokeBomb'
  | 'eggs'
  | 'shame'
  | 'ridicule'
  | 'jester'
  | 'glitterBomb';

export interface MockeryEffectData {
  username: string;
  action: MockeryAction;
  tier?: string;
  duration?: number;
  title?: string;
  message?: string;
  rarity?: string;
}

export interface UserMockeryStatus {
  isProtected: boolean;
  protectionEndsAt?: string;
  activeEffects: MockeryEvent[];
}

export type ExtendedMockeryAction = MockeryAction;

export interface ShameEffectState {
  shameCooldown: number;
  shameEffects: Record<string, ShameAction[]>;
  shameCount: number;
  getShameCount: () => number;
  handleShame: (user: string, action: ShameAction) => void;
  isUserShamed: (user: string) => boolean;
  getActiveShame: (user: string) => ShameAction | null;
  incrementShameCount: () => void;
}
