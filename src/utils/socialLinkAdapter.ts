
/**
 * Adapter utility for social link types across the application
 */

import { SocialLink as ConsolidatedSocialLink } from '@/types/user-consolidated';
import { SocialLink as UserSocialLink } from '@/types/user';
import { SocialLink as CosmeticSocialLink } from '@/types/cosmetics';

/**
 * Adapt any social link type to the ConsolidatedSocialLink type
 */
export const adaptToConsolidatedSocialLink = (link: any): ConsolidatedSocialLink => {
  return {
    id: link.id || `link-${Date.now()}`,
    platform: link.platform || 'other',
    url: link.url || '',
    username: link.username || '',
    verified: !!link.verified,
    enabled: link.enabled !== false,
    title: link.title || link.label || '',
    clicks: link.clicks || 0,
    icon: link.icon || '',
    label: link.label || link.title || ''
  };
};

/**
 * Adapt consolidated social link to user social link type
 */
export const adaptToUserSocialLink = (link: ConsolidatedSocialLink): UserSocialLink => {
  return {
    id: link.id,
    platform: link.platform,
    url: link.url,
    username: link.username,
    verified: link.verified,
    title: link.title,
    label: link.label,
    icon: link.icon
  };
};

/**
 * Adapt consolidated social link to cosmetic social link type
 */
export const adaptToCosmeticSocialLink = (link: ConsolidatedSocialLink): CosmeticSocialLink => {
  return {
    id: link.id,
    platform: link.platform,
    url: link.url,
    label: link.label || link.title || '',
    icon: link.icon
  };
};

/**
 * Convert record of string to social links array
 */
export const recordToSocialLinks = (record: Record<string, string>): ConsolidatedSocialLink[] => {
  return Object.entries(record).map(([platform, url]) => ({
    id: `${platform}-${Date.now()}`,
    platform,
    url,
    username: '',
    verified: false,
    enabled: true,
    title: platform,
    clicks: 0,
    icon: platform.toLowerCase(),
    label: platform
  }));
};

/**
 * Convert social links array to record
 */
export const socialLinksToRecord = (links: ConsolidatedSocialLink[]): Record<string, string> => {
  return links.reduce((acc, link) => {
    acc[link.platform] = link.url;
    return acc;
  }, {} as Record<string, string>);
};

export default {
  adaptToConsolidatedSocialLink,
  adaptToUserSocialLink,
  adaptToCosmeticSocialLink,
  recordToSocialLinks,
  socialLinksToRecord
};
