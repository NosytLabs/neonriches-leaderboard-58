
// Extended social link interface that includes all possible properties
export interface ExtendedSocialLink {
  id: string | number;
  platform?: string;
  url: string;
  username?: string;
  display?: string;
  icon?: string;
  verified?: boolean;
  primary?: boolean;
  clicks?: number;
  title?: string;
  label?: string;
  type?: string;
  enabled?: boolean;
}

// Basic profile link interface
export interface ExtendedProfileLink {
  id: string | number;
  title: string;
  url: string;
  clicks?: number;
  icon?: string;
  isActive?: boolean;
  color?: string;
  order?: number;
  customIcon?: string;
}

// Re-export for compatibility
export type { ExtendedSocialLink as SocialLink, ExtendedProfileLink as ProfileLink };
