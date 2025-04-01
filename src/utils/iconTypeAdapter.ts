
import { IconColor, MedievalIconColor } from '@/types/ui/decorations/types';

export const adaptIconColor = (color: IconColor | string): MedievalIconColor => {
  switch (color) {
    case 'royal': return 'royal';
    case 'gold': return 'gold';
    case 'silver': return 'silver';
    case 'bronze': return 'bronze';
    case 'red': return 'red';
    case 'blue': return 'blue';
    case 'green': return 'green';
    case 'purple': return 'purple';
    default: return 'gold';
  }
};

export default {
  adaptIconColor
};
