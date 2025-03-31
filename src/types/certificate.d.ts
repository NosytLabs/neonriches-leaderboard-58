
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
  | 'custom';

export type CertificateStyle = 
  | 'royal' 
  | 'classic' 
  | 'modern' 
  | 'gothic'
  | 'default' 
  | 'medieval'
  | 'minimalist' 
  | 'vintage'
  | 'ornate';

export type CertificateTeam = 'red' | 'blue' | 'green' | 'gold' | 'neutral';

export interface Certificate {
  id: string;
  userId: string;
  templateId?: string;
  dateIssued: string;
  title?: string;
  description?: string;
  style?: CertificateStyle;
  team?: CertificateTeam;
  signature?: string;
  type?: CertificateType;
  userDisplayName?: string;
  metadata?: {
    rank?: number;
    tier?: string;
    name?: string;
    achievements?: string[];
  };
  mintAddress?: string;
  imageUrl?: string;
  
  // Properties needed for compatibility
  isMinted?: boolean;
  nftMintAddress?: string;
  shareUrl?: string;
  createdAt?: string;
  username?: string;
  displayName?: string;
  image?: string;
  bgImage?: string;
  issuedAt?: string;
  expiresAt?: string;
  profileImage?: string;
  tier?: string;
  tokenId?: string;
  mintDate?: string;
  rank?: number;
  totalSpent?: number;
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
