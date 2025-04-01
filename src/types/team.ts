
import { TeamColor } from './user';

export interface TeamData {
  id: string;
  name: string;
  color: string;
  description: string;
  members: number;
  emblemUrl: string;
  motto: string;
  benefits: string;
  securityGuarantee: string;
  historicalNote: string;
  absurdStat: string;
  nftJoke: string;
  cryptoRoast: string;
  totalContribution?: number;
  rank?: number; // Add rank property
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

export type Team = TeamColor;
