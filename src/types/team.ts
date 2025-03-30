
// Team-related types
export type TeamColor = "red" | "green" | "blue" | "gold" | "silver" | "bronze";

export type TeamType = 
  | "red" 
  | "green" 
  | "blue" 
  | "gold" 
  | "silver" 
  | "bronze"
  | "Red"
  | "Green"
  | "Blue"
  | "none";

export type UserTeam = "red" | "green" | "blue" | "none";

export type TeamBenefit = {
  id: string;
  title: string;
  description: string;
  team: TeamType;
};

export type Team = {
  id: TeamType;
  name: string;
  color: string;
  description: string;
  members: number;
  benefits: TeamBenefit[];
};

export type { TeamType, TeamColor, UserTeam, Team };
