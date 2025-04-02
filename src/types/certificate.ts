
export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'membership' 
  | 'royal' 
  | 'team' 
  | 'special'
  | 'nobility'
  | 'custom'
  | 'founder'; // Add 'founder' type to resolve incompatibility

export type CertificateStyle = 
  | 'standard' 
  | 'gold' 
  | 'silver' 
  | 'royal' 
  | 'premium' 
  | 'modern' 
  | 'classic'
  | 'legendary'
  | 'elite'; 

export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none'
  | 'neutral' 
  | 'all';

export type CertificateStatus = 
  | 'pending' 
  | 'issued' 
  | 'revoked' 
  | 'expired' 
  | 'draft'
  | 'minted'; 

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  dateIssued: string;
  mintAddress?: string;
  mintDate?: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  status: CertificateStatus;
  rarity?: string;
  issuerName: string;
  recipientName: string;
  recipientId: string;
  tier?: string;
  name?: string;
  isMinted?: boolean;
  issuedAt?: string;
  expiresAt?: string;
  previewUrl?: string; // Add this to fix Certificate.tsx errors
}

export interface CertificateTemplate {
  id: string;
  title: string; // Make this required
  description: string;
  imageUrl: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  rarity?: string;
  dateIssued?: string;
  userId?: string;
  status?: CertificateStatus;
  name?: string; 
  previewUrl?: string;
  available?: boolean;
  availableForTier?: string[];
  requiresFounder?: boolean;
}

// Export this interface to ensure compatability
export interface UseCertificateResult {
  certificates: Certificate[];
  templates: CertificateTemplate[];
  loading: boolean;
  error: Error | null;
  createCertificate: (data: Partial<Certificate>) => Promise<Certificate>;
  fetchUserCertificates: (userId?: string) => Promise<Certificate[]>;
  fetchTemplates: () => Promise<CertificateTemplate[]>;
  mintCertificateAsNFT: (certificateId: string) => Promise<void>;
  issueCertificate: (userId: string, type: string, template: string) => Promise<void>;
  downloadCertificate: (certificateId: string) => Promise<void>;
  shareCertificate: (certificateId: string) => Promise<void>;
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  getAvailableTemplates: () => Promise<CertificateTemplate[]>;
  // Add compatibility methods
  mint: (certificate: Certificate) => Promise<{success: boolean; mintAddress?: string}>;
  download: (certificate: Certificate) => void;
  share: (certificate: Certificate) => Promise<string>;
}
