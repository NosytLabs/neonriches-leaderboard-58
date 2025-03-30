
import { MedievalIconColor } from '@/types/ui/decorations/types';

export const toMedievalIconColor = (color: string): MedievalIconColor => {
  if (color === 'gold' || color === 'silver' || color === 'bronze' || color === 'royal' || 
      color === 'crimson' || color === 'navy' || color === 'purple' || color === 'emerald' || 
      color === 'azure' || color === 'platinum') {
    return color as MedievalIconColor;
  }
  return 'default';
};
