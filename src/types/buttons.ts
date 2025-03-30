
// Types for buttons used throughout the application

export type RoyalButtonVariant = 
  | 'default'
  | 'royal'
  | 'gold'
  | 'crimson'
  | 'emerald'
  | 'obsidian'
  | 'outline'
  | 'ghost';

export type RoyalButtonSize = 
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl';

export interface RoyalButtonProps {
  variant?: RoyalButtonVariant;
  size?: RoyalButtonSize;
  animated?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  withIcon?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
