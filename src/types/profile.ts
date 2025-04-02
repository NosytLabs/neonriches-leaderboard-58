
export interface ProfileImage {
  id?: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string; // Added for compatibility
}

export interface ProfileLink {
  id?: string;
  platform: string;
  url: string;
  title?: string;
  displayText?: string;
  icon?: string;
  label?: string; // Added for compatibility
}

export interface SocialLink extends ProfileLink {
  title: string; // Make title required in SocialLink
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
