
export interface RoyalDividerProps {
  variant?: 'line' | 'ornate' | 'simple' | 'elegant';
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
  | 'link';

export type RoyalDecorationType = 
  | 'royal-insignia' 
  | 'crown' 
  | 'scroll' 
  | 'shield' 
  | 'sword' 
  | 'coins';

export type RoyalDividerVariant = 
  | 'line' 
  | 'ornate' 
  | 'simple' 
  | 'elegant'
  | 'scroll'
  | 'quill'
  | 'treasure'
  | 'crown';
