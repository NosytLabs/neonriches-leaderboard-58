
/**
 * Utility functions to handle icon type adaptations
 */

export const adaptIconSize = (size: string | number | undefined): number => {
  if (typeof size === 'number') {
    return size;
  }
  
  if (typeof size === 'string') {
    const sizeMap: Record<string, number> = {
      'xs': 12,
      'sm': 16,
      'md': 24,
      'lg': 32,
      'xl': 40,
      '2xl': 48
    };
    
    // Check if the size is a known string size
    if (size in sizeMap) {
      return sizeMap[size];
    }
    
    // Check if it's a number string
    const parsed = parseInt(size, 10);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  
  // Default size
  return 24;
};

export const adaptIconColor = (color: string | undefined): string => {
  if (!color) return 'currentColor';
  
  const colorMap: Record<string, string> = {
    'default': 'currentColor',
    'primary': '#3B82F6', // blue-500
    'secondary': '#6B7280', // gray-500
    'success': '#10B981', // green-500
    'danger': '#EF4444', // red-500
    'warning': '#F59E0B', // amber-500
    'info': '#3B82F6', // blue-500
    'royal': '#FFD700', // gold
    'team-red': '#EF4444',
    'team-blue': '#3B82F6',
    'team-green': '#10B981',
    'team-gold': '#FFD700',
    'team-purple': '#8B5CF6'
  };
  
  return colorMap[color] || color;
};

export default {
  adaptIconSize,
  adaptIconColor
};
