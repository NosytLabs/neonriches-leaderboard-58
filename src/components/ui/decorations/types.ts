
import React, { CSSProperties } from 'react';

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export type DecorationPosition = 
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
  | 'center-left'
  | 'center-right'
  | 'center';

export type DecorationColor = 
  | 'gold'
  | 'royal'
  | 'crimson'
  | 'navy'
  | 'purple'
  | 'white';

export type DecorationType =
  | 'star'
  | 'crown'
  | 'scroll'
  | 'shield'
  | 'sword'
  | 'gem'
  | 'flourish';

export type DecorationVariant =
  | 'default'
  | 'medieval'
  | 'royal'
  | 'ornate'
  | 'simple';

export interface DecorationProps {
  size?: DecorationSize | number;
  position?: DecorationPosition;
  color?: DecorationColor | string;
  className?: string;
  animate?: boolean;
  style?: CSSProperties;
  children?: React.ReactNode;
  type?: DecorationType;
  variant?: DecorationVariant;
  container?: boolean;
  border?: boolean;
  icon?: React.ReactNode;
}
