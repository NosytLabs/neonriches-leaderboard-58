
export interface DecorationProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: 'default' | 'gold' | 'royal' | 'crimson';
  className?: string;
  animate?: boolean;
  icon?: string;
  container?: string;
  border?: string;
}

// Alias for backward compatibility
export type BaseDecorationProps = DecorationProps;

export type DecorationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

export type MedievalIconName = 
  'crown' | 
  'scroll' | 
  'shield' | 
  'sword' | 
  'Trophy' | 
  'Medal' | 
  'castle' | 
  'Heart' | 
  'star' | 
  'Gem' | 
  'Key';

export type MedievalIconColor = 
  'gold' | 
  'silver' | 
  'bronze' | 
  'red' | 
  'blue' | 
  'green' | 
  'purple' | 
  'royal' | 
  'crimson' | 
  'default';

export type MedievalIconSize = DecorationSize;

export type IconColor = 
  'default' | 
  'gold' | 
  'silver' | 
  'bronze' | 
  'royal' | 
  'crimson' | 
  'navy' | 
  'red' | 
  'blue' | 
  'green' | 
  'purple';
