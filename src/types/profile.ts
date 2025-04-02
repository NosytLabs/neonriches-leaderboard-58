
export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
}

export interface ProfileLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  displayText?: string;
  icon?: string;
}

export interface ProfileSettings {
  visibility: 'public' | 'private' | 'followers' | 'friends';
  allowLinks: boolean;
  showEmail: boolean;
  showRank: boolean;
  showTeam: boolean;
  showSpending: boolean;
  showBadges: boolean;
}
