
// TeamColor is the primary type for team identifiers
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral' | 'silver' | 'bronze';

// TeamType is an alias for TeamColor for backward compatibility
export type TeamType = TeamColor;

// Team data structure
export interface TeamData {
  id: string;
  name: string;
  color: string;
  description: string;
  members: number;
  emblemUrl: string;
  motto: string;
  benefits: string[]; // Change this to string[] to match teamData usage
  securityGuarantee: string;
  historicalNote: string;
  absurdStat: string;
  nftJoke: string;
  cryptoRoast: string;
  totalContribution?: number;
  rank?: number;
}

// Team theme styling
export interface TeamTheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
  background: string;
  backgroundSecondary: string;
  hoverBg: string;
  activeBg: string;
}

// Team is an alias for TeamColor for backward compatibility
export type Team = TeamColor;

export interface TeamMember {
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinDate: string;
  contribution: number;
  rank: number;
  role?: string;
  isActive: boolean;
  tier?: string;
}

export interface TeamLeaderboardEntry {
  teamId: string;
  teamName: string;
  teamColor: TeamColor;
  memberCount: number;
  totalContribution: number;
  rank: number;
  previousRank?: number;
  logo?: string;
}

export interface TeamSelectionProps {
  selectedTeam: TeamColor | null;
  onTeamSelect: (team: TeamColor) => void;
  teams: TeamData[];
  user?: any;
}
