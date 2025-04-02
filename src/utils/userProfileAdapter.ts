
import { UserProfile } from '@/types/user';
import { UserSubscription } from '@/types/user-consolidated';

/**
 * Utility function to adapt a partial user profile update
 * to ensure type compatibility
 */
export function adaptUserProfileUpdate(partialProfile: Partial<UserProfile>): Partial<UserProfile> {
  const adapted: Partial<UserProfile> = {
    ...partialProfile
  };
  
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

/**
 * Utility function to adapt a subscription object for compatibility
 */
export function adaptSubscription(subscription?: any): any {
  if (!subscription) return undefined;
  
  // Create a subscription with all required fields for user-consolidated UserSubscription type
  const adaptedSubscription = {
    id: subscription.id || `sub-${Date.now()}`,
    tier: subscription.tier || 'basic',
    status: subscription.status || 'active',
    startDate: subscription.startDate || new Date().toISOString(),
    endDate: subscription.endDate,
    planId: subscription.planId || 'basic-plan',
    nextBillingDate: subscription.nextBillingDate || undefined,
    cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
    autoRenew: subscription.autoRenew
  };
  
  return adaptedSubscription;
}

/**
 * Utility function to downgrade a UserSubscription to component compatible format
 */
export function downgradeSubscriptionForComponents(subscription?: UserSubscription): any {
  if (!subscription) return undefined;
  
  return {
    planId: subscription.planId || 'basic-plan',
    nextBillingDate: subscription.nextBillingDate || undefined,
    status: subscription.status,
    tier: subscription.tier
  };
}
