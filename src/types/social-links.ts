
// Social media related types
export type SocialPlatform = 
  | 'twitter' 
  | 'instagram' 
  | 'facebook' 
  | 'youtube' 
  | 'twitch' 
  | 'discord' 
  | 'tiktok' 
  | 'linkedin' 
  | 'github' 
  | 'reddit' 
  | 'medium' 
  | 'website' 
  | 'other';

export interface SocialLink {
  id?: string;
  platform: SocialPlatform;
  url: string;
  displayName?: string;
  isVerified?: boolean;
  icon?: string;
}

// Platform configuration
export const PLATFORM_CONFIGS: Record<SocialPlatform, { icon: string; color: string; prefix: string }> = {
  twitter: { icon: 'twitter', color: '#1DA1F2', prefix: 'https://twitter.com/' },
  instagram: { icon: 'instagram', color: '#E1306C', prefix: 'https://instagram.com/' },
  facebook: { icon: 'facebook', color: '#4267B2', prefix: 'https://facebook.com/' },
  youtube: { icon: 'youtube', color: '#FF0000', prefix: 'https://youtube.com/' },
  twitch: { icon: 'twitch', color: '#6441A4', prefix: 'https://twitch.tv/' },
  discord: { icon: 'discord', color: '#7289DA', prefix: '' },
  tiktok: { icon: 'tiktok', color: '#000000', prefix: 'https://tiktok.com/@' },
  linkedin: { icon: 'linkedin', color: '#0077B5', prefix: 'https://linkedin.com/in/' },
  github: { icon: 'github', color: '#333333', prefix: 'https://github.com/' },
  reddit: { icon: 'reddit', color: '#FF4500', prefix: 'https://reddit.com/u/' },
  medium: { icon: 'medium', color: '#00AB6C', prefix: 'https://medium.com/@' },
  website: { icon: 'globe', color: '#0ea5e9', prefix: '' },
  other: { icon: 'link', color: '#777777', prefix: '' }
};

// Re-export types with 'export type' syntax for TS modules
export type { SocialPlatform };
export type { SocialLink };
