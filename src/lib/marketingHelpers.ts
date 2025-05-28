
import { UserProfile } from '@/types/user-consolidated';

export function getMarketingPotentialText(user: UserProfile): string {
  const rank = user.rank || 999;
  const tier = user.tier || 'basic';
  
  if (rank <= 10) {
    return "Elite visibility - Your profile is seen by thousands daily";
  } else if (rank <= 50) {
    return "High visibility - Strong presence in the royal kingdom";
  } else if (rank <= 100) {
    return "Good visibility - Room for strategic growth";
  } else if (tier === 'royal' || tier === 'premium') {
    return "Premium potential - Leverage your tier for better positioning";
  } else {
    return "Growth opportunity - Enhance your visibility with strategic marketing";
  }
}

export function calculateVisibilityScore(user: UserProfile): number {
  let score = 0;
  
  // Rank contributes most to visibility
  const rank = user.rank || 999;
  if (rank <= 10) score += 40;
  else if (rank <= 50) score += 30;
  else if (rank <= 100) score += 20;
  else if (rank <= 500) score += 10;
  
  // Tier contributes to visibility
  if (user.tier === 'royal') score += 25;
  else if (user.tier === 'premium') score += 15;
  else if (user.tier === 'basic') score += 5;
  
  // Profile completeness
  if (user.profileImage) score += 5;
  if (user.bio && user.bio.length > 20) score += 5;
  if (user.links && user.links.length > 0) score += 5;
  
  // Activity and engagement
  if (user.profileViews && user.profileViews > 100) score += 10;
  if (user.followers && user.followers.length > 10) score += 5;
  
  return Math.min(score, 100);
}

export function getOptimalPostingTimes(): string[] {
  return ['8:00 PM', '9:00 PM', '10:00 PM', 'Saturday afternoon', 'Sunday evening'];
}

export function getMarketingRecommendations(user: UserProfile): string[] {
  const recommendations = [];
  const rank = user.rank || 999;
  
  if (rank > 100) {
    recommendations.push('Increase activity during peak hours (8-10 PM)');
  }
  
  if (!user.profileImage) {
    recommendations.push('Add a distinctive profile image');
  }
  
  if (!user.bio || user.bio.length < 20) {
    recommendations.push('Write an engaging bio showcasing your royal ambitions');
  }
  
  if (!user.links || user.links.length === 0) {
    recommendations.push('Add social media links for cross-platform visibility');
  }
  
  if (user.tier === 'basic') {
    recommendations.push('Consider upgrading to Premium for enhanced visibility features');
  }
  
  recommendations.push('Participate in royal events for increased exposure');
  recommendations.push('Interact with other nobles to boost reciprocal visibility');
  
  return recommendations;
}
