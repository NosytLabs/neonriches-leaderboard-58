
export type MockeryAction = 
  | 'tomatoes'
  | 'eggs'
  | 'crown'
  | 'stocks'
  | 'jester'
  | 'protection'
  | 'shame'
  | 'target'
  | 'challenge'
  | 'ghost'
  | 'putridEggs'
  | 'silence'
  | 'courtJester'
  | 'smokeBomb';

export type MockeryTier = 
  | 'common' 
  | 'uncommon' 
  | 'rare' 
  | 'epic' 
  | 'legendary'
  | 'royal'
  | 'basic'
  | 'premium'
  | 'silver'
  | 'bronze';

export interface MockeryEffect {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // in hours
  icon: string;
  tier: MockeryTier;
  targetId: string;
  sourceId: string;
  createdAt: string;
  expiresAt: string;
  isActive: boolean;
}

export interface MockeryHistory {
  id: string;
  action: MockeryAction;
  targetUsername: string;
  sourceUsername: string;
  timestamp: string;
  isAnonymous: boolean;
}
