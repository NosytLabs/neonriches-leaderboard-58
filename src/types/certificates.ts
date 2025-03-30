
export type CertificateType = 'noble' | 'royal' | 'knight' | 'founder';

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
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  type: CertificateType;
  imageUrl: string;
  availableForTier?: string;
  availableForRank?: number;
  requiresFounder?: boolean;
}

export interface CertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: { trait_type: string; value: string | number }[];
  rank?: number;
}
