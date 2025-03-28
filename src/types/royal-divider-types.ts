
export interface RoyalDividerProps {
  variant?: RoyalDividerVariant;
  color?: 'gold' | 'crimson' | 'navy' | 'emerald' | 'silver';
  label?: string;
  className?: string;
  inverted?: boolean;
}

export interface SpendAmountProps {
  amount: number;
  showPrefix?: boolean;
  showPostfix?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'royal' | 'success' | 'warning' | 'danger';
  withIcon?: boolean;
}

export type RoyalButtonVariant = 
  | 'default' 
  | 'royal' 
  | 'gold' 
  | 'crimson' 
  | 'outline' 
  | 'ghost'
  | 'link'
  | 'royalGold'
  | 'royalPurple'
  | 'royalNavy'
  | 'royalCrimson'
  | 'glass'
  | 'goldOutline'
  | 'crimsonOutline'
  | 'navyOutline'
  | 'mahogany';

export type RoyalDecorationType = 
  | 'royal-insignia' 
  | 'crown' 
  | 'scroll' 
  | 'shield' 
  | 'sword' 
  | 'coins'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'corner';

export type RoyalDividerVariant = 
  | 'line' 
  | 'ornate' 
  | 'simple' 
  | 'elegant'
  | 'scroll'
  | 'quill'
  | 'treasure'
  | 'crown'
  | 'sword'
  | 'shield'
  | 'double'
  | 'royal';
