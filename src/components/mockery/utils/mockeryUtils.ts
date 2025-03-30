
import { MockeryAction, MockeryTier } from '@/types/mockery';
import { User } from '@/types/user';
import { 
  TomatoIcon, EggIcon, AxeIcon, MicOffIcon, Smile, BookXIcon, CloudFog,
  ShieldIcon, Crown, AlertCircle, AlertTriangle, Sparkles
} from 'lucide-react';

// Get mockery action icon
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes':
      return TomatoIcon;
    case 'eggs':
    case 'putridEggs':
      return EggIcon;
    case 'stocks':
      return AxeIcon;
    case 'silence':
      return MicOffIcon;
    case 'courtJester':
    case 'jester':
      return Smile;
    case 'dunce':
      return BookXIcon;
    case 'smokeBomb':
      return CloudFog;
    case 'protection':
      return ShieldIcon;
    case 'immune':
      return Crown;
    case 'common':
      return AlertCircle;
    case 'uncommon':
      return AlertTriangle;
    case 'rare':
      return Sparkles;
    case 'epic':
      return Sparkles;
    case 'legendary':
      return Crown;
    case 'royalPie':
      return EggIcon;
    case 'glitterBomb':
      return Sparkles;
    case 'jokeCrown':
      return Crown;
    case 'memeFrame':
      return AlertCircle;
    default:
      return AlertCircle;
  }
};

// Get mockery title
export const getMockeryTitle = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Tomato Barrage';
    case 'putridEggs':
    case 'eggs':
      return 'Rotten Eggs';
    case 'stocks':
      return 'Public Stocks';
    case 'silence':
      return 'Royal Silence';
    case 'courtJester':
      return 'Court Jester';
    case 'dunce':
      return 'Dunce Cap';
    case 'smokeBomb':
      return 'Smoke Bomb';
    case 'jester':
      return 'Jester Hat';
    case 'royalPie':
      return 'Royal Pie';
    case 'glitterBomb':
      return 'Glitter Bomb';
    case 'jokeCrown':
      return 'Joke Crown';
    case 'memeFrame':
      return 'Meme Frame';
    default:
      return 'Unknown Mockery';
  }
};

// Get mockery description
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes':
      return 'Pelts the user with virtual tomatoes, marking their profile with tomato stains for 24 hours.';
    case 'putridEggs':
    case 'eggs':
      return 'Throws rotten eggs at the target, giving their profile a foul appearance for a full day.';
    case 'stocks':
      return 'Places the user in the public stocks, restricting their ability to post for 12 hours.';
    case 'silence':
      return 'Imposes royal silence on the user, preventing them from commenting for 6 hours.';
    case 'courtJester':
      return 'Forces the user to wear the jester\'s costume, making their posts appear as jokes for 24 hours.';
    case 'dunce':
      return 'Places a dunce cap on the user, marking all their content as questionable for 12 hours.';
    case 'smokeBomb':
      return 'Throws a smoke bomb at the user, making their profile harder to see for 8 hours.';
    case 'jester':
      return 'Transforms the user into the court jester, forcing them to entertain others for 24 hours.';
    case 'royalPie':
      return 'Splats a luxurious pie right in their royal face for 48 hours.';
    case 'glitterBomb':
      return 'Covers the target in impossible-to-remove glitter for an entire week.';
    case 'jokeCrown':
      return 'Replaces their crown with a squeaky joke version for 3 days.';
    case 'memeFrame':
      return 'Frames all their content in ridiculous meme templates for 24 hours.';
    default:
      return 'A mysterious mockery effect with unknown consequences.';
  }
};

// Get mockery action price
export const getMockeryActionPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 5;
    case 'putridEggs':
    case 'eggs':
      return 10;
    case 'stocks':
      return 25;
    case 'silence':
      return 50;
    case 'courtJester':
      return 100;
    case 'dunce':
      return 75;
    case 'smokeBomb':
      return 30;
    case 'jester':
      return 15;
    case 'royalPie':
      return 150;
    case 'glitterBomb':
      return 200;
    case 'jokeCrown':
      return 300;
    case 'memeFrame':
      return 175;
    default:
      return 50;
  }
};

// Get mockery cooldown in hours
export const getMockeryCooldown = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes':
      return 6;
    case 'putridEggs':
    case 'eggs':
      return 12;
    case 'stocks':
      return 24;
    case 'silence':
      return 48;
    case 'courtJester':
      return 72;
    case 'dunce':
      return 48;
    case 'smokeBomb':
      return 24;
    default:
      return 24;
  }
};

// Check if a mockery action can be used on a user
export const canMockUser = (user: User, action: MockeryAction): boolean => {
  // Check for immunity based on user tier or other factors
  if (user.tier === 'royal' && (action === 'tomatoes' || action === 'eggs' || action === 'putridEggs')) {
    return false;
  }
  
  // VIP users might have protection from certain mockery actions
  if (user.isVIP && action === 'silence') {
    return false;
  }
  
  // Top ranked users might be immune to certain actions
  if (user.rank && user.rank <= 3 && action === 'dunce') {
    return false;
  }
  
  return true;
};

// Function to determine if a user is currently mocked
export const isUserCurrentlyMocked = (
  user: User, 
  mockeryEvents: Record<string, { action: MockeryAction, until: number }>
): { isMocked: boolean; action?: MockeryAction; until?: number } => {
  const now = Date.now();
  const userMockery = mockeryEvents[user.id];
  
  if (userMockery && userMockery.until > now) {
    return { isMocked: true, action: userMockery.action, until: userMockery.until };
  }
  
  return { isMocked: false };
};
