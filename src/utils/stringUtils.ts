
import { UserProfile } from '@/types/user';
import { CosmeticCategory } from '@/types/cosmetics';

// Function to format usernames with proper capitalization
export const formatUsername = (username: string): string => {
  if (!username) return '';
  return username.charAt(0).toUpperCase() + username.slice(1);
};

// Function to generate a royal title based on user profile
export const generateRoyalTitle = (user: UserProfile): string => {
  const { gender, tier, rank } = user;
  
  let prefix = '';
  
  // Determine prefix based on gender
  if (gender === 'king') prefix = 'His Majesty';
  else if (gender === 'queen') prefix = 'Her Majesty';
  else if (gender === 'neutral') prefix = 'Their Excellency';
  else if (gender === 'jester') prefix = 'The Honorable Jester';
  else prefix = 'Noble';
  
  // Add tier-specific title
  let tierTitle = '';
  if (tier === 'founder') tierTitle = 'Founding';
  else if (tier === 'royal') tierTitle = 'Royal';
  else if (tier === 'pro') tierTitle = 'Distinguished';
  else tierTitle = '';
  
  // Add rank-specific suffix
  let rankSuffix = '';
  if (rank === 1) rankSuffix = 'the Sovereign';
  else if (rank <= 5) rankSuffix = 'the Exalted';
  else if (rank <= 20) rankSuffix = 'the Esteemed';
  else if (rank <= 100) rankSuffix = 'the Respected';
  else rankSuffix = '';
  
  return `${prefix} ${tierTitle} ${rankSuffix}`.trim().replace(/\s+/g, ' ');
};

// Function to truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

// Function to format a date for display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Function to get a readable name for a cosmetic category
export const getCategoryReadableName = (category: CosmeticCategory): string => {
  const names: Record<CosmeticCategory, string> = {
    borders: 'Profile Borders',
    colors: 'Text Colors',
    fonts: 'Font Styles',
    emojis: 'Special Emojis',
    titles: 'Royal Titles',
    backgrounds: 'Profile Backgrounds',
    effects: 'Visual Effects',
    badges: 'Achievement Badges',
    themes: 'Profile Themes'
  };
  
  return names[category] || category;
};
