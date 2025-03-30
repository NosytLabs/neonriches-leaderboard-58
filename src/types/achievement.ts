
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
  | "diamond";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: AchievementType;
  tier: AchievementTier;
  icon?: string;
  unlockedAt?: string;
  amountSpent?: number;
}

export interface AchievementProgress {
  achievementId: string;
  progress: number;
  total: number;
  isComplete: boolean;
}
