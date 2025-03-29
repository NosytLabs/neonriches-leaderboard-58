
import { MedievalDecorationColor, MedievalIconColor, MEDIEVAL_ICON_COLORS } from '@/types/ui/decorations/types';

export const getColorClass = (color: MedievalDecorationColor = 'gold'): string => {
  return MEDIEVAL_ICON_COLORS[color] || MEDIEVAL_ICON_COLORS.gold;
};

export const toMedievalIconColor = (color: MedievalDecorationColor): MedievalIconColor => {
  return color as MedievalIconColor;
};
