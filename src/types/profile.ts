
export interface ProfileImage {
  id: string; // Changed from optional to required 
  url: string;
  isPrimary: boolean;
  caption?: string;
  type?: string;
  imageSrc?: string; // Added for compatibility
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
  title?: string;
  icon?: string;
  label?: string; 
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

// Add ProfileBoost definition with all required fields
export interface ProfileBoost {
  id: string;
  type: string;
  level: number; // Added for ProfileDecorations component
  startDate: string;
  endDate: string;
  appliedBy: string;
  strength: number; // Added for ProfileDecorations component
  multiplier: number;
  description: string;
  name?: string;
  isActive: boolean;
  duration?: number;
  price?: number;
  icon?: string;
}
