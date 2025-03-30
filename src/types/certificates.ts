
import { UserProfile } from './user';

export type CertificateType = 'rank' | 'team' | 'milestone' | 'royal' | 'founder' | 'nobility';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  rank?: number;
  teamId?: string;
  team?: string;
  milestoneId?: string;
  createdAt: string;
  imageUrl?: string;
  imageUri?: string;
  title?: string;
  description?: string;
  shareable?: boolean;
  shareUrl?: string;
  isMinted?: boolean;
  mintAddress?: string;
  mintedAt?: string;
  style?: CertificateStyle;
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
  availableForTier?: string[];
  availableForRank?: number[];
}

export type CertificateStyle = 'classic' | 'modern' | 'minimal' | 'ornate' | 'royal';
export type CertificateTeam = 'red' | 'green' | 'blue' | 'none';

export interface RankCertificateMetadata {
  name: string;
  description: string;
  image: string;
  rank?: number;
  displayName?: string;
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

export interface CertificateRepository {
  getCertificateById(id: string): Promise<Certificate>;
  getCertificatesByUserId(userId: string): Promise<Certificate[]>;
  createCertificate(certificate: Certificate): Promise<Certificate>;
  updateCertificate(certificate: Certificate): Promise<boolean>;
  deleteCertificate(id: string): Promise<boolean>;
}

export interface CertificateTemplateFactory {
  createTemplate(type: CertificateType, user: UserProfile): CertificateTemplate;
  getTemplateById(id: string): CertificateTemplate | null;
  getAllTemplates(): CertificateTemplate[];
  getTemplatesByType(type: CertificateType): CertificateTemplate[];
}
