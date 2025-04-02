
export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'membership' 
  | 'royal' 
  | 'team' 
  | 'special'
  | 'nobility'; // Added for compatibility

export type CertificateStyle = 
  | 'standard' 
  | 'gold' 
  | 'silver' 
  | 'royal' 
  | 'premium' 
  | 'modern' 
  | 'classic'
  | 'legendary'; // Added for compatibility 

export type CertificateTeam = 
  | 'red' 
  | 'blue' 
  | 'green' 
  | 'gold' 
  | 'purple' 
  | 'none'
  | 'neutral' // Added for compatibility
  | 'all';

export type CertificateStatus = 
  | 'pending' 
  | 'issued' 
  | 'revoked' 
  | 'expired' 
  | 'draft'
  | 'minted'; // Added for compatibility

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  dateIssued: string;
  mintAddress?: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  status: CertificateStatus;
  rarity?: string;
  issuerName: string;
  recipientName: string;
  recipientId: string;
  tier?: string; // Added for compatibility
}

export interface CertificateTemplate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  rarity?: string;
  dateIssued?: string;
  userId?: string;
  status?: CertificateStatus;
  name?: string; // Added for compatibility
  previewUrl?: string; // Added for compatibility
  available?: boolean; // Added for compatibility
  availableForTier?: string[]; // Added for compatibility
  requiresFounder?: boolean; // Added for compatibility
}

export interface UseCertificateResult {
  certificates: Certificate[];
  templates: CertificateTemplate[];
  loading: boolean;
  error: Error | null;
  createCertificate: (data: Partial<Certificate>) => Promise<Certificate>;
  fetchUserCertificates: (userId?: string) => Promise<Certificate[]>;
  fetchTemplates: () => Promise<CertificateTemplate[]>;
  mint: (certificate: Certificate) => Promise<void>;
  download: (certificate: Certificate) => void;
  share: (certificate: Certificate) => void;
}
