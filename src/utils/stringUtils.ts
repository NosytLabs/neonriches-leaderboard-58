
import { CosmeticCategory } from '@/types/cosmetics';

// Format category names for display
export function formatCategoryName(category: CosmeticCategory): string {
  const categoryMap: Record<CosmeticCategory, string> = {
    border: 'Borders',
    color: 'Colors',
    font: 'Fonts',
    emoji: 'Emojis',
    background: 'Backgrounds',
    effect: 'Effects',
    title: 'Titles',
    badge: 'Badges',
    theme: 'Themes'
  };
  
  return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Format username for display
export function formatUsername(username: string): string {
  if (!username) return 'Anonymous';
  return username.length > 15 ? username.slice(0, 12) + '...' : username;
}

// Create a slug from a string
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

// Format price with commas
export function formatPrice(price: number): string {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
