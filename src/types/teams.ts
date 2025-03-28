
export type TeamColor = 'red' | 'green' | 'blue';

export interface TeamData {
  id: TeamColor;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  members: number;
  rank: number;
}
