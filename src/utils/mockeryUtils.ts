
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { 
  Egg, 
  Target, 
  Crown, 
  Flame, 
  Award, 
  ThumbsDown, 
  Gift,
  Lock, 
  Bell, 
  Shield, 
  CloudLightning,
  UserX,
  Zap,
  Sword,
  Carrot,
  Fish
} from 'lucide-react';

// Function to get mockery action name
export const getMockeryName = (action: MockeryAction): string => {
  const names: Record<MockeryAction, string> = {
    tomatoes: 'Tomatoes',
    eggs: 'Eggs',
    confetti: 'Confetti',
    flowers: 'Flowers',
    shame: 'Shame',
    crown: 'Crown',
    mock: 'Mock',
    jester: 'Jester',
    praise: 'Praise',
    thumbsDown: 'Thumbs Down',
    putridEggs: 'Putrid Eggs',
    stocks: 'Stocks',
    silence: 'Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Protection',
    taunt: 'Taunt',
    challenge: 'Challenge',
    joust: 'Joust',
    duel: 'Duel',
    carrot: 'Carrot',
    fish: 'Fish',
    gift: 'Gift'
  };
  return names[action] || 'Unknown Action';
};

// Function to get mockery action description
export const getMockeryDescription = (action: MockeryAction): string => {
  const descriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw tomatoes at this user, showing your disapproval',
    eggs: 'Pelt this user with eggs, classic mockery',
    confetti: 'Celebrate this user with colorful confetti',
    flowers: 'Show appreciation with lovely flowers',
    shame: 'Subject this user to public shame',
    crown: 'Crown this user as royalty, a mark of respect',
    mock: 'Generally mock this user',
    jester: 'Label this user as the court jester',
    praise: 'Give high praise to this user',
    thumbsDown: 'Express disapproval with a thumbs down',
    putridEggs: 'Throw putrid eggs, more offensive than regular eggs',
    stocks: 'Put this user in the public stocks for ridicule',
    silence: 'Silence this user temporarily',
    courtJester: 'Designate as the royal court jester',
    smokeBomb: 'Deploy a smoke bomb to obscure this user',
    protection: 'Grant protection from mockery',
    taunt: 'Taunt this user publicly',
    challenge: 'Challenge this user to prove themselves',
    joust: 'Challenge this user to a joust',
    duel: 'Challenge this user to a duel',
    carrot: 'Dangle a carrot for motivation',
    fish: 'Slap with a fish, classic insult',
    gift: 'Send a gift as a token of appreciation'
  };
  return descriptions[action] || 'No description available';
};

// Function to get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  const prices: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    confetti: 15,
    flowers: 20,
    shame: 25,
    crown: 30,
    mock: 15,
    jester: 20,
    praise: 15,
    thumbsDown: 5,
    putridEggs: 15,
    stocks: 25,
    silence: 35,
    courtJester: 30,
    smokeBomb: 40,
    protection: 50,
    taunt: 15,
    challenge: 25,
    joust: 35,
    duel: 40,
    carrot: 10,
    fish: 15,
    gift: 20
  };
  return prices[action] || 10;
};

// Alias for getMockeryActionPrice for compatibility
export const getMockeryCost = getMockeryActionPrice;

// Function to get mockery tier
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const tiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    confetti: 'uncommon',
    flowers: 'uncommon',
    shame: 'rare',
    crown: 'epic',
    mock: 'common',
    jester: 'uncommon',
    praise: 'uncommon',
    thumbsDown: 'common',
    putridEggs: 'rare',
    stocks: 'rare',
    silence: 'epic',
    courtJester: 'epic',
    smokeBomb: 'legendary',
    protection: 'legendary',
    taunt: 'uncommon',
    challenge: 'rare',
    joust: 'epic',
    duel: 'legendary',
    carrot: 'common',
    fish: 'common',
    gift: 'rare'
  };
  return tiers[action] || 'common';
};

// Function to get mockery tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const colorClasses: Record<MockeryTier, string> = {
    common: 'text-gray-300',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-royal-gold',
    royal: 'text-royal-crimson',
    basic: 'text-gray-300',
    premium: 'text-green-400',
    standard: 'text-blue-400',
    silver: 'text-slate-400',
    bronze: 'text-amber-600',
    crimson: 'text-royal-crimson'
  };
  return colorClasses[tier] || 'text-gray-300';
};

// Function to get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  const icons: Record<MockeryAction, any> = {
    tomatoes: Target,
    eggs: Egg,
    confetti: Award,
    flowers: Gift,
    shame: Flame,
    crown: Crown,
    mock: Target,
    jester: Bell,
    praise: Award,
    thumbsDown: ThumbsDown,
    putridEggs: Egg,
    stocks: Lock,
    silence: UserX,
    courtJester: Bell,
    smokeBomb: CloudLightning,
    protection: Shield,
    taunt: Flame,
    challenge: Zap,
    joust: Sword,
    duel: Sword,
    carrot: Carrot,
    fish: Fish,
    gift: Gift
  };
  return icons[action] || Target;
};

// Function to get mockery action icon color
export const getMockeryActionIconColor = (action: MockeryAction): string => {
  const colors: Record<MockeryAction, string> = {
    tomatoes: '#e53e3e', // red
    eggs: '#d69e2e', // yellow
    confetti: '#3182ce', // blue
    flowers: '#38a169', // green
    shame: '#e53e3e', // red
    crown: '#d69e2e', // gold
    mock: '#718096', // gray
    jester: '#805ad5', // purple
    praise: '#38a169', // green
    thumbsDown: '#e53e3e', // red
    putridEggs: '#805ad5', // purple
    stocks: '#718096', // gray
    silence: '#2c5282', // dark blue
    courtJester: '#805ad5', // purple
    smokeBomb: '#1a202c', // dark gray
    protection: '#3182ce', // blue
    taunt: '#e53e3e', // red
    challenge: '#d69e2e', // gold
    joust: '#805ad5', // purple
    duel: '#e53e3e', // red
    carrot: '#ed8936', // orange
    fish: '#3182ce', // blue
    gift: '#38a169' // green
  };
  return colors[action] || '#718096';
};

// Adding missing utility from shameUtils
export const hasWeeklyDiscount = (): boolean => {
  // Implement logic to determine if weekly discount is active
  // For now, return a fixed value
  return true;
};
