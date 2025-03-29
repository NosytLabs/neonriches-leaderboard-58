
import { MockeryAction, MockeryTier } from "@/types/mockery";

export type ExtendedMockeryAction = MockeryAction | 'protected' | 'immune' | 'jester' | 'dunce' | 'roast' | 'ridicule' | 'taunt' | 'drama';

export const getMockeryActionIcon = (action: ExtendedMockeryAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    case 'silence': return '🔇';
    case 'courtJester': return '🃏';
    case 'protected': return '🛡️';
    case 'immune': return '👑';
    case 'jester': return '🎭';
    case 'dunce': return '📝';
    case 'roast': return '🔥';
    case 'ridicule': return '😂';
    case 'taunt': return '👋';
    case 'drama': return '🎭';
    default: return '❓';
  }
};

export const getMockeryActionTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Tomatoes';
    case 'eggs': return 'Eggs';
    case 'stocks': return 'Public Stocks';
    case 'silence': return 'Digital Silence';
    case 'courtJester': return 'Court Jester';
    default: return 'Unknown Action';
  }
};

export const getMockeryActionDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw virtual tomatoes at this user, marking their profile for 24 hours – the digital equivalent of a pie in the face, but with less cleanup and more sustained embarrassment';
    case 'eggs': return 'Throw virtual eggs at this user, marking their profile for 48 hours – like egging a house but without property damage charges or having to make that awkward drive to buy eggs at 2 AM';
    case 'stocks': return 'Put this user in the virtual public stocks for 72 hours of digital shame – medieval humiliation without the physical discomfort, though the psychological impact remains delightfully intact';
    case 'silence': return 'Silence this user in team chat for 24 hours – like a social media timeout but you pay for the privilege of enforcing it. The digital equivalent of paying to put duct tape over someone's mouth, but completely legal!';
    case 'courtJester': return 'Force this user to wear the digital jester hat for 48 hours – turns their serious profile into a comedy show. Nothing says "I don\'t respect you" like forcing someone to entertain others against their will!';
    default: return 'Unknown mockery action – but rest assured, it\'s designed to digitally humiliate someone for your amusement';
  }
};

export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 5;
    case 'eggs': return 10;
    case 'stocks': return 25;
    case 'silence': return 50;
    case 'courtJester': return 100;
    default: return 0;
  }
};

export const hasWeeklyDiscount = (action: MockeryAction): boolean => {
  // This is just a placeholder - in reality you might check against a list of
  // discounted actions for the current week
  return ['tomatoes', 'eggs'].includes(action);
};

export const getDiscountedMockeryPrice = (action: MockeryAction): number => {
  const originalPrice = getMockeryActionPrice(action);
  if (hasWeeklyDiscount(action)) {
    return originalPrice * 0.7; // 30% discount
  }
  return originalPrice;
};

export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes': return 'common';
    case 'eggs': return 'uncommon';
    case 'stocks': return 'rare';
    case 'silence': return 'epic';
    case 'courtJester': return 'legendary';
    default: return 'common';
  }
};

export const getMockeryTierColor = (tier: MockeryTier): string | { text: string, bg: string, border: string } => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-white/80',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
    case 'uncommon':
      return {
        text: 'text-green-400',
        bg: 'bg-green-500/20',
        border: 'border-green-500/30'
      };
    case 'rare':
      return {
        text: 'text-blue-400',
        bg: 'bg-blue-500/20',
        border: 'border-blue-500/30'
      };
    case 'epic':
      return {
        text: 'text-purple-300',
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30'
      };
    case 'legendary':
      return {
        text: 'text-amber-300',
        bg: 'bg-gradient-to-r from-red-500/20 to-amber-500/20',
        border: 'border-amber-500/30'
      };
    default:
      return {
        text: 'text-white/80',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
  }
};

export const getMockeryTierLabel = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Common';
    case 'uncommon': return 'Uncommon';
    case 'rare': return 'Rare';
    case 'epic': return 'Epic';
    case 'legendary': return 'Legendary';
    default: return 'Unknown';
  }
};

export const getMockeryTierText = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return 'Simple mockery for everyday social media feuds – like using a water pistol in a digital war zone';
    case 'uncommon': return 'Slightly more impressive than the mockery everyone has access to – the digital equivalent of using words with more than three syllables';
    case 'rare': return 'Truly distinctive forms of digital humiliation – like having a custom insult written by a professional comedy writer';
    case 'epic': return 'Premium mockery effects that will be remembered in screenshots – devastating enough to make someone consider deleting their account';
    case 'legendary': return 'The ultimate expression of digital ridicule – the social media equivalent of a mic drop performed from orbit while riding a meteor';
    default: return 'Unknown tier – but rest assured it involves some form of paid humiliation';
  }
};
