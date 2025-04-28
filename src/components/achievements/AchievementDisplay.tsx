// Define the Achievement type
export interface Achievement {
  id: string;
  name: string;
  description: string;
  type: string;
  icon: string;
  tier: string;
  unlockedAt: string;
  amountSpent?: number;
}

// This is a placeholder component to be implemented later
export const AchievementDisplay = () => {
  return null;
};
