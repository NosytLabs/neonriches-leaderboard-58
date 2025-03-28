
// UI Component Types
declare type RoyalDividerVariant = 
  | 'default' 
  | 'fancy' 
  | 'ornate' 
  | 'simple'
  | 'scroll'
  | 'quill'
  | 'treasure'
  | 'crown'
  | 'line';

declare interface RegalBadgeProps {
  children?: React.ReactNode;
  tier?: string;
  className?: string;
}

// Toast variant type extensions
declare type ToastVariant = 'default' | 'destructive' | 'royal' | 'success';

// Cosmetic item interface
declare interface CosmeticItem {
  id: string;
  name: string;
  description: string;
  category: string;
  rarity: string;
  cost: number;
  type: string;
  imageSrc?: string;
  cssClass?: string;
}

// Define PremiumSoundPack as string for type safety
declare type PremiumSoundPack = string;
