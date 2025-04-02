
export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'team' 
  | 'spending' 
  | 'royal' 
  | 'special' 
  | 'founder' 
  | 'nobility'
  | 'custom';

export type CertificateStyle = 
  | 'classic' 
  | 'modern' 
  | 'royal' 
  | 'gold' 
  | 'premium'
  | 'elite';

export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none'
  | 'all';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: CertificateType;
  style: CertificateStyle;
  dateIssued: string;
  expiresAt?: string;
  userId: string;
  team?: CertificateTeam;
  status: 'draft' | 'issued' | 'expired' | 'revoked' | 'minted';
  mintAddress?: string;
  isMinted?: boolean;
  issuedAt?: string;
  // Add properties that were missing
  issuerName?: string;
  recipientName?: string;
  recipientId?: string;
  tier?: string;
  rarity?: string;
  name?: string;
  previewUrl?: string;
}

export interface CertificateTemplate {
  id: string;
  type: CertificateType;
  style: CertificateStyle;
  imageUrl: string;
  description: string;
  title: string;
  team?: CertificateTeam;
  // Add properties that were missing
  name?: string;
  previewUrl?: string;
  available?: boolean;
}

export interface CertificateRepository {
  getCertificates: (userId: string) => Promise<Certificate[]>;
  getCertificateById: (id: string) => Promise<Certificate | null>;
  createCertificate: (certificate: Partial<Certificate>) => Promise<Certificate>;
  updateCertificate: (id: string, updates: Partial<Certificate>) => Promise<Certificate>;
  mintCertificate: (id: string) => Promise<{ success: boolean; mintAddress?: string }>;
  getTemplates: () => Promise<CertificateTemplate[]>;
  generateCertificate: (templateId: string, userId: string) => Promise<Certificate>;
}
