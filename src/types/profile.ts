
import { ProfileImage, SocialLink } from './user';

export interface ProfileData {
  bio: string;
  images: ProfileImage[];
  links: {
    id: number;
    url: string;
    label: string;
  }[];
  socialLinks?: SocialLink[];
  joinDate?: string;
  lastActive?: string;
  followers?: number;
  following?: number;
  views?: number;
}
