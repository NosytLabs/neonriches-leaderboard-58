
import { CosmeticRarity, CosmeticCategory } from '@/types/cosmetics';

export function getRarityColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'text-gray-300';
    case 'uncommon':
      return 'text-green-400';
    case 'rare':
      return 'text-blue-400';
    case 'epic':
      return 'text-purple-400';
    case 'legendary':
      return 'text-royal-gold';
    default:
      return 'text-gray-300';
  }
}

export function getRarityBgColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'bg-gray-800/50';
    case 'uncommon':
      return 'bg-green-900/50';
    case 'rare':
      return 'bg-blue-900/50';
    case 'epic':
      return 'bg-purple-900/50';
    case 'legendary':
      return 'bg-amber-900/50';
    default:
      return 'bg-gray-800/50';
  }
}

export function getRarityBorderColor(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'border-gray-500/50';
    case 'uncommon':
      return 'border-green-500/50';
    case 'rare':
      return 'border-blue-500/50';
    case 'epic':
      return 'border-purple-500/50';
    case 'legendary':
      return 'border-royal-gold/50';
    default:
      return 'border-gray-500/50';
  }
}

export function getCosmeticPreviewStyle(rarity: CosmeticRarity): string {
  switch (rarity) {
    case 'common':
      return 'bg-gray-700/50 border border-gray-500/50';
    case 'uncommon':
      return 'bg-green-900/30 border border-green-500/50';
    case 'rare':
      return 'bg-blue-900/30 border border-blue-500/50';
    case 'epic':
      return 'bg-purple-900/30 border border-purple-500/50';
    case 'legendary':
      return 'bg-amber-900/30 border border-royal-gold/50';
    default:
      return 'bg-gray-700/50 border border-gray-500/50';
  }
}

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
  
  return categoryMap[category] || (typeof category === 'string' ? category.charAt(0).toUpperCase() + category.slice(1) : 'Unknown');
}
