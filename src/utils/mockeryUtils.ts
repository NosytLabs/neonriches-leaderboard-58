
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { AlertTriangle, Egg, FlameKindling, Target, Crown, Award, Axe, Cloud, Eye, ShieldQuestion, ArrowDownToLine, Skull, Users, Shield, Smile, FileWarning, User, UserCheck, Snowflake, BellRing, Sparkles, Zap, Rocket } from 'lucide-react';

// Get mockery name based on action
export const getMockeryName = (action: MockeryAction): string => {
  const mockeryNames: Record<string, string> = {
    'tomatoes': 'Rotten Tomatoes',
    'putridEggs': 'Putrid Eggs',
    'eggs': 'Rotten Eggs',
    'stocks': 'Public Stocks',
    'dunce': 'Dunce Cap',
    'silence': 'Royal Silence',
    'taunt': 'Royal Taunt',
    'courtJester': 'Court Jester',
    'smokeBomb': 'Smoke Bomb',
    'protection': 'Royal Protection',
    'jest': 'Court Jester',
    'crown': 'Fake Crown',
    'challenge': 'Royal Challenge',
    'defeat': 'Royal Defeat',
    'immune': 'Royal Immunity',
    'guillotine': 'Digital Guillotine',
    'dungeons': 'Royal Dungeons',
    'removal': 'Royal Removal',
    'roast': 'Royal Roast',
    'royalPie': 'Royal Pie',
    'jokeCrown': 'Joke Crown',
    'memeFrame': 'Meme Frame',
    'target': 'Royal Target',
    'glitterBomb': 'Glitter Bomb'
  };
  
  return mockeryNames[action] || 'Unknown Mockery';
};

// Get mockery cost based on action
export const getMockeryCost = (action: MockeryAction): number => {
  const mockeryCosts: Record<string, number> = {
    'tomatoes': 10,
    'putridEggs': 15,
    'eggs': 15,
    'stocks': 25,
    'dunce': 35,
    'silence': 50,
    'taunt': 75,
    'courtJester': 100,
    'smokeBomb': 150,
    'protection': 50,
    'jest': 100,
    'crown': 250,
    'challenge': 175,
    'defeat': 200,
    'immune': 75,
    'guillotine': 300,
    'dungeons': 275,
    'removal': 225,
    'roast': 125,
    'royalPie': 90,
    'jokeCrown': 110,
    'memeFrame': 60,
    'target': 40,
    'glitterBomb': 80
  };
  
  return mockeryCosts[action] || 10;
};

// Get mockery description based on action
export const getMockeryDescription = (action: MockeryAction): string => {
  const mockeryDescriptions: Record<string, string> = {
    'tomatoes': 'Shower the user with digital rotten tomatoes, leaving their profile splattered with a crimson mess.',
    'putridEggs': 'Pelt the user with putrid eggs, leaving an unmistakable odor on their profile for all to smell.',
    'eggs': 'Pelt the user with rotten eggs, leaving an unmistakable odor on their profile for all to smell.',
    'stocks': 'Lock the user in the digital stocks, putting them on display for public ridicule and humiliation.',
    'dunce': 'Place a dunce cap on the user, marking them as foolish in the eyes of the royal court.',
    'silence': 'Impose a royal silence upon the user, restricting their ability to communicate.',
    'taunt': 'Issue a formal taunt, challenging the user\'s honor and standing in the royal court.',
    'courtJester': 'Appoint the user as the court jester, forcing them to wear the motley and entertain the court.',
    'smokeBomb': 'Deploy a smoke bomb, temporarily obscuring the user\'s profile and presence.',
    'protection': 'Invoke royal protection, shielding yourself from mockery for a limited time.',
    'jest': 'Appoint the user as the court jester, forcing them to wear the motley and entertain the court.',
    'crown': 'Bestow a ridiculous oversized crown upon the user, marking them as a pretender to the throne.',
    'challenge': 'Issue a formal spending challenge, questioning the user\'s commitment to the throne.',
    'defeat': 'Formally declare the user defeated in a battle of wealth and status.',
    'immune': 'Grant temporary immunity from further mockery, protecting the user from additional shame.',
    'guillotine': 'Subject the user to the digital guillotine, a most severe form of mockery for the most egregious offenders.',
    'dungeons': 'Consign the user to the royal dungeons, removing them from polite society for a time.',
    'removal': 'Declare the user removed from your royal presence, a significant social slight.',
    'roast': 'Subject the user to a formal royal roast, where their flaws are highlighted for comedic effect.',
    'royalPie': 'Splat the user with a royal pie, covering their profile in delicious but embarrassing dessert.',
    'jokeCrown': 'Award the user a joke crown made of paper, mocking their aspirations to royalty.',
    'memeFrame': 'Frame the user\'s profile with ridiculous memes, subjecting them to internet culture mockery.',
    'target': 'Mark the user as a target, encouraging others to join in the mockery.',
    'glitterBomb': 'Explode a glitter bomb on the user\'s profile, covering them in persistent, impossible-to-remove sparkles.'
  };
  
  return mockeryDescriptions[action] || 'Apply a mysterious form of mockery to the user.';
};

