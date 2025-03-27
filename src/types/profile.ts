
export interface ProfileData {
  bio: string;
  images: {
    id: number;
    url: string;
    caption?: string;
  }[];
  links: {
    id: number;
    url: string;
    label: string;
  }[];
}
