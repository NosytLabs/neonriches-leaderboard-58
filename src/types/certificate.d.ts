
export type CertificateType = 'achievement' | 'spending' | 'membership' | 'team' | 'nobility' | 'special';
export type CertificateStyle = 'royal' | 'premium' | 'standard' | 'basic' | 'special';
export type CertificateTeam = 'red' | 'green' | 'blue' | 'gold' | 'purple' | 'all' | 'none';
export type CertificateStatus = 'issued' | 'minted' | 'pending' | 'revoked' | 'expired';

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  userId: string;
  dateIssued: string;
  mintAddress: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  rarity: string;
  status: CertificateStatus;
}

export interface CertificateTemplate {
  id: string;
  title: string; // Required field
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: CertificateType;
  team: CertificateTeam;
  style: CertificateStyle;
  available: boolean;
}

export interface CertificateNFT {
  mintAddress: string;
  mintDate: string;
  dateIssued?: string;
}
