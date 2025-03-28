
import type { 
  MedievalIconName as TypesMedievalIconName,
  MedievalIconSize as TypesMedievalIconSize,
  MedievalIconColor as TypesMedievalIconColor
} from '@/types/ui/decorations/types';

import type {
  MedievalIconName as ComponentMedievalIconName,
  MedievalIconSize as ComponentMedievalIconSize,
  MedievalIconColor as ComponentMedievalIconColor  
} from '@/components/ui/medieval-icon';

// Function to adapt types/ui/decorations/types to components/ui/medieval-icon
export function adaptIconName(name: TypesMedievalIconName): ComponentMedievalIconName {
  // Map from types to component-compatible values
  const nameMap: Record<string, ComponentMedievalIconName> = {
    'chalice': 'goblet',
    'fleur-de-lis': 'crown',
    'knight': 'user',
    'bow': 'sword',
    'axe': 'sword',
    'cross': 'shield'
  };

  // Return the mapped value if it exists, otherwise return the original value if it's valid
  return nameMap[name] || name as ComponentMedievalIconName;
}

export function adaptIconSize(size: TypesMedievalIconSize): ComponentMedievalIconSize {
  // Map from types to component-compatible values
  const sizeMap: Record<string, ComponentMedievalIconSize> = {
    '3xl': '2xl',
    '4xl': '2xl'
  };

  // Return the mapped value if it exists, otherwise return the original value if it's valid
  return sizeMap[size] || size as ComponentMedievalIconSize;
}

export function adaptIconColor(color: TypesMedievalIconColor): ComponentMedievalIconColor {
  // Map from types to component-compatible values
  const colorMap: Record<string, ComponentMedievalIconColor> = {
    'royal-gold': 'gold',
    'royal-silver': 'silver',
    'royal-crimson': 'crimson',
    'royal-purple': 'purple',
    'royal-blue': 'blue',
    'royal-navy': 'navy'
  };

  // Return the mapped value if it exists, otherwise return the original value if it's valid
  return colorMap[color] || color as ComponentMedievalIconColor;
}
