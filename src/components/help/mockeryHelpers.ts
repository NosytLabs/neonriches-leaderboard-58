
import { MockeryTier } from '@/types/mockery-types';

/**
 * Get color class for a mockery tier
 */
export const getMockeryTierColor = (tier: string): string => {
  // Convert tier to lowercase for case-insensitive comparison
  const tierLower = tier.toLowerCase();
  
  // Handle all tier options
  if (tierLower === 'royal') {
    return 'text-royal-gold';
  } else if (tierLower === 'basic') {
    return 'text-white';
  } else if (tierLower === 'premium') {
    return 'text-blue-400';
  } else if (tierLower === 'silver') {
    return 'text-gray-300';
  } else if (tierLower === 'bronze') {
    return 'text-amber-600';
  } else if (tierLower === 'standard') {
    return 'text-gray-400';
  } else if (tierLower === 'rare') {
    return 'text-blue-500';
  } else if (tierLower === 'epic') {
    return 'text-purple-500';
  } else if (tierLower === 'legendary') {
    return 'text-yellow-500';
  } else if (tierLower === 'common') {
    return 'text-gray-400';
  } else if (tierLower === 'uncommon') {
    return 'text-green-500';
  }
  
  // Default color
  return 'text-white';
};

/**
 * Get badge color class for a mockery tier
 */
export const getMockeryTierBadgeColor = (tier: string): string => {
  // Convert tier to lowercase for case-insensitive comparison
  const tierLower = tier.toLowerCase();
  
  // Handle all tier options
  if (tierLower === 'royal') {
    return 'bg-royal-gold/20 text-royal-gold border-royal-gold/30';
  } else if (tierLower === 'basic') {
    return 'bg-white/10 text-white border-white/20';
  } else if (tierLower === 'premium') {
    return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  } else if (tierLower === 'silver') {
    return 'bg-gray-400/20 text-gray-300 border-gray-400/30';
  } else if (tierLower === 'bronze') {
    return 'bg-amber-700/20 text-amber-600 border-amber-700/30';
  } else if (tierLower === 'standard') {
    return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  } else if (tierLower === 'legendary') {
    return 'bg-yellow-600/20 text-yellow-500 border-yellow-600/30';
  } else if (tierLower === 'epic') {
    return 'bg-purple-600/20 text-purple-400 border-purple-600/30';
  } else if (tierLower === 'rare') {
    return 'bg-blue-600/20 text-blue-400 border-blue-600/30';
  } else if (tierLower === 'uncommon') {
    return 'bg-green-600/20 text-green-400 border-green-600/30';
  } else if (tierLower === 'common') {
    return 'bg-gray-600/20 text-gray-400 border-gray-600/30';
  }
  
  // Default color
  return 'bg-white/10 text-white border-white/20';
};

/**
 * Get background color class for a mockery tier
 */
export const getMockeryTierBgColor = (tier: string): string => {
  // Convert tier to lowercase for case-insensitive comparison
  const tierLower = tier.toLowerCase();
  
  // Handle all tier options
  if (tierLower === 'royal') {
    return 'bg-royal-gold/10';
  } else if (tierLower === 'premium') {
    return 'bg-blue-500/10';
  } else if (tierLower === 'basic') {
    return 'bg-white/5';
  } else if (tierLower === 'silver') {
    return 'bg-gray-400/10';
  } else if (tierLower === 'bronze') {
    return 'bg-amber-700/10';
  } else if (tierLower === 'standard') {
    return 'bg-gray-500/10';
  } else if (tierLower === 'legendary') {
    return 'bg-yellow-600/10';
  } else if (tierLower === 'epic') {
    return 'bg-purple-600/10';
  } else if (tierLower === 'rare') {
    return 'bg-blue-600/10';
  } else if (tierLower === 'uncommon') {
    return 'bg-green-600/10';
  } else if (tierLower === 'common') {
    return 'bg-gray-600/10';
  }
  
  // Default color
  return 'bg-white/5';
};

/**
 * Get border color class for a mockery tier
 */
export const getMockeryTierBorderColor = (tier: string): string => {
  // Convert tier to lowercase for case-insensitive comparison
  const tierLower = tier.toLowerCase();
  
  // Handle all tier options
  if (tierLower === 'royal') {
    return 'border-royal-gold/20';
  } else if (tierLower === 'premium') {
    return 'border-blue-500/20';
  } else if (tierLower === 'basic') {
    return 'border-white/10';
  } else if (tierLower === 'silver') {
    return 'border-gray-400/20';
  } else if (tierLower === 'bronze') {
    return 'border-amber-700/20';
  } else if (tierLower === 'standard') {
    return 'border-gray-500/20';
  } else if (tierLower === 'legendary') {
    return 'border-yellow-600/20';
  } else if (tierLower === 'epic') {
    return 'border-purple-600/20';
  } else if (tierLower === 'rare') {
    return 'border-blue-600/20';
  } else if (tierLower === 'uncommon') {
    return 'border-green-600/20';
  } else if (tierLower === 'common') {
    return 'border-gray-600/20';
  }
  
  // Default color
  return 'border-white/10';
};

// Export a combined function to get all tier color classes at once
export const getMockeryTierColorClass = (tier: string): string => {
  return getMockeryTierBadgeColor(tier);
};

