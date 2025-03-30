
/**
 * Marketing helpers for the profile billboard functionality
 */

import { UserProfile, UserTier } from "@/types/user";

/**
 * Calculate visibility score based on user rank
 * Higher rank = more visibility across the platform
 */
export const calculateVisibilityScore = (rank?: number): number => {
  if (!rank) return 1;
  
  // Higher ranks get exponentially more visibility
  if (rank <= 10) return 20;
  if (rank <= 50) return 10;
  if (rank <= 100) return 5;
  if (rank <= 500) return 2;
  
  return 1;
};

/**
 * Get featured time allocation based on user tier
 * Premium tiers get longer featured time on homepage and other high-traffic areas
 */
export const getFeaturedTimeAllocation = (tier?: UserTier): number => {
  switch (tier) {
    case 'royal':
    case 'diamond':
      return 24; // 24 hours per week
    case 'platinum':
    case 'gold':
      return 12; // 12 hours per week
    case 'silver':
    case 'premium':
    case 'pro':
      return 6; // 6 hours per week
    case 'bronze':
      return 3; // 3 hours per week
    default:
      return 0; // No featured time
  }
};

/**
 * Get maximum number of links allowed based on user tier
 */
export const getMaxLinksAllowed = (tier?: UserTier): number => {
  switch (tier) {
    case 'royal':
    case 'diamond':
      return 10;
    case 'platinum':
    case 'gold':
      return 7;
    case 'silver':
    case 'premium':
    case 'pro':
      return 5;
    case 'bronze':
    case 'basic':
      return 3;
    default:
      return 1;
  }
};

/**
 * Calculate marketing potential text for display
 */
export const getMarketingPotentialText = (user: UserProfile): string => {
  const visibilityScore = calculateVisibilityScore(user.rank);
  
  if (visibilityScore >= 10) {
    return `Your profile has exceptional marketing potential with ${visibilityScore}x visibility boost!`;
  } else if (visibilityScore >= 5) {
    return `Your profile has high marketing potential with ${visibilityScore}x visibility boost.`;
  } else if (visibilityScore >= 2) {
    return `Your profile has good marketing potential with ${visibilityScore}x visibility boost.`;
  } else {
    return `Spend more to increase your rank and gain better marketing potential.`;
  }
};

/**
 * Formats user profile information for marketing materials
 */
export const formatProfileForMarketing = (user: UserProfile) => {
  return {
    name: user.displayName || user.username,
    tier: user.tier || 'basic',
    rank: user.rank || 0,
    visibilityScore: calculateVisibilityScore(user.rank),
    featuredTime: getFeaturedTimeAllocation(user.tier),
    maxLinks: getMaxLinksAllowed(user.tier),
    followers: user.followers || 0,
    impressions: user.profileViews || 0,
    clicks: user.profileClicks || 0,
    ctr: user.profileViews && user.profileClicks ? 
      Math.round((user.profileClicks / user.profileViews) * 100) : 0
  };
};
