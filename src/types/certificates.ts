
import { TeamColor } from './team';

// Certificate types
export type CertificateType = 'achievement' | 'reward' | 'nobility' | 'spending' | 'honor';
export type CertificateStyle = 'classic' | 'royal' | 'elegant' | 'modern' | 'vintage' | 'gold' | 'silver' | 'bronze';

// Use union of string literals instead of enum for better TS compatibility
export type CertificateTeam = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none';

// Certificate interface
export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateIssued: string;
  issuedAt?: string; // Alias for compatibility
  style: CertificateStyle;
  type: CertificateType;
  issuerName: string;
  recipientName: string;
  recipientId: string;
  userId?: string; // Alias for compatibility
  mintAddress?: string;
  status?: 'pending' | 'minted' | 'revoked';
  team?: CertificateTeam | TeamColor | string;
  tier?: string;
  isMinted?: boolean; // Added for compatibility
}

// Certificate Template interface
export interface CertificateTemplate {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: CertificateType;
  team: CertificateTeam | TeamColor | string;
  style: CertificateStyle;
  available: boolean;
}
