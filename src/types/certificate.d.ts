
export type CertificateType = 'achievement' | 'membership' | 'spending' | 'team' | 'nobility' | 'royal';
export type CertificateStyle = 'standard' | 'premium' | 'royal' | 'legendary';
export type CertificateTeam = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none' | 'all';
export type CertificateStatus = 'pending' | 'issued' | 'minted' | 'revoked' | 'expired';

export interface Certificate {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  type: CertificateType;
  style: CertificateStyle;
  team: CertificateTeam;
  dateIssued: string;
  mintAddress?: string;
  status: CertificateStatus;
  expiresAt?: string;
  mintDate?: string;
  rarity?: string;
}

export interface CertificateTemplate {
  id: string;
  title: string;
  name: string;
  description: string;
  previewUrl: string;
  imageUrl: string;
  type: CertificateType;
  team: CertificateTeam;
  style: CertificateStyle;
  available: boolean;
}

export interface CertificateView {
  id: string;
  title: string;
  description: string;
  image: string;
  dateIssued: string;
  userId: string;
  team: CertificateTeam;
  style: CertificateStyle;
  mintAddress?: string;
  status: CertificateStatus;
}
