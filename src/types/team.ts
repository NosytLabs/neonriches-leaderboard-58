
export type TeamColor = 
  | 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral'
  | '#dc2626' | '#2563eb' | '#16a34a' | '#eab308' | '#9333ea' | '#6b7280'; // Add hex values

export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

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
  benefits?: string[];
  securityGuarantee?: string;
  absurdStat?: string;
  historicalNote?: string;
  nftJoke?: string;
  cryptoRoast?: string;
}

export interface TeamTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  primary?: string; // Added for backward compatibility
  text?: string; // Added for backward compatibility
  background?: string; // Added for backward compatibility
}

export function asTeamColor(input: string | TeamColor | undefined): TeamColor {
  const validColors: TeamColor[] = [
    'red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral',
    '#dc2626', '#2563eb', '#16a34a', '#eab308', '#9333ea', '#6b7280'
  ];
  
  if (!input) return 'neutral';
  
  const normalized = input.toLowerCase() as TeamColor;
  return validColors.includes(normalized) ? normalized : 'neutral';
}

// Export as a default object to fix 'Team' value reference
export default {
  asTeamColor
};
