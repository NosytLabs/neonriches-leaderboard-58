
/**
 * Utility functions for handling styles in the application
 */

// Convert hex color to RGB values
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Get contrast color (black or white) based on background color
export const getContrastColor = (hexColor: string): 'black' | 'white' => {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return 'white';
  
  // Calculate luminance using YIQ formula
  const yiq = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
};

// Get color by user tier
export const getTierColor = (tier: string): string => {
  const tierColors: Record<string, string> = {
    'free': '#718096', // gray
    'basic': '#4299e1', // blue
    'premium': '#9f7aea', // purple
    'royal': '#f6ad55', // orange
    'pro': '#3182ce', // darker blue
    'gold': '#ecc94b', // gold
    'silver': '#cbd5e0', // silver
    'bronze': '#c05621', // bronze
    'legendary': '#e53e3e', // red
  };
  
  return tierColors[tier.toLowerCase()] || '#718096';
};

// Get CSS gradient based on tier
export const getTierGradient = (tier: string): string => {
  const tierGradients: Record<string, string> = {
    'royal': 'linear-gradient(135deg, #f6ad55 0%, #ed8936 100%)',
    'premium': 'linear-gradient(135deg, #9f7aea 0%, #6b46c1 100%)',
    'pro': 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)',
    'gold': 'linear-gradient(135deg, #ecc94b 0%, #d69e2e 100%)',
    'legendary': 'linear-gradient(135deg, #e53e3e 0%, #c53030 100%)',
  };
  
  return tierGradients[tier.toLowerCase()] || 'none';
};

// Get CSS shadow based on tier
export const getTierShadow = (tier: string): string => {
  const tierShadows: Record<string, string> = {
    'royal': '0 4px 14px 0 rgba(246, 173, 85, 0.4)',
    'premium': '0 4px 14px 0 rgba(159, 122, 234, 0.4)',
    'gold': '0 4px 14px 0 rgba(236, 201, 75, 0.4)',
    'legendary': '0 4px 14px 0 rgba(229, 62, 62, 0.4)',
  };
  
  return tierShadows[tier.toLowerCase()] || 'none';
};

// Generate a CSS class based on user tier
export const getTierClass = (tier: string): string => {
  const tierClasses: Record<string, string> = {
    'free': 'tier-free',
    'basic': 'tier-basic',
    'premium': 'tier-premium',
    'royal': 'tier-royal',
    'pro': 'tier-pro',
    'gold': 'tier-gold',
    'silver': 'tier-silver',
    'bronze': 'tier-bronze',
    'legendary': 'tier-legendary',
  };
  
  return tierClasses[tier.toLowerCase()] || 'tier-basic';
};

export default {
  hexToRgb,
  getContrastColor,
  getTierColor,
  getTierGradient,
  getTierShadow,
  getTierClass,
};
