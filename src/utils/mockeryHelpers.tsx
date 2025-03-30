
import React from 'react';
import { Crown, Shield, Egg, Tomato, TrendingDown } from 'lucide-react';
import { MockeryAction } from '@/types/mockery';

/**
 * Get the display name for a mockery action
 */
export const getMockeryActionName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Eggs';
    case 'stocks': return 'Place in Stocks';
    case 'dunce': return 'Dunce Cap';
    case 'jester': return 'Jester\'s Bell';
    case 'crown': return 'Mockery Crown';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'smokeBomb': return 'Smoke Bomb';
    case 'protection': return 'Royal Protection';
    case 'jest': return 'Royal Jest';
    case 'glitterBomb': return 'Glitter Bomb';
    case 'defeat': return 'Royal Defeat';
    case 'guillotine': return 'Guillotine';
    case 'dungeons': return 'Royal Dungeons';
    case 'removal': return 'Banishment';
    case 'roast': return 'Royal Roast';
    case 'royalPie': return 'Royal Pie';
    case 'jokeCrown': return 'Joke Crown';
    case 'memeFrame': return 'Meme Frame';
    case 'challenge': return 'Royal Challenge';
    case 'target': return 'Royal Target';
    default: return action.charAt(0).toUpperCase() + action.slice(1);
  }
};

/**
 * Get the icon component for a mockery action
 */
export const getShameActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomatoes': return <Tomato className="h-4 w-4" />;
    case 'eggs': return <Egg className="h-4 w-4" />;
    case 'stocks': return <TrendingDown className="h-4 w-4" />;
    default: return <Crown className="h-4 w-4" />;
  }
};

/**
 * Get a description for a mockery action
 */
export const getShameActionDescription = (action: MockeryAction, username?: string): string => {
  const targetText = username ? ` on ${username}` : '';
  
  switch (action) {
    case 'tomatoes': 
      return `Shower your target with virtual tomatoes${targetText}, showing your disagreement in the most medieval way possible.`;
    case 'eggs': 
      return `Nothing says disapproval like eggs${targetText}. Digital and mess-free but gets the point across.`;
    case 'stocks': 
      return `Tank their virtual status${targetText} by showing everyone their stocks are falling.`;
    default: 
      return `Take action against this user${targetText}.`;
  }
};

export { getMockeryActionName, getShameActionIcon, getShameActionDescription };
