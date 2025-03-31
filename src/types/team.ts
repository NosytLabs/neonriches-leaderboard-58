
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'none' | 'neutral';

export interface Team {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  totalContribution: number;
  rank: number;
  emblemUrl: string;
}

export interface TeamData {
  id: string;
  name: string;
  color: TeamColor;
  description: string;
  members: number;
  totalContribution: number;
  rank: number;
  emblemUrl: string;
  motto?: string;
  leader?: string;
}

export interface TeamTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
}

export function asTeamColor(input: string | TeamColor | undefined): TeamColor {
  const validColors: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  if (!input) return 'neutral';
  
  const normalized = input.toLowerCase() as TeamColor;
  return validColors.includes(normalized) ? normalized : 'neutral';
}

export default {
  Team,
  TeamData,
  TeamTheme,
  asTeamColor
};
