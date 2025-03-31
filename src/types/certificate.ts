
import { TeamColor, UserTier } from './user';

export type CertificateType = 
  | 'nobility' 
  | 'achievement' 
  | 'royal' 
  | 'team' 
  | 'founder' 
  | 'seasonal' 
  | 'custom'
  | 'rank'
  | 'event'
  | 'membership'
  | 'special'
  | 'milestone';

export type CertificateStyle = 
  | 'default' 
  | 'medieval' 
  | 'royal' 
  | 'modern' 
  | 'minimalist' 
  | 'classic'
  | 'gothic'
  | 'vintage';

export type CertificateTeam = TeamColor | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  title: string;
  type: CertificateType;
  description: string;
  rank?: number;
  totalSpent?: number;
  team?: TeamColor;
  issuedAt?: string;
  dateIssued: string;
  expiresAt?: string;
  image?: string;
  imageUrl?: string;
  bgImage?: string;
  style?: CertificateStyle;
  isMinted?: boolean;
  mintAddress?: string;
  mintDate?: string;
  profileImage?: string;
  tier?: string;
  templateId?: string;
  signature?: string;
  shareUrl?: string;
  tokenId?: string;
  metadata?: Record<string, any>;
  createdAt?: string;
  nftMintAddress?: string;
  userDisplayName?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  description: string;
  style: CertificateStyle;
  team?: TeamColor;
  previewImage?: string;
  previewUrl?: string;
  isPremium?: boolean;
  isLimited?: boolean;
  price?: number;
  availableFrom?: string;
  availableUntil?: string;
  imageUrl?: string;
  availableForTier?: UserTier[];
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
  getCertificateById: (id: string) => Promise<Certificate | null>;
  getCertificatesByUserId: (userId: string) => Promise<Certificate[]>;
  getCertificatesForUser?: (userId: string) => Promise<Certificate[]>;
  getMintedCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  updateCertificate: (certificate: Certificate) => Promise<boolean>;
  deleteCertificate: (id: string) => Promise<boolean>;
}

export interface CertificateTemplateFactory {
  getTemplatesForUser: (userId: string, user: any) => CertificateTemplate[];
  createTemplate: (templateData: Partial<CertificateTemplate>) => CertificateTemplate;
  getTemplateById: (id: string) => CertificateTemplate | null;
  getAllTemplates: () => CertificateTemplate[];
  getTemplatesByType: (type: CertificateType) => CertificateTemplate[];
}

// Cleanup older certificate type definitions that are now consolidated
export { 
  type CertificateType as CertificateCategory,
  type CertificateTeam as CertificateTeamType
};
