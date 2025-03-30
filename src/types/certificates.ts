
import { UserProfile } from "./user";

export type CertificateType = 
  | 'royal'
  | 'team'
  | 'achievement'
  | 'milestone'
  | 'rank'
  | 'custom';

export interface Certificate {
  id: string;
  userId: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  type: CertificateType;
  title: string;
  description: string;
  createdAt: string;
  rank?: number;
  team?: string;
  amountSpent?: number;
  signature?: string;
  shareUrl?: string;
  mintAddress?: string;
  isMinted: boolean;
  mintedAt?: string;
  templateId?: string;
  properties?: Record<string, any>;
}

export interface CertificateTemplate {
  id: string;
  name: string;
  type: CertificateType;
  team?: string;
  backgroundImage?: string;
  borderImage?: string;
  sealImage?: string;
  colorScheme: Record<string, string>;
  minRank?: number;
  maxRank?: number;
  templateHtml?: string;
}

export interface CertificateMetadata {
  name: string;
  description: string;
  image: string;
  attributes: {
    trait_type: string;
    value: string | number;
  }[];
  properties: {
    files: {
      uri: string;
      type: string;
    }[];
    category: string;
    creators: {
      address: string;
      share: number;
    }[];
  };
}
