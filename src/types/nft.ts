
export type NFTRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface NFTAttributes {
  trait_type: string;
  value: string | number;
  display_type?: string;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  external_url?: string;
  attributes: NFTAttributes[];
  symbol?: string;
  collection?: {
    name: string;
    family?: string;
  };
  properties?: Record<string, any>;
}

export interface NFT {
  id: string;
  mint: string;
  owner: string;
  metadata: NFTMetadata;
  rarity: NFTRarity;
  createdAt: string;
  network: 'solana' | 'ethereum';
}
