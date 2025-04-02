
/**
 * Unified Certificate interface to resolve type conflicts
 */

export type CertificateType = 
  | 'achievement' 
  | 'rank' 
  | 'spending' 
  | 'team' 
  | 'founder' 
  | 'royal' 
  | 'supporter' 
  | 'special'
  | 'nobility'
  | 'custom'
  | 'membership'; // Added for compatibility

export type CertificateStyle = 
  | 'standard'
  | 'classic'
  | 'modern'
  | 'royal'
  | 'elite'
  | 'gold'
  | 'platinum'
  | 'silver'
  | 'bronze'
  | 'custom'
  | 'premium'  // Added for compatibility
  | 'legendary'; // Added for compatibility

export type CertificateTeam = 
  | 'red'
  | 'blue'
  | 'green'
  | 'gold'
  | 'purple'
  | 'neutral'
  | 'none'
  | 'all';  // Added for compatibility

export interface Certificate {
  id: string;
  title: string;
  name?: string; // For backward compatibility
  description: string;
  imageUrl: string;
  previewUrl?: string;
  userId?: string;
  recipientId?: string; // For backward compatibility
  dateIssued: string;
  issuedAt?: string; // For backward compatibility
  mintAddress?: string;
  mintDate?: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  status?: 'issued' | 'minted' | 'pending' | 'revoked';
  rarity?: string;
  issuerName?: string;
  recipientName?: string;
  tier?: string;
  isMinted?: boolean;
  expiresAt?: string;
  available?: boolean;
  availableForTier?: string[];
  timeframeRequirement?: number;
  requiresRank?: number;
  requiresSpending?: number;
  requiresFounder?: boolean;
}

export interface CertificateTemplate extends Omit<Certificate, 'userId' | 'dateIssued' | 'mintAddress' | 'mintDate' | 'recipientName'> {
  availableForTier: string[];
  available: boolean;
}

export interface CertificateRepository {
  getCertificateById: (id: string) => Promise<Certificate | null>;
  getUserCertificates: (userId: string) => Promise<Certificate[]>;
  createCertificate: (certificate: Omit<Certificate, 'id'>) => Promise<Certificate>;
  mintCertificate: (certId: string) => Promise<boolean>;
  verifyCertificate: (mintAddress: string) => Promise<Certificate | null>;
}

// Helper function to convert between certificate types
export function adaptCertificate(cert: any): Certificate {
  return {
    id: cert.id || '',
    title: cert.title || cert.name || 'Certificate',
    name: cert.name || cert.title || 'Certificate',
    description: cert.description || '',
    imageUrl: cert.imageUrl || '',
    previewUrl: cert.previewUrl || cert.imageUrl || '',
    userId: cert.userId || cert.recipientId || '',
    recipientId: cert.recipientId || cert.userId || '',
    dateIssued: cert.dateIssued || cert.issuedAt || new Date().toISOString(),
    issuedAt: cert.issuedAt || cert.dateIssued || new Date().toISOString(),
    mintAddress: cert.mintAddress || '',
    mintDate: cert.mintDate || '',
    type: cert.type || 'achievement',
    style: cert.style || 'standard',
    team: cert.team || 'neutral',
    status: cert.status || 'issued',
    rarity: cert.rarity || 'common',
    issuerName: cert.issuerName || 'Royal System',
    recipientName: cert.recipientName || '',
    tier: cert.tier || '',
    isMinted: !!cert.isMinted || !!cert.mintAddress,
    expiresAt: cert.expiresAt || '',
  };
}
