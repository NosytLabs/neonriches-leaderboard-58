
import { MockeryAction, MockeryTier } from '@/types/mockery-types';
import { Egg, Crown, Target, Shield, MessageSquare, Flame, ThumbsDown, Frown, Laugh, Music, Droplet, ThumbsUp, Gift } from 'lucide-react';

export function getMockeryName(action: MockeryAction): string {
  const actionNames: Record<MockeryAction, string> = {
    tomatoes: 'Rotten Tomatoes',
    eggs: 'Eggs',
    confetti: 'Confetti',
    flowers: 'Flowers',
    shame: 'Public Shame',
    crown: 'Jester Crown',
    mock: 'Mock',
    jester: 'Jester Hat',
    praise: 'Royal Praise',
    thumbsDown: 'Royal Disapproval',
    putridEggs: 'Putrid Eggs',
    stocks: 'Stocks',
    silence: 'Royal Silence',
    courtJester: 'Court Jester',
    smokeBomb: 'Smoke Bomb',
    protection: 'Royal Protection',
    taunt: 'Royal Taunt',
    challenge: 'Royal Challenge',
    joust: 'Royal Joust',
    duel: 'Royal Duel',
    carrot: 'Rotten Carrot',
    fish: 'Stinky Fish',
    gift: 'Royal Gift'
  };
  
  return actionNames[action] || 'Unknown';
}

export function getMockeryDescription(action: MockeryAction): string {
  const actionDescriptions: Record<MockeryAction, string> = {
    tomatoes: 'Throw rotten tomatoes at this user, marking their profile with tomato splatters for 24 hours.',
    eggs: 'Throw eggs at this user, marking their profile with egg residue for 24 hours.',
    confetti: 'Shower this user with colorful confetti to celebrate their contributions.',
    flowers: 'Show appreciation by sending a bouquet of flowers to this user.',
    shame: 'Publicly shame this user on the leaderboard for 48 hours.',
    crown: 'Force this user to wear a jester crown for 24 hours.',
    mock: 'Publicly mock this user with a custom message.',
    jester: 'Turn this user into the royal jester for 24 hours.',
    praise: 'Send royal praise to this user, boosting their profile status.',
    thumbsDown: 'Express royal disapproval of this user\'s actions.',
    putridEggs: 'Throw especially putrid eggs at this user, creating a lingering stench for 48 hours.',
    stocks: 'Place this user in the royal stocks for 24 hours, limiting their profile actions.',
    silence: 'Prevent this user from posting for 12 hours.',
    courtJester: 'Demote this user to court jester status for 48 hours.',
    smokeBomb: 'Deploy a smoke bomb on this user, temporarily hiding their profile details.',
    protection: 'Grant royal protection to prevent mockery for 24 hours.',
    taunt: 'Send a royal taunt to challenge this user.',
    challenge: 'Issue a formal spending challenge to this user.',
    joust: 'Challenge this user to a spending joust, with the winner gaining profile enhancements.',
    duel: 'Challenge this user to a spending duel for leaderboard recognition.',
    carrot: 'Throw a rotten carrot at this user, marking their profile for 12 hours.',
    fish: 'Slap this user with a stinky fish, adding a fishy aroma to their profile for 24 hours.',
    gift: 'Send a mysterious royal gift with unknown effects to this user.'
  };
  
  return actionDescriptions[action] || 'Unknown effect';
}

export function getMockeryActionPrice(action: MockeryAction): number {
  const actionPrices: Record<MockeryAction, number> = {
    tomatoes: 5,
    eggs: 10,
    confetti: 15,
    flowers: 20,
    shame: 25,
    crown: 30,
    mock: 35,
    jester: 40,
    praise: 45,
    thumbsDown: 50,
    putridEggs: 75,
    stocks: 100,
    silence: 150,
    courtJester: 200,
    smokeBomb: 250,
    protection: 300,
    taunt: 25,
    challenge: 50,
    joust: 100,
    duel: 200,
    carrot: 15,
    fish: 20,
    gift: 50
  };
  
  return actionPrices[action] || 10;
}

export function getMockeryTier(action: MockeryAction): MockeryTier {
  const actionTiers: Record<MockeryAction, MockeryTier> = {
    tomatoes: 'common',
    eggs: 'common',
    confetti: 'common',
    flowers: 'common',
    shame: 'uncommon',
    crown: 'uncommon',
    mock: 'uncommon',
    jester: 'uncommon',
    praise: 'rare',
    thumbsDown: 'rare',
    putridEggs: 'rare',
    stocks: 'rare',
    silence: 'epic',
    courtJester: 'epic',
    smokeBomb: 'epic',
    protection: 'legendary',
    taunt: 'common',
    challenge: 'uncommon',
    joust: 'rare',
    duel: 'epic',
    carrot: 'common',
    fish: 'uncommon',
    gift: 'rare'
  };
  
  return actionTiers[action] || 'common';
}

export function getMockeryCost(action: MockeryAction): number {
  return getMockeryActionPrice(action);
}

export function getMockeryTierColorClass(tier: MockeryTier): string {
  const tierColors: Record<MockeryTier, string> = {
    common: 'text-gray-400',
    uncommon: 'text-green-400',
    rare: 'text-blue-400',
    epic: 'text-purple-400',
    legendary: 'text-orange-400',
    royal: 'text-royal-gold',
    basic: 'text-gray-400',
    premium: 'text-indigo-400',
    standard: 'text-sky-400',
    silver: 'text-gray-300',
    bronze: 'text-amber-600',
    crimson: 'text-red-600'
  };
  
  return tierColors[tier] || 'text-gray-400';
}

export function getMockeryActionIcon(action: MockeryAction) {
  const actionIcons: Record<MockeryAction, any> = {
    tomatoes: Target,
    eggs: Egg,
    confetti: Gift,
    flowers: Gift,
    shame: ThumbsDown,
    crown: Crown,
    mock: MessageSquare,
    jester: Laugh,
    praise: ThumbsUp,
    thumbsDown: ThumbsDown,
    putridEggs: Egg,
    stocks: Shield,
    silence: Frown,
    courtJester: Crown,
    smokeBomb: Flame,
    protection: Shield,
    taunt: MessageSquare,
    challenge: Target,
    joust: Shield,
    duel: Shield,
    carrot: Target,
    fish: Droplet,
    gift: Gift
  };
  
  return actionIcons[action] || Target;
}

export function getMockeryActionIconColor(action: MockeryAction): string {
  const actionColors: Record<MockeryAction, string> = {
    tomatoes: '#e53e3e',
    eggs: '#ecc94b',
    confetti: '#4299e1',
    flowers: '#48bb78',
    shame: '#a0aec0',
    crown: '#d69e2e',
    mock: '#a0aec0',
    jester: '#d69e2e',
    praise: '#3182ce',
    thumbsDown: '#e53e3e',
    putridEggs: '#805ad5',
    stocks: '#718096',
    silence: '#4a5568',
    courtJester: '#9f7aea',
    smokeBomb: '#718096',
    protection: '#4a5568',
    taunt: '#e53e3e',
    challenge: '#d69e2e',
    joust: '#3182ce',
    duel: '#805ad5',
    carrot: '#ed8936',
    fish: '#4299e1',
    gift: '#9f7aea'
  };
  
  return actionColors[action] || '#a0aec0';
}
