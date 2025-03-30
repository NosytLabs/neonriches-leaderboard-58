
// Certificate related types
import { TeamType } from './team';

export type CertificateType = 
  | 'rank' 
  | 'achievement' 
  | 'membership'
  | 'royal'
  | 'special'
  | 'event'
  | 'milestone'
  | 'team'
  | 'nobility';

export type CertificateStyle = 
  | 'royal' 
  | 'gilded' 
  | 'classic' 
  | 'modern' 
  | 'minimalist'
  | 'ornate'
  | 'parchment'
  | 'elite'
  | 'vip';

export type CertificateTeam = TeamType | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  userDisplayName: string;
  type: CertificateType;
  style: CertificateStyle;
  imageUrl: string;
  nftMintAddress?: string;
  team?: CertificateTeam;
  createdAt: string;
  updatedAt?: string;
  title?: string;
  description?: string;
  isMinted?: boolean;
  mintedAt?: string;
  shareUrl?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  previewUrl: string;
  imageUrl: string;
  description: string;
  requiresFounder?: boolean;
  availableForTier?: string[];
  availableForRank?: number[];
}

export interface RankCertificateMetadata {
  rank: number;
  userName: string;
  userId: string;
  certId: string;
  timestamp: number;
  amountSpent?: number;
}

export interface CertificateRepository {
  getCertificateById(id: string): Promise<Certificate | null>;
  getCertificatesByUserId(userId: string): Promise<Certificate[]>;
  getMintedCertificatesForUser(userId: string): Promise<Certificate[]>;
  createCertificate(certificate: Certificate): Promise<Certificate>;
  updateCertificate(certificate: Certificate): Promise<boolean>;
  deleteCertificate(id: string): Promise<boolean>;
}

export interface CertificateTemplateFactory {
  getTemplatesForUser(userId: string, user: any): CertificateTemplate[];
  createTemplate(type: CertificateType, style: CertificateStyle, team: CertificateTeam): CertificateTemplate;
  getTemplateById(id: string): CertificateTemplate | null;
  getAllTemplates(): CertificateTemplate[];
  getTemplatesByType(type: CertificateType): CertificateTemplate[];
}

export { CertificateType, CertificateStyle, CertificateTeam, Certificate, CertificateTemplate, RankCertificateMetadata, CertificateRepository, CertificateTemplateFactory };
