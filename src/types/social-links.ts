
// Define social link types to resolve conflicts between different type definitions

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username?: string;
  verified?: boolean;
  enabled?: boolean;
  clicks?: number; // Add this property to allow it on SocialLink
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  clicks?: number; // Add this property to allow it on ProfileLink
  active?: boolean;
  position?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type SocialPlatform = 
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'twitch'
  | 'linkedin'
  | 'github'
  | 'telegram'
  | 'discord'
  | 'tiktok'
  | 'website'
  | 'other';