// Get mockery tier based on action
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  const mockeryTiers: Record<string, MockeryTier> = {
    'tomatoes': 'basic',
    'putridEggs': 'basic',
    'eggs': 'basic',
    'stocks': 'basic',
    'dunce': 'basic',
    'silence': 'premium',
    'taunt': 'premium',
    'courtJester': 'premium',
    'smokeBomb': 'premium',
    'protection': 'royal',
    'jest': 'premium',
    'crown': 'royal',
    'challenge': 'royal',
    'defeat': 'royal',
    'immune': 'royal',
    'guillotine': 'legendary',
    'dungeons': 'legendary',
    'removal': 'legendary',
    'roast': 'premium',
    'royalPie': 'premium',
    'jokeCrown': 'premium',
    'memeFrame': 'basic',
    'target': 'basic',
    'glitterBomb': 'premium'
  };
  
  return mockeryTiers[action] || 'basic';
};

// Get mockery tier color class
export const getMockeryTierColorClass = (tier: MockeryTier): string => {
  const tierColors: Record<MockeryTier, string> = {
    'basic': 'text-gray-400 border-gray-400/30',
    'premium': 'text-blue-400 border-blue-400/30',
    'royal': 'text-purple-400 border-purple-400/30',
    'legendary': 'text-yellow-400 border-yellow-400/30',
    // Additional tiers
    'common': 'text-gray-400 border-gray-400/30',
    'uncommon': 'text-green-400 border-green-400/30',
    'rare': 'text-blue-400 border-blue-400/30',
    'epic': 'text-purple-400 border-purple-400/30',
    'bronze': 'text-amber-700 border-amber-700/30',
    'silver': 'text-gray-300 border-gray-300/30',
    'gold': 'text-yellow-400 border-yellow-400/30',
    'platinum': 'text-cyan-300 border-cyan-300/30',
    'diamond': 'text-sky-300 border-sky-300/30',
  };
  
  return tierColors[tier] || 'text-gray-400 border-gray-400/30';
};

// Get mockery action icon component
export const getMockeryActionIcon = (action: MockeryAction) => {
  const actionIcons: Record<string, any> = {
    'tomatoes': Target,
    'putridEggs': Egg,
    'eggs': Egg,
    'stocks': FileWarning,
    'dunce': ArrowDownToLine,
    'silence': Skull,
    'taunt': Target,
    'courtJester': Crown,
    'smokeBomb': Cloud,
    'protection': Shield,
    'jest': Crown,
    'crown': Crown,
    'challenge': Target,
    'defeat': Skull,
    'immune': ShieldQuestion,
    'guillotine': Axe,
    'dungeons': Users,
    'removal': User,
    'roast': FlameKindling,
    'royalPie': Award,
    'jokeCrown': Crown,
    'memeFrame': Smile,
    'target': Target,
    'glitterBomb': Sparkles
  };
  
  return actionIcons[action] || AlertTriangle;
};

// Get active mockery CSS class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  const mockeryClasses: Record<string, string> = {
    'tomatoes': 'mockery-tomatoes',
    'putridEggs': 'mockery-eggs',
    'eggs': 'mockery-eggs',
    'stocks': 'mockery-stocks',
    'dunce': 'mockery-dunce',
    'silence': 'mockery-silence',
    'taunt': 'mockery-taunt',
    'courtJester': 'mockery-jester',
    'smokeBomb': 'mockery-smoke',
    'protection': 'mockery-protection',
    'jest': 'mockery-jester',
    'crown': 'mockery-crown',
    'challenge': 'mockery-challenge',
    'defeat': 'mockery-defeat',
    'immune': 'mockery-immune',
    'guillotine': 'mockery-guillotine',
    'dungeons': 'mockery-dungeons',
    'removal': 'mockery-removal',
    'roast': 'mockery-roast',
    'royalPie': 'mockery-pie',
    'jokeCrown': 'mockery-joke-crown',
    'memeFrame': 'mockery-meme',
    'target': 'mockery-target',
    'glitterBomb': 'mockery-glitter'
  };
  
  return mockeryClasses[action] || '';
};

// Get action title
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return getMockeryName(action);
};

// Get action description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return getMockeryDescription(action);
};

// Get action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return getMockeryCost(action);
};

export {
  getMockeryName,
  getMockeryDescription,
  getMockeryCost,
  getMockeryTier,
  getMockeryTierColorClass,
  getMockeryActionIcon,
  getActiveMockeryClass,
  getMockeryActionTitle,
  getMockeryActionDescription,
  getMockeryActionPrice
};
