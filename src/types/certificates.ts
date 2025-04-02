
export type CertificateType = 'spending' | 'achievement' | 'rank' | 'royal' | 'team' | 'founding' | 'special';

export type CertificateStyle = 'classic' | 'royal' | 'modern' | 'vintage' | 'minimalist' | 'ornate';

export type CertificateTeam = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'none';

export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  title: string;
  description: string;
  issueDate: string;
  imageUrl: string;
  nftAddress?: string;
  mintDate?: string;
  style: CertificateStyle;
  team?: CertificateTeam;
  tier?: string;
  metadata?: Record<string, any>;
}

export interface CertificateTemplate {
  id: string;
  type: CertificateType;
  title: string;
  description: string;
  style: CertificateStyle;
  imageUrl: string;
  available: boolean;
  price?: number;
  requirements?: {
    minSpend?: number;
    minRank?: number;
    teamRequired?: boolean;
    tierRequired?: string;
  };
}
