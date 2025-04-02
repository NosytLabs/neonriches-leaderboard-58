
import { CSSProperties } from 'react';

/**
 * Helper functions for styling components
 */

/**
 * Returns flexbox CSS properties
 */
export const asFlex = (
  justify: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'center',
  align: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline' = 'center',
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse' = 'row'
): CSSProperties => {
  return {
    display: 'flex',
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align
  };
};

/**
 * Returns grid CSS properties
 */
export const asGrid = (
  columns: number | string = 2,
  gap: number | string = 1,
  rows?: number | string
): CSSProperties => {
  return {
    display: 'grid',
    gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    ...(rows && { gridTemplateRows: typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows }),
    gap: typeof gap === 'number' ? `${gap}rem` : gap
  };
};

/**
 * Returns royal-themed styling
 */
export const asRoyal = (
  variant: 'gold' | 'crimson' | 'emerald' | 'sapphire' = 'gold',
  isHovered: boolean = false
): CSSProperties => {
  const variantStyles = {
    gold: {
      color: isHovered ? '#FFD700' : '#B8860B',
      borderColor: '#B8860B',
      background: 'rgba(184, 134, 11, 0.1)'
    },
    crimson: {
      color: isHovered ? '#DC143C' : '#8B0000',
      borderColor: '#8B0000',
      background: 'rgba(139, 0, 0, 0.1)'
    },
    emerald: {
      color: isHovered ? '#50C878' : '#2E8B57',
      borderColor: '#2E8B57',
      background: 'rgba(46, 139, 87, 0.1)'
    },
    sapphire: {
      color: isHovered ? '#0F52BA' : '#082567',
      borderColor: '#082567',
      background: 'rgba(8, 37, 103, 0.1)'
    }
  };

  return variantStyles[variant];
};

/**
 * Returns padding/margin helper
 */
export const asSpaced = (
  padding?: string | number,
  margin?: string | number
): CSSProperties => {
  return {
    ...(padding !== undefined && { 
      padding: typeof padding === 'number' ? `${padding}rem` : padding 
    }),
    ...(margin !== undefined && { 
      margin: typeof margin === 'number' ? `${margin}rem` : margin 
    })
  };
};

/**
 * Returns text styling
 */
export const asText = (
  size?: string | number,
  weight?: string | number,
  align?: 'left' | 'center' | 'right' | 'justify'
): CSSProperties => {
  return {
    ...(size !== undefined && { 
      fontSize: typeof size === 'number' ? `${size}rem` : size 
    }),
    ...(weight !== undefined && { fontWeight: weight }),
    ...(align !== undefined && { textAlign: align })
  };
};

export default {
  asFlex,
  asGrid,
  asRoyal,
  asSpaced,
  asText
};
