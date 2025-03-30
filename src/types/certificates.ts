
import { UserProfile } from './user';

export type CertificateType = 'rank' | 'team' | 'milestone' | 'royal' | 'founder';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  rank?: number;
  teamId?: string;
  milestoneId?: string;
  createdAt: string;
  imageUrl?: string;
  shareable?: boolean;
  shareUrl?: string;
  isMinted?: boolean;
  mintAddress?: string;
  mintedAt?: string;
}

export interface CertificateNFT {
  id: string;
  mintAddress: string;
  metadataUri: string;
  imageUri: string;
  certificateId: string;
  userId: string;
  createdAt: string;
  mintedAt: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  description: string;
  previewUrl: string;
  imageUrl: string;
  requiresFounder?: boolean;
  style?: CertificateStyle;
  team?: CertificateTeam;
}

export type CertificateStyle = 'classic' | 'modern' | 'minimal' | 'ornate' | 'royal';
export type CertificateTeam = 'red' | 'green' | 'blue' | 'none';

export interface RankCertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    rank: number;
    spentAmount: number;
    issueDate: string;
    expiryDate?: string;
    userId: string;
    username: string;
    displayName?: string;
  }[];
}
