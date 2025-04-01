
import { ReactNode } from 'react';

export type TeamColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'neutral';
export type TeamType = 'red' | 'blue' | 'green' | 'gold' | 'purple';

export interface TeamData {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: ReactNode;
  mottoShort?: string;
  motto?: string;
  benefits?: string[];
  memberCount?: number;
  totalSpent?: number;
  weeklyGoal?: number;
  topSpender?: {
    name: string;
    amount: number;
  };
  members?: number;
  totalContribution?: number;
  securityGuarantee?: string;
  absurdStat?: string;
  historicalNote?: string;
  nftJoke?: string;
  cryptoRoast?: string;
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
