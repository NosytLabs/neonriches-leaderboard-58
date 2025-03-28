
import { RoyalDividerVariant } from './royal-divider-types';

// UI Component Types
declare type RegalBadgeProps = {
  children?: React.ReactNode;
  tier?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'success' | 'warning' | 'danger' | 'info' | 'royal';
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  data?: { [key: string]: string };
  id?: string;
  hidden?: boolean;
  onClick?: () => void;
};

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

// PremiumSoundPack type export
declare type PremiumSoundPack = string;

// Export Royal Divider type
export { RoyalDividerVariant };

