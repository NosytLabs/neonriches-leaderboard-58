
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

export type TeamFeature = 
  | 'boost'
  | 'discount'
  | 'protection'
  | 'visibility'
  | 'collaboration'
  | 'influence'
  | 'rewards'
  | 'perks';

export interface TeamStats {
  members: number;
  totalSpent: number;
  avgSpent: number;
  topSpender: string;
  topSpenderAmount: number;
  ranking: number;
  dailyGrowth: number;
}

export interface Team {
  id: string;
  name: string;
  description: string;
  color: TeamColor;
  motto: string;
  features: TeamFeature[];
  stats: TeamStats;
  imageUrl: string;
  leaderUsername?: string;
}

// For backward compatibility
export type TeamType = TeamColor;
