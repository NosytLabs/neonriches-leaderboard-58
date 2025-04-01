
// Team color options
export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';

// Team type definitions
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple';

// Team data structure
export interface TeamData {
  id: TeamType;
  name: string;
  description: string;
  color: string;
  secondaryColor: string;
  icon: string;
  banner: string;
  motto: string;
  benefits: string[];
  members: number;
  totalSpent: number;
  rank: number;
  joinCriteria?: string;
}

// Team member structure
export interface TeamMember {
  id: string;
  username: string;
  displayName: string;
  profileImage?: string;
  role: 'leader' | 'officer' | 'member';
  joinedAt: string;
  contribution: number;
  rank: number;
}

// Team stats structure
export interface TeamStats {
  totalMembers: number;
  totalSpent: number;
  rank: number;
  averageSpend: number;
  highestContributor: {
    id: string;
    username: string;
    amount: number;
  };
  recentJoins: number;
  growthRate: number;
}

// Team theme colors and styling
export interface TeamTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundSecondary: string;
  text: string;
  border: string;
  hoverBg: string;
  activeBg: string;
}
