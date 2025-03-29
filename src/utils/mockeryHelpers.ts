
import { MockeryTier } from '@/types/mockery';

/**
 * Converts a mockery action to a tier
 * @param action Mockery action
 * @returns Mockery tier
 */
export const convertActionToTier = (action: string): MockeryTier => {
  switch (action) {
    case 'tomatoes':
      return 'common';
    case 'eggs':
      return 'uncommon';
    case 'stocks':
      return 'rare';
    case 'silence':
      return 'epic';
    case 'courtJester':
    case 'jester':
      return 'legendary';
    default:
      return 'common';
  }
};

/**
 * Gets the mockery text description based on tier
 * @param tier Mockery tier
 * @returns Mockery text
 */
export const getMockeryText = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common':
      return 'Tomato-Pelted';
    case 'uncommon':
      return 'Egg-Soaked';
    case 'rare':
      return 'Stocks-Bound';
    case 'epic':
      return 'Silenced';
    case 'legendary':
      return 'Court Jester';
    default:
      return 'Mocked';
  }
};

/**
 * Gets the mockery color styling based on tier
 * @param tier Mockery tier
 * @returns CSS classes for the mockery
 */
export const getMockeryColor = (tier: MockeryTier): { text: string, bg: string, border: string } => {
  switch (tier) {
    case 'common':
      return {
        text: 'text-red-400',
        bg: 'bg-red-500/20',
        border: 'border-red-500/30'
      };
    case 'uncommon':
      return {
        text: 'text-yellow-400',
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-500/30'
      };
    case 'rare':
      return {
        text: 'text-amber-400',
        bg: 'bg-amber-500/20',
        border: 'border-amber-500/30'
      };
    case 'epic':
      return {
        text: 'text-purple-400',
        bg: 'bg-purple-500/20',
        border: 'border-purple-500/30'
      };
    case 'legendary':
      return {
        text: 'text-royal-gold',
        bg: 'bg-royal-gold/20',
        border: 'border-royal-gold/30'
      };
    default:
      return {
        text: 'text-white/80',
        bg: 'bg-white/10',
        border: 'border-white/20'
      };
  }
};

/**
 * Gets the mockery duration text based on action
 * @param action Mockery action
 * @returns Duration text
 */
export const getMockeryDuration = (action: string): string => {
  switch (action) {
    case 'tomatoes':
      return '24 hours';
    case 'eggs':
      return '48 hours';
    case 'stocks':
      return '72 hours';
    case 'silence':
      return '24 hours';
    case 'courtJester':
    case 'jester':
      return '48 hours';
    default:
      return '24 hours';
  }
};

/**
 * Gets a satirical mockery message based on action
 * @param action Mockery action
 * @param username Target username
 * @returns Satirical message
 */
export const getMockerySatiricalMessage = (action: string, username: string): string => {
  const messages = {
    tomatoes: [
      `${username} found out that tomatoes don't complement their outfit.`,
      `${username} tried to dodge the tomatoes but their credit card was too heavy.`,
      `${username} will need to buy a new outfit after this tomato shower.`
    ],
    eggs: [
      `${username}'s expensive haircut is now garnished with organic protein.`,
      `${username} discovers that eggs aren't just for breakfast.`,
      `${username} will need to visit their personal stylist after this eggy situation.`
    ],
    stocks: [
      `${username} is now on display like their luxury purchases.`,
      `${username} discovers that no amount of money can buy freedom from the stocks.`,
      `${username}'s designer shoes won't help them escape the public stocks.`
    ],
    silence: [
      `${username} can't brag about their purchases for a while.`,
      `${username}'s golden tongue has been temporarily revoked.`,
      `${username} will have to communicate with designer hand gestures for now.`
    ],
    courtJester: [
      `${username} has been promoted to Court Jester, the most prestigious mockery.`,
      `${username}'s luxury lifestyle is now the kingdom's favorite joke.`,
      `${username} finds that even a diamond-encrusted jester hat is still a jester hat.`
    ]
  };
  
  const actionMessages = messages[action as keyof typeof messages] || messages.tomatoes;
  return actionMessages[Math.floor(Math.random() * actionMessages.length)];
};
