
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'basic' | 'premium' | 'elite';

export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';

export type ShameAction = 'tomatoes' | 'eggs' | 'silence' | 'roast' | 'ridicule';

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
