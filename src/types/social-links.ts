
export type SocialPlatform = 
  | 'twitter'
  | 'instagram'
  | 'facebook'
  | 'linkedin'
  | 'github'
  | 'youtube'
  | 'twitch'
  | 'discord'
  | 'tiktok'
  | 'website'
  | 'other';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  title?: string;
  isPrimary?: boolean;
  isVerified?: boolean;
}

export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  clicks: number;
  isActive: boolean;
  createdAt: string;
}
