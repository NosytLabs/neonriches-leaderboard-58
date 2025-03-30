
import React from 'react';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type DecorationColor = 'royal' | 'gold' | 'silver' | 'default';

export interface BaseDecorationProps {
  size?: DecorationSize;
  color?: DecorationColor;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: string; // Add type property for RoyalDecoration component
}
