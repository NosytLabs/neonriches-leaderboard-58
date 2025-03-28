
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
