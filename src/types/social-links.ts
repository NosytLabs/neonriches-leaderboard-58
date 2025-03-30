
export type SocialPlatform = 
  | "twitter" 
  | "instagram" 
  | "facebook" 
  | "linkedin" 
  | "github" 
  | "youtube" 
  | "twitch"
  | "tiktok"
  | "reddit"
  | "discord"
  | "website"
  | "other";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  clicks?: number;
  label?: string;
  id?: string;
}
