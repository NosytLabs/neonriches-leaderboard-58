
// Simple auth utilities
export const signIn = async (email: string, password: string) => {
  // This would typically make an API call to your auth service
  // For demo purposes, we'll just simulate a successful login
  return Promise.resolve();
};

export const signOut = async () => {
  // This would typically make an API call to your auth service
  // For demo purposes, we'll just simulate a successful logout
  return Promise.resolve();
};

// Helper to add a profile boost
export const addProfileBoost = (user: any, days: number, level: number) => {
  // Get existing boosts or initialize empty array
  const currentBoosts = user.profileBoosts || [];
  
  // Create a new boost
  const newBoost = {
    id: `boost_${Date.now()}`,
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString(),
    level,
    type: 'visibility',
    effectId: level === 3 ? 'crown' : level === 2 ? 'sparkle' : 'glow'
  };
  
  // Return updated boosts array
  return [...currentBoosts, newBoost];
};

// Helper to add a cosmetic
export const addCosmetic = (user: any, cosmeticId: string, category: string) => {
  // Get existing cosmetics or initialize empty object
  const userCosmetics = user.cosmetics || {
    borders: [],
    colors: [],
    fonts: [],
    emojis: [],
    titles: [],
    backgrounds: [],
    effects: [],
    badges: [],
    themes: []
  };
  
  // Get the category array or initialize empty array
  const categoryItems = userCosmetics[category] || [];
  
  // Check if already has the cosmetic
  if (categoryItems.includes(cosmeticId)) {
    return userCosmetics;
  }
  
  // Add the new cosmetic
  return {
    ...userCosmetics,
    [category]: [...categoryItems, cosmeticId]
  };
};
