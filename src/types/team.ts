
import { TeamColor } from './mockery-types';

export interface TeamData {
  id?: string;
  color: TeamColor;
  name: string;
  icon?: string;
  motto?: string;
  description?: string;
  benefits?: string[];
  ranking?: number;
  memberCount?: number;
  teamId?: string;
}

export type { TeamColor };
