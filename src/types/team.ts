
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

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
