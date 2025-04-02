
// Certificate types
export type CertificateType = 
  | 'royal' 
  | 'noble' 
  | 'achievement' 
  | 'rank' 
  | 'spender' 
  | 'founder'
  | 'supporter'
  | 'special';

// Certificate styles
export type CertificateStyle = 
  | 'ornate' 
  | 'minimal' 
  | 'classic' 
  | 'modern'
  | 'standard';

// Certificate team designation
export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'neutral' 
  | 'none'
  | 'silver'
  | 'bronze'
  | 'crimson';

// Certificate status
export type CertificateStatus = 
  | 'issued' 
  | 'revoked' 
  | 'minted' 
  | 'pending'
  | 'draft'
  | 'expired';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  userId: string;
  username: string;
  issuedAt: string;
  dateIssued?: string;
  expiresAt?: string;
  isMinted: boolean;
  mintAddress?: string;
  mintDate?: string;
  previewUrl: string;
  status: CertificateStatus;
  metadataUrl?: string;
  name: string;
  achievementId?: string;
  achievement?: any;
  mintTransaction?: string;
  background?: string;
  border?: string;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  style: CertificateStyle;
  description: string;
  imageUrl: string;
  previewUrl: string;
  background?: string;
  border?: string;
}

export interface CertificateRepository {
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  getCertificate: (id: string) => Promise<Certificate | null>;
  createCertificate: (data: Partial<Certificate>) => Promise<Certificate>;
  mintCertificate: (id: string) => Promise<{ success: boolean; mintAddress?: string }>;
  revokeCertificate: (id: string) => Promise<boolean>;
}
