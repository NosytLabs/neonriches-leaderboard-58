
export interface ProfileImage {
  id: number;
  url: string;
  caption: string; // Making caption required to match the expected type
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
}
