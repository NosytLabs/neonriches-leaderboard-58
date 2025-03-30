
// Social media platform types
export type SocialPlatform = 
  | 'twitter' 
  | 'facebook' 
  | 'instagram' 
  | 'youtube' 
  | 'twitch' 
  | 'linkedin' 
  | 'github' 
  | 'discord' 
  | 'reddit' 
  | 'tiktok' 
  | 'website' 
  | 'other';

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  username: string;
  url: string;
  isVerified?: boolean;
  isPrivate?: boolean;
  displayTitle?: string;
  displayOrder?: number;
}

export type { SocialPlatform, SocialLink };
