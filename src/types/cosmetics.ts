
export type CosmeticCategory = 
  | 'border' 
  | 'background' 
  | 'color' 
  | 'font'
  | 'emoji'  
  | 'title'
  | 'badge'
  | 'theme'
  | 'effect';

export type CosmeticType = 
  | 'static'
  | 'animated'
  | 'gradient'
  | 'pattern'
  | 'glow'
  | 'pulse'
  | 'shimmer'
  | 'rainbow'
  | 'particle'
  | 'custom';

export type CosmeticRarity = 
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'epic'
  | 'legendary'
  | 'royal'
  | 'exclusive'
  | 'limited';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: CosmeticCategory;
  type: CosmeticType;
  rarity: CosmeticRarity;
  cost: number;
  placement: 'profile' | 'post' | 'comment' | 'avatar' | 'global';
  imageSrc?: string;
  cssClass?: string;
  requirements?: {
    tier?: string;
    spending?: number;
    team?: string;
  };
}
