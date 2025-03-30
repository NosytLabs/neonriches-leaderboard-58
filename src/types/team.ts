
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

export type TeamType = 'red' | 'blue' | 'green' | 'gold';

export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  contribution: number;
  rank: number;
  previousRank?: number;
  change?: number;
  icon?: string;
  imageUrl?: string;
  achievements?: string[];
}
