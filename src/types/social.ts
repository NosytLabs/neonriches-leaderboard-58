
export type SocialPlatform = 
  'twitter' | 
  'facebook' | 
  'instagram' | 
  'linkedin' | 
  'youtube' | 
  'twitch' | 
  'discord' | 
  'github' | 
  'tiktok' | 
  'snapchat' | 
  'website' | 
  'other';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  username?: string;
  displayName?: string;
  verified?: boolean;
  followers?: number;
  isPublic?: boolean;
  id?: string;
  title?: string;
}

export interface SocialStats {
  followers: number;
  following: number;
  posts: number;
  likes: number;
  shares: number;
  engagement: number;
}

export interface SocialProfile {
  username: string;
  displayName: string;
  bio: string;
  profileImage: string;
  coverImage?: string;
  links: SocialLink[];
  stats: SocialStats;
  verified: boolean;
}

export interface SocialInteraction {
  type: 'follow' | 'like' | 'comment' | 'share' | 'message';
  userId: string;
  targetUserId: string;
  timestamp: string;
  content?: string;
  status: 'pending' | 'completed' | 'rejected';
}
