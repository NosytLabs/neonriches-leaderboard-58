
import { CosmeticCategory } from '@/types/cosmetics';

/**
 * Format a string in camelCase or with hyphens to a human-readable format
 */
export const formatName = (name: string): string => {
  return name
    // Insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // Replace hyphens with spaces
    .replace(/-/g, ' ')
    // Remove underscores and replace with spaces
    .replace(/_/g, ' ')
    // Uppercase the first character
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

/**
 * Format cosmetic category name to be more human-readable
 */
export const formatCategoryName = (category: CosmeticCategory): string => {
  switch (category) {
    case 'border': return 'Borders';
    case 'background': return 'Backgrounds';
    case 'badge': return 'Badges';
    case 'title': return 'Titles';
    case 'effect': return 'Effects';
    case 'emote': return 'Emotes';
    case 'color': return 'Colors';
    case 'font': return 'Fonts';
    case 'emoji': return 'Emojis';
    case 'theme': return 'Themes';
    default: return formatName(category);
  }
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Generate a username from a display name
 */
export const generateUsername = (displayName: string): string => {
  return displayName
    .toLowerCase()
    .replace(/\s+/g, '')
    .replace(/[^\w\s]/gi, '');
};

/**
 * Format a number with commas for thousands
 */
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format currency values
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};
