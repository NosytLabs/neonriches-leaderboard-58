
import { TeamColor, UserProfile, UserTier } from './user';

export type CertificateType = 'rank' | 'achievement' | 'team' | 'founder' | 'event';
export type CertificateStyle = 'classic' | 'modern' | 'royal' | 'vintage' | 'minimalist';
export type CertificateTeam = TeamColor | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  title: string;
  description: string;
  createdAt: string;
  imageUrl: string;
  shareUrl?: string;
  isMinted: boolean;
  nftMintAddress?: string;
  tokenId?: string;
  team?: CertificateTeam;
  style?: CertificateStyle;
  data?: Record<string, any>;
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
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export interface RankCertificateMetadata {
  userName: string;
  userRank: number;
  userTeam: TeamColor | null;
  certificateId: string;
  issuedDate: string;
  amountSpent: number;
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
  createTemplate(data: Partial<CertificateTemplate>): CertificateTemplate;
  getTemplateById(id: string): CertificateTemplate | null;
  getAllTemplates(): CertificateTemplate[];
  getTemplatesByType(type: CertificateType): CertificateTemplate[];
  getTemplatesForUser(userId: string, user: any): CertificateTemplate[];
}
