
import { MedievalDecorationColor, MedievalIconColor } from '@/types/ui/decorations/types';

export const MEDIEVAL_ICON_COLORS: Record<MedievalIconColor, string> = {
  gold: 'text-royal-gold',
  silver: 'text-gray-300',
  bronze: 'text-amber-700',
  royal: 'text-royal-purple',
  crimson: 'text-royal-crimson',
  navy: 'text-royal-navy',
  platinum: 'text-indigo-300'
};

export function getColorClass(color: MedievalDecorationColor, prefix: string = 'text'): string {
  switch (color) {
    case 'gold': return `${prefix}-royal-gold`;
    case 'silver': return `${prefix}-gray-300`;
    case 'bronze': return `${prefix}-amber-700`;
    case 'royal': return `${prefix}-royal-purple`;
    case 'crimson': return `${prefix}-royal-crimson`;
    case 'navy': return `${prefix}-royal-navy`;
    case 'platinum': return `${prefix}-indigo-300`;
    default: return `${prefix}-royal-gold`;
  }
}

export function toMedievalIconColor(color: MedievalDecorationColor): MedievalIconColor {
  return color as MedievalIconColor;
}
