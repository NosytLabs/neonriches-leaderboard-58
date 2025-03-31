
import { TeamColor, TeamType, UserTier } from './user-types';

export type CertificateType = 
  | 'rank' 
  | 'achievement' 
  | 'founder' 
  | 'event' 
  | 'membership' 
  | 'royal' 
  | 'special' 
  | 'milestone' 
  | 'nobility' 
  | 'seasonal'
  | 'team'
  | 'custom'
  | 'noble' 
  | 'elite' 
  | 'legendary';

export type CertificateStyle = 
  | 'royal' 
  | 'classic' 
  | 'modern' 
  | 'gothic'
  | 'default' 
  | 'medieval'
  | 'minimalist' 
  | 'vintage'
  | 'ornate'
  | 'luxury'
  | 'gold'
  | 'silver'
  | 'platinum'
  | 'diamond';

export type CertificateTeam = TeamType | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  templateId?: string;
  username: string;
  displayName?: string;
  type: CertificateType;
  team?: TeamColor | CertificateTeam;
  rank?: number;
  totalSpent?: number;
  createdAt: string;
  title?: string;
  description?: string;
  style?: CertificateStyle;
  signature?: string;
  userDisplayName?: string;
  dateIssued?: string;
  issuedAt?: string;
  imageUrl?: string;
  image?: string;
  bgImage?: string;
  shareUrl?: string;
  isMinted?: boolean;
  nftMintAddress?: string;
  mintAddress?: string;
  mintDate?: string;
  expiresAt?: string;
  profileImage?: string;
  tier?: string;
  tokenId?: string;
  metadata?: {
    rank?: number;
    tier?: string;
    name?: string;
    achievements?: string[];
    description?: string;
  };
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
  isPremium?: boolean;
  isLimited?: boolean;
  price?: number;
  availableFrom?: string;
  availableUntil?: string;
  previewImage?: string;
}

export interface CertificateRepository {
  getCertificatesByUserId: (userId: string) => Promise<Certificate[]>;
  getMintedCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Certificate) => Promise<Certificate>;
  getCertificate: (id: string) => Promise<Certificate | null>;
  getCertificateById?: (id: string) => Promise<Certificate | null>;
  getCertificatesForUser?: (userId: string) => Promise<Certificate[]>;
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

export interface RankCertificateMetadata {
  userName: string;
  userRank: number;
  userTeam: CertificateTeam | null;
  certificateId: string;
  issuedDate: string;
  amountSpent: number;
}

// For backward compatibility
export { 
  type CertificateType as CertificateCategory,
  type CertificateTeam as CertificateTeamType
};
