
import { TeamColor, TeamType, UserTier } from './team';

export type CertificateType = 
  | 'noble' 
  | 'royal' 
  | 'elite' 
  | 'legendary' 
  | 'custom'
  | 'achievement'
  | 'rank'
  | 'team'
  | 'founder'
  | 'seasonal';

export type CertificateStyle = 
  | 'classic' 
  | 'modern' 
  | 'medieval' 
  | 'minimalist' 
  | 'luxury'
  | 'royal'
  | 'gold'
  | 'silver'
  | 'platinum'
  | 'diamond';

export type CertificateTeam = TeamType | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  type: CertificateType;
  team: TeamColor | CertificateTeam;
  rank?: number;
  totalSpent?: number;
  createdAt: string;
  imageUrl?: string;
  shareUrl?: string;
  isMinted?: boolean;
  nftMintAddress?: string;
  mintedAt?: string;
  style?: CertificateStyle;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  style: CertificateStyle;
  team: TeamType;
  previewUrl: string;
  imageUrl: string;
  description: string;
  availableForTier: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}
