import { CosmeticItem, CosmeticRarity, CosmeticCategory } from '@/types/cosmetics';
import { mockedCosmeticsData } from '@/data/cosmeticsData';
import { UserProfile } from '@/types/user';

// Function to simulate awarding a random cosmetic item
export function awardRandomCosmetic(
  user: UserProfile,
  wishAmount: number,
  preferredCategory?: string
): { cosmeticItem: CosmeticItem | null; rarity: CosmeticRarity } {
  // Filter cosmetics based on preferred category, if specified
  let availableCosmetics = mockedCosmeticsData;
  
  if (preferredCategory) {
    availableCosmetics = availableCosmetics.filter(item => item.category === preferredCategory);
  }
  
  // Filter out items the user already owns
  const userCosmetics = user.cosmetics || {};
  availableCosmetics = availableCosmetics.filter(item => {
    const category = item.category as keyof typeof userCosmetics;
    if (!category) return true; // Always include if category is not defined
    
    // Safely check if the array exists and includes the item
    const categoryItems = userCosmetics[category] || [];
    const userHasItem = Array.isArray(categoryItems) && categoryItems.includes(item.id);
    
    return !userHasItem;
  });
  
  if (availableCosmetics.length === 0) {
    return { cosmeticItem: null, rarity: 'common' };
  }
  
  // Adjust rarity chances based on wish amount
  let rarity: CosmeticRarity;
  const randomNumber = Math.random() * 100;
  
  // Define rarity thresholds
  const legendaryThreshold = 2 + (wishAmount >= 10 ? 10 : wishAmount >= 5 ? 5 : 0);
  const epicThreshold = legendaryThreshold + (8 + (wishAmount >= 10 ? 10 : wishAmount >= 5 ? 5 : wishAmount >= 2 ? 1 : 0));
  const rareThreshold = epicThreshold + (20 + (wishAmount >= 10 ? 5 : wishAmount >= 5 ? 5 : wishAmount >= 2 ? 2 : 0));
  const uncommonThreshold = rareThreshold + (30 + (wishAmount >= 10 ? -10 : wishAmount >= 5 ? -5 : wishAmount >= 2 ? 2 : 0));
  
  if (randomNumber < legendaryThreshold) {
    rarity = 'legendary';
  } else if (randomNumber < epicThreshold) {
    rarity = 'epic';
  } else if (randomNumber < rareThreshold) {
    rarity = 'rare';
  } else if (randomNumber < uncommonThreshold) {
    rarity = 'uncommon';
  } else {
    rarity = 'common';
  }
  
  // Filter available cosmetics by selected rarity
  const cosmeticsOfRarity = availableCosmetics.filter(item => item.rarity === rarity);
  
  // If no items of selected rarity, default to common
  if (cosmeticsOfRarity.length === 0) {
    rarity = 'common';
  }
  
  // Re-filter in case rarity was defaulted to common
  const finalCosmetics = availableCosmetics.filter(item => item.rarity === rarity);
  
  // Select a random cosmetic item
  const randomIndex = Math.floor(Math.random() * finalCosmetics.length);
  const cosmeticItem = finalCosmetics[randomIndex];
  
  return { cosmeticItem: cosmeticItem || null, rarity };
}

// Function to simulate retrieving a cosmetic item by ID
export function getCosmeticById(id: string): CosmeticItem | undefined {
  return mockedCosmeticsData.find(item => item.id === id);
}

// Function to simulate awarding a specific cosmetic item
export function awardSpecificCosmetic(
  user: UserProfile,
  cosmeticId: string
): CosmeticItem | null {
  const cosmeticItem = getCosmeticById(cosmeticId);
  
  if (!cosmeticItem) {
    console.warn(`Cosmetic item with ID ${cosmeticId} not found.`);
    return null;
  }
  
  // Here you would typically add the cosmetic item to the user's profile
  // and persist the changes to a database.
  
  console.log(`Awarded cosmetic item ${cosmeticItem.name} to user ${user.username}`);
  return cosmeticItem;
}
