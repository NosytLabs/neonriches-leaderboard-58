
export type TeamColor = 'red' | 'green' | 'blue' | 'none';

export interface TeamData {
  id: TeamColor;
  name: string;
  description: string;
  motto: string;
  color: string;
  members: number;
  benefits: string[];
  securityGuarantee: string;
}

export interface TeamSelectionProps {
  selectedTeam: TeamColor | null;
  onTeamSelect: (team: TeamColor) => void;
  teams: TeamData[];
  user?: any; // Add this property
}
