
export interface Milestone {
  id: string;
  threshold: number;
  reward_type: 'title' | 'badge' | 'animation' | 'feature' | 'cosmetic';
  reward_name: string;
  reward_description: string;
  cosmetic_effect: string | null;
  created_at: string;
}

export interface UserMilestone {
  id: string;
  user_id: string;
  milestone_id: string;
  achieved_at: string;
  milestone?: Milestone;
}
