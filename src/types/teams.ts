
import { ReactNode } from 'react';

export type TeamColor = 'red' | 'green' | 'blue' | null;

export interface TeamData {
  id: TeamColor;
  name: string;
  description: string;
  members: number;
  totalSpent: number;
  rank: number;
  iconComponent?: ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface TeamSelectionProps {
  user?: any;
  onTeamSelect?: (team: TeamColor) => Promise<boolean>;
}
