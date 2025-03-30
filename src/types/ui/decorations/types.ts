
import React from 'react';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type DecorationColor = 'gold' | 'royal' | 'crimson' | 'navy' | 'purple' | 'default';
export type DecorationPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
export type DecorationType = 'border' | 'shield' | 'ornate' | 'fancy' | 'simple' | 'line' | 'double';
export type DecorationVariant = 'primary' | 'secondary' | 'accent' | 'default';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type MedievalIconColor = 'gold' | 'silver' | 'royal' | 'black' | 'white' | 'crimson' | 'navy';

export interface BaseDecorationProps {
  className?: string;
  size?: DecorationSize;
  color?: DecorationColor;
  variant?: DecorationType; // Add missing property
  type?: string; // Add missing property
  animate?: boolean; // Add missing property
  style?: React.CSSProperties; // Add missing property
  children?: React.ReactNode; // Add missing property
  position?: string; // Add missing property
  icon?: React.ReactNode; // Add missing property
}

export interface DecorationClassesResult {
  container: string;
  border?: string;
  icon?: string;
}

export const sizeClasses: Record<DecorationSize, string> = {
  'xs': 'w-6 h-6',
  'sm': 'w-10 h-10',
  'md': 'w-16 h-16',
  'lg': 'w-24 h-24',
  'xl': 'w-32 h-32',
  '2xl': 'w-40 h-40',
  '3xl': 'w-48 h-48',
  '4xl': 'w-64 h-64'
};

export function getColorClass(color: DecorationColor): string {
  switch (color) {
    case 'gold': return 'text-royal-gold';
    case 'royal': return 'text-royal-navy';
    case 'crimson': return 'text-royal-crimson';
    case 'navy': return 'text-royal-navy';
    case 'purple': return 'text-royal-purple';
    default: return 'text-gray-300';
  }
}

export function toMedievalIconColor(color: DecorationColor): MedievalIconColor {
  switch (color) {
    case 'gold': return 'gold';
    case 'royal': return 'royal';
    case 'crimson': return 'crimson';
    case 'navy': return 'navy';
    case 'purple': return 'royal';
    default: return 'gold';
  }
}
