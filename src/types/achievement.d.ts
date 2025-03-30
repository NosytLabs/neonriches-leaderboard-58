
export type AchievementType = 'royal' | 'rank' | 'deposit' | 'milestone' | 'streak';
export type AchievementTier = 'gold' | 'platinum' | 'silver' | 'bronze' | 'diamond';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  icon: "star" | "zap" | "award" | "trophy" | "crown" | "dollar";
  tier: AchievementTier;
  unlockedAt: string;
  amountSpent?: number;
}
