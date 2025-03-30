
export type AchievementType = 
  | "royal" 
  | "rank" 
  | "deposit" 
  | "milestone" 
  | "streak"
  | "purchase";

export type AchievementTier = 
  | "bronze" 
  | "silver" 
  | "gold" 
  | "platinum" 
  | "diamond" 
  | "royal";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  tier: AchievementTier;
  icon: string;
  unlockedAt?: string;
  amountSpent?: number;
  progress?: number;
  totalRequired?: number;
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  unlockedAt: string;
  progress?: number;
}
