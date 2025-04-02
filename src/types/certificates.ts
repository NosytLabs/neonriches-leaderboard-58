
import { TeamColor } from './mockery-types';

export type CertificateStyle = 'royal' | 'noble' | 'jester' | 'standard' | 'premium';
export type CertificateTeam = TeamColor;

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  rank: number;
  tier: string;
  team: CertificateTeam;
  issuedAt: string;
  imageUrl?: string;
  expiresAt?: string;
  isMinted?: boolean;
  mintAddress?: string;
  mintDate?: string;
  style?: CertificateStyle;
  signature?: string;
}
