
export interface ProfileLink {
  id: string;
  url: string;
  title: string;
  icon?: string;
  order?: number;
}

export type SocialLink = {
  platform: string;
  url: string;
  username?: string;
};
