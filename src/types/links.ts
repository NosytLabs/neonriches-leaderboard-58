
// Unified definition for social and profile links

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string;
  title?: string;
  // Add any other properties needed for social links
}

export interface ProfileLink {
  id: string;
  title: string;
  url: string;
  icon?: string;
  clicks?: number;
  // Add any other properties needed for profile links
}

export type LinkType = 'social' | 'profile' | 'external';

export interface ClickableLink {
  id: string;
  url: string;
  type: LinkType;
  title?: string;
  icon?: string;
  clicks?: number;
}

export default {
  SocialLink,
  ProfileLink,
  LinkType,
  ClickableLink
};
