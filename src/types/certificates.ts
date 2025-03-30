
export type CertificateType = 'noble' | 'royal' | 'knight' | 'founder' | 'nobility';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  imageUri?: string;
  metadataUri?: string;
  mintAddress?: string;
  mintedAt?: string;
  isVerified?: boolean;
  isMinted?: boolean;
  createdAt: string;
  rank?: number;
  amountSpent?: number;
  
  // Add missing properties that components are using
  team?: string;
  title?: string;
  description?: string;
  imageUrl?: string; // Alias for imageUri for backward compatibility
  shareUrl?: string;
  style?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  type: CertificateType;
  imageUrl: string;
  previewUrl?: string; // Adding this since it's being used
  availableForTier?: string;
  availableForRank?: number;
  requiresFounder?: boolean;
  style?: string;
  team?: string;
}

export interface CertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: { trait_type: string; value: string | number }[];
  rank?: number;
  amountSpent?: number;
}

// These types are referenced but missing, so let's add them
export interface CertificateRepository {
  getCertificateById: (id: string) => Promise<Certificate | null>;
  updateCertificate: (certificate: Certificate) => Promise<boolean>;
  getCertificatesForUser: (userId: string) => Promise<Certificate[]>;
  getMintedCertificatesForUser: (userId: string) => Promise<Certificate[]>;
}

export interface CertificateTemplateFactory {
  getTemplatesForUser: (user: any) => Promise<CertificateTemplate[]>;
}

// Additional types that are referenced in the codebase
export type CertificateTeam = 'red' | 'green' | 'blue' | 'gold' | 'silver' | 'bronze' | 'none';

export type CertificateStyle = 'royal' | 'noble' | 'knight' | 'founder' | 'standard' | 'elite' | 'premium';

export interface RankCertificateMetadata extends CertificateMetadata {
  rank: number;
  amountSpent?: number;
  username?: string; // Add this for compatibility with solanaService
}
