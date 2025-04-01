
export type TeamColor = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none' 
  | 'neutral'
  | 'silver'
  | 'bronze';

export type TeamStyleVariant = 
  | 'default'
  | 'minimal'
  | 'bordered'
  | 'pill'
  | 'outline';

export interface TeamMember {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  joinedDate: string;
  rank?: number;
  contribution?: number;
  role?: 'leader' | 'officer' | 'member' | 'recruit';
}

export interface TeamStats {
  totalMembers: number;
  totalSpent: number;
  weeklySpent: number;
  globalRank: number;
  winStreak: number;
  wins: number;
  losses: number;
}

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

export interface Team {
  id: TeamColor;
  name: string;
  description: string;
  shortDescription: string;
  color: string;
  members: number;
  totalSpent: number;
  rank: number;
  icon: string;
  banner: string;
  motto: string;
  stats: TeamStats;
  theme: TeamTheme;
}
