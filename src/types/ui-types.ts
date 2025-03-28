
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
  | 'treasure'
  | 'ornate';

export interface RegalBadgeProps {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
  className?: string;
}
