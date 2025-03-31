
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

export type MedievalIconColor = 
  | 'gold' 
  | 'silver' 
  | 'bronze' 
  | 'royal' 
  | 'crimson'
  | 'green'
  | 'blue'
  | 'red';

export type MedievalIconSize = 
  | 'xs' 
  | 'sm' 
  | 'md' 
  | 'lg' 
  | 'xl' 
  | '2xl' 
  | '3xl' 
  | '4xl';

export function toMedievalIconColor(color: string): MedievalIconColor {
  switch (color) {
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'royal': return 'royal';
    case 'crimson': return 'crimson';
    case 'green': return 'green';
    case 'blue': return 'blue';
    case 'red': return 'red';
    default: return 'gold';
  }
}
