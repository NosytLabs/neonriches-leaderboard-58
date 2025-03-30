
import { TeamColor } from './user';

export type CertificateType = 
  | 'achievement'
  | 'rank'
  | 'special'
  | 'membership'
  | 'royal'
  | 'milestone'
  | 'nobility';

export type CertificateStyle = 
  | 'royal' 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'platinum' 
  | 'special';

export interface Certificate {
  id: string;
  userId: string;
  title: string;
  description: string;
  type: CertificateType;
  style: CertificateStyle;
  team?: TeamColor;
  createdAt?: string;
  dateIssued: string;
  templateId: string;
  userDisplayName?: string;
  signature?: string;
  imageUrl?: string;
  shareUrl?: string;
  isMinted?: boolean;
  nftMintAddress?: string;
  mintAddress?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  style: CertificateStyle;
  type: CertificateType;
  team: TeamColor;
  previewUrl: string;
  imageUrl: string;
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}
