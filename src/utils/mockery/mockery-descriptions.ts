
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Mock descriptions for mockery actions
export const mockeryDescriptions: Record<MockeryAction, string> = {
  tomatoes: 'Pelt your target with rotten tomatoes. A classic form of public ridicule.',
  eggs: 'Hurl rotten eggs at your target. The visual stench will follow them for a day.',
  stocks: 'Place your target in the public stocks. The ultimate medieval humiliation.',
  crown: 'Gift a crown to acknowledge their noble status. A rare honor indeed.',
  jester: 'Mark them as the court jester. They shall entertain the court!',
  putridEggs: 'Throw eggs that are extra rotten. The smell is absolutely horrific!',
  silence: 'The target is deemed unworthy of speech in the royal court.',
  courtJester: 'Promote them to the esteemed position of Court Jester.',
  smokeBomb: 'Shroud them in mystery with a ceremonial smoke bomb.',
  shame: 'Ring the bell of shame! Shame! Shame! Shame!',
  protection: 'Grant royal protection against mockery for a limited time.'
};

// Get description for a mockery action
export const getMockeryDescription = (action: MockeryAction): string => {
  return mockeryDescriptions[action] || 'No description available';
};

// Get name for a mockery action (formatted)
export const getMockeryName = (action: MockeryAction): string => {
  const words = action.split(/(?=[A-Z])/); // Split camelCase
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Get mockery tier based on action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'crown':
    case 'protection':
      return 'legendary';
    case 'courtJester':
    case 'silence':
    case 'putridEggs':
      return 'rare';
    case 'stocks':
    case 'smokeBomb':
    case 'shame':
      return 'uncommon';
    case 'tomatoes':
    case 'eggs':
    case 'jester':
    default:
      return 'common';
  }
};

// Get color class based on mockery tier
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  switch (tier) {
    case 'legendary':
      return 'text-royal-gold';
    case 'rare':
      return 'text-purple-500';
    case 'uncommon':
      return 'text-blue-500';
    case 'common':
    default:
      return 'text-gray-500';
  }
};

export default {
  getMockeryDescription,
  getMockeryName,
  getMockeryTier,
  getMockeryTierColorClass
};
