
export type AchievementType = 'royal' | 'rank' | 'milestone' | 'subscription' | 'deposit' | 'streak';
export type AchievementTier = 'gold' | 'silver' | 'bronze' | 'platinum' | 'diamond';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  icon: 'star' | 'zap' | 'award' | 'trophy' | 'crown' | 'dollar';
  tier: AchievementTier | string; // Allow string for backward compatibility
  unlockedAt: string;
  amountSpent?: number;
}
