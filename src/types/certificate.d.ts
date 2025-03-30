
import { TeamColor, UserTier } from './user';

export type CertificateStyle = 
  | 'royal' 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'platinum' 
  | 'special';

export type CertificateTeam = TeamColor | 'neutral';

export type CertificateType = 
  | 'membership' 
  | 'royal' 
  | 'special' 
  | 'achievement' 
  | 'milestone' 
  | 'rank' 
  | 'nobility';

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  style: CertificateStyle;
  team: CertificateTeam;
  type: CertificateType;
  previewUrl: string;
  imageUrl: string;
  availableForTier?: UserTier[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export interface Certificate {
  id: string;
  userId: string;
  templateId: string;
  title: string;
  description: string;
  imageUrl: string;
  style: CertificateStyle;
  team: CertificateTeam;
  type: CertificateType;
  dateIssued: string;
  signature?: string;
  mintAddress?: string;
  userDisplayName?: string;
  shareUrl?: string;
  isMinted?: boolean;
  nftMintAddress?: string;
  tokenId?: string;
  data?: Record<string, any>;
  mintedAt?: string;
}

export interface RankCertificateMetadata {
  userId: string;
  username: string;
  rank: number;
  date: string;
  signature: string;
  userTeam: TeamColor | null;
  issuedDate: string;
  amountSpent: number;
  userName: string;
  userRank: number;
  certificateId: string;
}

export interface CertificateRepository {
  getCertificateById: (id: string) => Promise<Certificate | null>;
  getCertificatesByUserId: (userId: string) => Promise<Certificate[]>;
  getMintedCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  updateCertificate: (certificate: Certificate) => Promise<boolean>;
  deleteCertificate: (id: string) => Promise<boolean>;
}

export interface CertificateTemplateFactory {
  getTemplatesForUser: (userId: string, user: any) => CertificateTemplate[];
  createTemplate: (data: any) => CertificateTemplate;
  getTemplateById: (id: string) => CertificateTemplate | null;
  getAllTemplates: () => CertificateTemplate[];
  getTemplatesByType: (type: CertificateType) => CertificateTemplate[];
}
