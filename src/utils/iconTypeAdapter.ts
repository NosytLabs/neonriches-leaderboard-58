
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
      '2xl': 48,
      '3xl': 56,
      '4xl': 64
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
    'royal': '#8B5CF6', // purple-500
    'gold': '#F59E0B', // amber-500
    'team-red': '#EF4444',
    'team-blue': '#3B82F6',
    'team-green': '#10B981',
    'team-gold': '#F59E0B',
    'team-purple': '#8B5CF6'
  };
  
  return colorMap[color] || color;
};

// Export the size and color maps for direct access
export const iconSizeMap = {
  'xs': 'h-3 w-3',
  'sm': 'h-4 w-4',
  'md': 'h-5 w-5',
  'lg': 'h-6 w-6',
  'xl': 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-12 w-12',
  '4xl': 'h-16 w-16'
};

export const iconColorMap = {
  'default': 'text-foreground',
  'muted': 'text-muted-foreground',
  'accent': 'text-accent-foreground',
  'primary': 'text-primary',
  'secondary': 'text-secondary',
  'info': 'text-blue-500',
  'success': 'text-green-500',
  'warning': 'text-yellow-500',
  'danger': 'text-red-500',
  'royal': 'text-purple-500',
  'gold': 'text-yellow-400'
};

// Also export directly as default
export default {
  adaptIconSize,
  adaptIconColor,
  iconSizeMap,
  iconColorMap
};
