
export interface RegalBadgeProps {
  variant?: 'gold' | 'silver' | 'bronze' | 'outlineGold' | 'outlineSilver' | 'outlineBronze' | 'teamRed' | 'teamGreen' | 'teamBlue' | 'default' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
  label?: string;
  rarity?: string;
  tier?: string;
}

export interface RoyalButtonProps {
  variant?: 'royal' | 'royalGold' | 'royalCrimson' | 'royalNavy' | 'royalPurple' | 'outline' | 'glass' | 'goldOutline' | 'crimsonOutline' | 'navyOutline' | 'mahogany';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
  shimmer?: boolean;
  glow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export interface RoyalCardProps {
  variant?: 'default' | 'gold' | 'silver' | 'bronze';
  hover?: 'scale' | 'glow' | 'shadow' | 'none';
  children?: React.ReactNode;
  className?: string;
}

export interface ThroneBackgroundProps {
  variant?: 'royal' | 'crimson' | 'navy' | 'purple';
  particles?: boolean;
  animate?: boolean;
  opacity?: number;
  className?: string;
  density?: 'low' | 'medium' | 'high';
}
