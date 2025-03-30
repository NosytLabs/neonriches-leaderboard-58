
import { 
  Crown, 
  Egg, 
  Drumstick, 
  Bomb, 
  VolumeX, 
  Milestone, 
  Presentation, 
  Sparkles, 
  AlarmClock,
  Target,
  MessageSquareOff,
  Lock,
  MousePointerClick,
  Cloud 
} from 'lucide-react';
import { MockeryAction, MockeryTier, ShameAction } from '@/types/mockery';

export interface ExtendedMockeryAction {
  title: string;
  description: string;
  price: number;
  tier: MockeryTier;
  icon?: string;
}

// Mockery costs
export const MOCKERY_COSTS: Record<string, number> = {
  tomatoes: 20,
  eggs: 50,
  putridEggs: 100,
  stocks: 200,
  silence: 200,
  courtJester: 500,
  dunce: 35,
  smokeBomb: 300,
  jester: 75,
  protection: 100,
  glitterBomb: 250,
  royalPie: 150,
  jokeCrown: 200,
  memeFrame: 100,
  roast: 15,
  ridicule: 20
};

// Mockery names for display
export const MOCKERY_NAMES: Record<string, string> = {
  tomatoes: 'Throw Tomatoes',
  eggs: 'Egg Bombardment',
  putridEggs: 'Putrid Eggs',
  stocks: 'Place in Stocks',
  silence: 'Royal Silence',
  courtJester: 'Make Court Jester',
  dunce: 'Dunce Cap',
  smokeBomb: 'Smoke Bomb',
  jester: 'Jester Label',
  protection: 'Royal Protection',
  immune: 'Royal Immunity',
  glitterBomb: 'Glitter Bomb',
  royalPie: 'Royal Pie',
  jokeCrown: 'Joke Crown',
  memeFrame: 'Meme Frame',
  roast: 'Royal Roast',
  ridicule: 'Public Ridicule'
};

// Mockery descriptions
export const MOCKERY_DESCRIPTIONS: Record<string, string> = {
  tomatoes: 'Throw virtual tomatoes at your target\'s profile for 24 hours',
  eggs: 'Bombard your target with virtual eggs for 48 hours',
  putridEggs: 'Bombard with extremely smelly eggs for 48 hours',
  stocks: 'Place your target in the public stocks for 72 hours',
  silence: 'Silence your target from chat for 48 hours',
  courtJester: 'Make your target the royal court jester for 7 days',
  dunce: 'Place a dunce cap on your target for 48 hours',
  smokeBomb: 'Engulf your target\'s profile in thick smoke for 8 hours',
  jester: 'Label as the royal jester for 4 days',
  protection: 'Protect yourself from mockery for 7 days',
  immune: 'Grant yourself royal immunity from mockery for 3 days',
  glitterBomb: 'Cover your target\'s profile in sparkly glitter for 48 hours',
  royalPie: 'Hit your target with a cream pie for 36 hours',
  jokeCrown: 'Force your target to wear a joke crown for 72 hours',
  memeFrame: 'Frame your target\'s avatar in memes for 60 hours',
  roast: 'Subject your target to a royal roasting for 3 hours',
  ridicule: 'Publicly ridicule your target for 4 hours'
};

// Map mockery action to icons
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return Drumstick;
    case 'eggs':
    case 'putridEggs':
      return Egg;
    case 'stocks':
      return Milestone;
    case 'dunce':
      return Crown;
    case 'smokeBomb':
      return Bomb;
    case 'silence':
      return VolumeX;
    case 'courtJester':
    case 'jester':
      return Presentation;
    case 'glitterBomb':
      return Sparkles;
    default:
      return AlarmClock;
  }
};

// Get mockery title for display
export const getMockeryActionTitle = (action: MockeryAction): string => {
  return MOCKERY_NAMES[action] || action;
};

// Get mockery description
export const getMockeryActionDescription = (action: MockeryAction): string => {
  return MOCKERY_DESCRIPTIONS[action] || `Apply ${action} effect to the user.`;
};

// Get mockery price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  return MOCKERY_COSTS[action] || 10;
};

// Added functions needed from errors
export const getMockeryTier = (action: MockeryAction): MockeryTier => {
  if (action === 'dunce' || action === 'courtJester' || action === 'smokeBomb') {
    return 'legendary';
  } else if (action === 'stocks' || action === 'silence' || action === 'glitterBomb') {
    return 'epic';
  } else if (action === 'putridEggs' || action === 'jokeCrown') {
    return 'rare';
  } else if (action === 'eggs' || action === 'protection' || action === 'jester' || action === 'royalPie') {
    return 'uncommon';
  } else {
    return 'common';
  }
};

export const isShameAction = (action: MockeryAction): action is ShameAction => {
  const shameActions: ShameAction[] = [
    'ridicule', 'humiliate', 'expose', 'mock', 'tomatoes', 
    'stocks', 'eggs', 'silence', 'courtJester', 'dunce', 
    'smokeBomb', 'shame', 'jester', 'putridEggs'
  ];
  return shameActions.includes(action as ShameAction);
};

// Get active mockery CSS class
export const getActiveMockeryClass = (action: MockeryAction): string => {
  switch (action) {
    case 'dunce':
      return 'mockery-dunce';
    case 'courtJester':
      return 'mockery-jester';
    case 'smokeBomb':
      return 'mockery-smoke';
    case 'tomatoes':
      return 'mockery-tomatoes';
    case 'eggs':
    case 'putridEggs':
      return 'mockery-eggs';
    case 'stocks':
      return 'mockery-stocks';
    case 'glitterBomb':
      return 'mockery-glitter';
    case 'royalPie':
      return 'mockery-pie';
    case 'jokeCrown':
      return 'mockery-joke-crown';
    default:
      return '';
  }
};
