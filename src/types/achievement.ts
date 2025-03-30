
export type AchievementType = 'royal' | 'rank' | 'milestone' | 'deposit' | 'streak';

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

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  unlockDate: Date;
  displayed: boolean;
}

