
import { UserProfile } from '@/types/user';
import { UserSubscription } from '@/types/user-consolidated';
import { toTeamColor } from './typeConverters';

/**
 * Utility function to adapt a partial user profile for compatibility with UserSubscription
 * 
 * Ensures the subscription object has all required properties
 */
export function adaptUserSubscription(subscription?: Partial<UserSubscription>): UserSubscription | undefined {
  if (!subscription) return undefined;
  
  // Return complete subscription with required properties
  return {
    id: subscription.id || `sub-${Date.now()}`,
    tier: subscription.tier || 'basic',
    status: subscription.status || 'active',
    startDate: subscription.startDate || new Date().toISOString(),
    endDate: subscription.endDate,
    autoRenew: subscription.autoRenew,
    planId: subscription.planId,
    nextBillingDate: subscription.nextBillingDate,
    cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
  };
}

/**
 * Utility function to adapt partial user profile updates
 * to ensure type compatibility
 */
export function adaptUserProfileUpdate(partialProfile: Partial<UserProfile>): Partial<UserProfile> {
  const adapted: Partial<UserProfile> = {
    ...partialProfile
  };
  
  // Handle team conversion for type safety
  if (partialProfile.team) {
    adapted.team = toTeamColor(partialProfile.team);
  }
  
  // Handle subscription conversion
  if (partialProfile.subscription) {
    adapted.subscription = adaptUserSubscription(partialProfile.subscription);
  }
  
  return adapted;
}

/**
 * Utility function to ensure a SocialLink object has required properties
 */
export function adaptSocialLink(link: any): any {
  return {
    id: link.id || `link-${Date.now()}`,
    platform: link.platform || 'website',
    url: link.url || '#',
    title: link.title || link.label || link.platform || 'Link',
    verified: link.verified || false,
    username: link.username || '',
    icon: link.icon || undefined,
    clicks: link.clicks || 0,
    label: link.label || link.title || link.platform || 'Link',
    display: link.display || link.title || link.platform || 'Link'
  };
}
