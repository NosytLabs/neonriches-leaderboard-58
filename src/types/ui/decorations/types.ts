
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export type MedievalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type MedievalIconColor = 'gold' | 'silver' | 'crimson' | 'royal' | 'default';

export interface BaseDecorationProps {
  size?: MedievalSize;
  color?: MedievalIconColor;
  className?: string;
  children?: React.ReactNode;
}

export interface DetailedDecorationProps extends BaseDecorationProps {
  container?: {
    className?: string;
  };
  border?: {
    className?: string;
  };
  icon?: {
    className?: string;
  };
}

export type RoyalDividerVariant = 'line' | 'double' | 'fancy' | 'ornate' | 'simple';
export type RoyalDividerColor = 'default' | 'gold' | 'crimson' | 'royal' | 'purple';
