
export type CertificateType = 
  | 'nobility' 
  | 'spending' 
  | 'achievement' 
  | 'rank'
  | 'founder'
  | 'legacy'
  | 'commemorative'
  | 'tournament'
  | 'event'
  | 'anniversary'
  | 'special';

export type CertificateStyle = 
  | 'classic' 
  | 'royal' 
  | 'modern'
  | 'vintage'
  | 'minimalist'
  | 'ornate'
  | 'gilded'
  | 'embossed'
  | 'scrolled';

export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple'
  | 'neutral'
  | 'royal';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string;
  status: 'pending' | 'minted' | 'revoked';
  type: CertificateType;
  userId?: string;
  team?: CertificateTeam;
  tier?: string;
  issuedAt?: string;
  mintAddress?: string;
  style: CertificateStyle;
  issuerName: string;
  recipientName: string;
  recipientId: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: CertificateType;
  team: CertificateTeam;
  style: CertificateStyle;
  available: boolean;
  availableForTier?: string[];
  requiresFounder?: boolean;
}

export interface CertificateRepository {
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  getCertificateById: (id: string) => Promise<Certificate | null>;
  mintCertificate: (certificate: Certificate) => Promise<Certificate>;
  getTemplates: () => Promise<CertificateTemplate[]>;
  getTemplateById: (id: string) => Promise<CertificateTemplate | null>;
}
