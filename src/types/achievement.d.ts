
export type AchievementType = 'royal' | 'deposit' | 'rank' | 'milestone' | 'streak';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  icon: string;
  tier: string;
  unlockedAt: string;
  amountSpent?: number;
}
