
// Define team color types for type safety
export type TeamColor = 'red' | 'green' | 'blue';

// Define team data structure
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

// Define team-related utility function return types
export interface TeamColorStyles {
  textColor: string;
  bgColor: string;
  borderColor: string;
  shadowColor: string;
}

// Define team ranks icon type
export interface TeamRankIcon {
  icon: React.ReactNode;
  color: string;
}
