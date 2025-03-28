
// If this file doesn't exist, we'll create it with the proper types
export interface ProfileImage {
  id: string | number;
  url: string;
  caption?: string;
}

export interface ProfileLink {
  id: number;
  url: string;
  label: string;
}

export interface ProfileData {
  bio: string;
  images: ProfileImage[];
  links: ProfileLink[];
  joinDate: string;
  lastActive: string;
  followers: number;
  following: number;
  views: number;
}
