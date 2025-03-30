
export type AchievementType = 
  'royal' | 
  'deposit' | 
  'rank' | 
  'milestone' | 
  'streak' |
  'purchase'; 

export type AchievementTier = 
  'bronze' | 
  'silver' | 
  'gold' | 
  'platinum' | 
  'diamond';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  tier: AchievementTier;
  icon: 'star' | 'zap' | 'award' | 'trophy' | 'crown' | 'dollar';
  unlockedAt?: string;
  amountSpent?: number;
}
