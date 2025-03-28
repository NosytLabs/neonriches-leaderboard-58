
export type RoyalDividerVariant = 
  | 'simple'
  | 'ornate'
  | 'crown'
  | 'scroll'
  | 'quill'
  | 'treasure'
  | 'chalice'
  | 'line'
  | 'royal'
  | 'sword'
  | 'shield'
  | 'double';

export type RoyalButtonVariant = 
  'royal' | 
  'royalGold' | 
  'royalPurple' | 
  'royalNavy' | 
  'royalCrimson' | 
  'glass' | 
  'outline' | 
  'goldOutline' | 
  'crimsonOutline' | 
  'navyOutline' | 
  'mahogany';

export type RoyalDecorationType = 'top' | 'bottom' | 'left' | 'right' | 'corner';

export interface SpendAmountProps {
  amount: number;
  withIcon?: boolean;
  className?: string;
  showCurrency?: boolean;
}
