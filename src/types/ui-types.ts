
import { CosmeticRarity } from './cosmetics';

export interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  rarity: CosmeticRarity;
  cost: number;
  type: string;
  imageSrc?: string;
  cssClass?: string;
}

export type RoyalDividerVariant = 
  | 'line' 
  | 'crown' 
  | 'sword' 
  | 'shield' 
  | 'scroll' 
  | 'double' 
  | 'quill' 
  | 'treasure';
