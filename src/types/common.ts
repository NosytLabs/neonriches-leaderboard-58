
// Common utility types used across the application

// Common UI sizes
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

// Common colors used in the medieval theme
export type MedievalColor = 
  | 'default'
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'royal'
  | 'purple'
  | 'green'
  | 'red'
  | 'blue'
  | 'crimson';

// Common theme variants
export type ThemeVariant = 'light' | 'dark' | 'royal' | 'system';

// Positioning options
export type Position = 
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'center';

// Alignment options
export type Alignment = 'start' | 'center' | 'end';

// Direction options
export type Direction = 'horizontal' | 'vertical';

// Status types
export type Status = 'idle' | 'loading' | 'success' | 'error';

// ID type that can be string or number
export type ID = string | number;

// Generic record with string keys
export type StringRecord<T = any> = Record<string, T>;

// Animation variants
export type AnimationVariant = 'fade' | 'slide' | 'scale' | 'bounce' | 'spin' | 'none';

// Animation durations
export type AnimationDuration = 'fast' | 'normal' | 'slow' | number;

// Base props interface with common properties
export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children?: React.ReactNode;
  [key: string]: any;
}
