
// Define the achievement types

export type AchievementType = 
  | 'royal'
  | 'rank'
  | 'milestone'
  | 'deposit'
  | 'streak'
  | 'purchase'
  | 'referral'
  | 'social';

export type AchievementTier = 
  | 'gold'
  | 'silver'
  | 'bronze'
  | 'platinum'
  | 'diamond';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  icon: 'star' | 'zap' | 'award' | 'trophy' | 'crown' | 'dollar';
  tier: AchievementTier;
  unlockedAt: string;
  amountSpent?: number;
}

export interface AchievementProgress {
  achievementId: string;
  progress: number;
  total: number;
  isCompleted: boolean;
}
