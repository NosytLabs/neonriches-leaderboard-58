
import { UserProfile } from '@/types/user';
import { UserCosmetics } from '@/types/cosmetics';

// Helper to add a profile boost to a user
export function addProfileBoost(
  user: UserProfile, 
  days: number = 1, 
  level: number = 1
): ProfileBoost[] {
  const now = new Date();
  const endDate = new Date(now);
  endDate.setDate(endDate.getDate() + days);
  
  const newBoost = {
    id: `boost_${Date.now()}`,
    startDate: now.toISOString(),
    endDate: endDate.toISOString(),
    level,
    // Add additional fields for compatibility
    effectId: level === 3 ? 'crown' : level === 2 ? 'sparkle' : 'glow',
    startTime: now.toISOString(),
    endTime: endDate.getTime(),
    type: 'visibility',
    strength: level,
    appliedBy: user.id
  };
  
  const currentBoosts = user.profileBoosts || [];
  return [...currentBoosts, newBoost];
}

// Helper to add a cosmetic to a user
export function addCosmetic(
  user: UserProfile,
  cosmeticId: string,
  category: string
): UserCosmetics {
  const cosmetics = { ...user.cosmetics } || {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: [],
  };
  
  // Handle each category
  switch (category) {
    case 'borders':
      if (!cosmetics.borders.includes(cosmeticId)) {
        cosmetics.borders = [...cosmetics.borders, cosmeticId];
      }
      break;
    case 'colors':
      if (!cosmetics.colors.includes(cosmeticId)) {
        cosmetics.colors = [...cosmetics.colors, cosmeticId];
      }
      break;
    case 'fonts':
      if (!cosmetics.fonts.includes(cosmeticId)) {
        cosmetics.fonts = [...cosmetics.fonts, cosmeticId];
      }
      break;
    case 'emojis':
      if (!cosmetics.emojis.includes(cosmeticId)) {
        cosmetics.emojis = [...cosmetics.emojis, cosmeticId];
      }
      break;
    case 'titles':
      if (!cosmetics.titles.includes(cosmeticId)) {
        cosmetics.titles = [...cosmetics.titles, cosmeticId];
      }
      break;
    case 'backgrounds':
      if (!cosmetics.backgrounds.includes(cosmeticId)) {
        cosmetics.backgrounds = [...cosmetics.backgrounds, cosmeticId];
      }
      break;
    case 'effects':
      if (!cosmetics.effects.includes(cosmeticId)) {
        cosmetics.effects = [...cosmetics.effects, cosmeticId];
      }
      break;
    case 'badges':
      if (!cosmetics.badges.includes(cosmeticId)) {
        cosmetics.badges = [...cosmetics.badges, cosmeticId];
      }
      break;
    case 'themes':
      if (!cosmetics.themes.includes(cosmeticId)) {
        cosmetics.themes = [...cosmetics.themes, cosmeticId];
      }
      break;
    default:
      console.warn(`Unknown cosmetic category: ${category}`);
  }
  
  return cosmetics;
}
