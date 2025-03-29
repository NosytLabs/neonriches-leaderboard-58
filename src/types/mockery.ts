
export type MockeryAction = 'tomatoes' | 'eggs' | 'stocks' | 'silence' | 'courtJester';
export type MockeryTier = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface MockeryEffect {
  id: string;
  userId: string;
  action: MockeryAction;
  appliedBy: string;
  appliedAt: string;
  expiresAt: string;
  isActive: boolean;
}
