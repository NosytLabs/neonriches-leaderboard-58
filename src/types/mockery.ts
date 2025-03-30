
export type MockeryAction = 
  | 'tomatoes' 
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'silence' 
  | 'courtJester'
  | 'smokeBomb'
  | 'protection';

export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

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
  lastMocked: Date;
  mockeryCount: number;
}

export type ShameAction = 
  | 'tomatoes' 
  | 'putridEggs' 
  | 'stocks' 
  | 'dunce' 
  | 'silence' 
  | 'courtJester'
  | 'smokeBomb';
