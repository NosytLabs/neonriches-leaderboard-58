
export type CertificateType = 'nobility' | 'rank' | 'achievement' | 'contribution' | 'founder';
export type CertificateStyle = 'classic' | 'royal' | 'modern' | 'fantasy' | 'minimalist';
export type CertificateTeam = 'red' | 'green' | 'blue' | 'none';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  title: string;
  description?: string;
  rank?: number;
  amountSpent?: number;
  imageUrl?: string;
  mintAddress?: string;
  metadataUri?: string;
  isMinted: boolean;
  mintedAt?: string;
  createdAt: string;
  shareUrl?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  style: CertificateStyle;
  team: CertificateTeam;
  previewUrl: string;
  description: string;
  availableForTier?: string[];
  availableForRank?: number[];
  requiresFounder?: boolean;
}

export interface UserCertificates {
  ownedCertificates: Certificate[];
  mintedCertificates: Certificate[];
  availableTemplates: CertificateTemplate[];
}

// Repository interfaces
export interface CertificateRepository {
  getCertificateById(id: string): Promise<Certificate | null>;
  getCertificatesForUser(userId: string): Promise<Certificate[]>;
  getMintedCertificatesForUser(userId: string): Promise<Certificate[]>;
  saveCertificate(certificate: Certificate): Promise<Certificate>;
  updateCertificate(certificate: Certificate): Promise<Certificate>;
}

// Factory interfaces
export interface CertificateTemplateFactory {
  getTemplatesForUser(user: UserProfile): Promise<CertificateTemplate[]>;
  createCertificateFromTemplate(templateId: string, userId: string): Promise<Certificate>;
}
