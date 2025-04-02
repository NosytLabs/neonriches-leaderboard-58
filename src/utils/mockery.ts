
import { MockeryAction } from '@/types/mockery-types';
import { Egg, Tomato, Flame, Heart, ThumbsDown, Laugh, Skull, Crown } from 'lucide-react';

// Export the mockery name getter function
export const getMockeryName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato':
      return 'Throw Tomato';
    case 'egg':
      return 'Throw Egg';
    case 'rotten_egg':
      return 'Throw Rotten Egg';
    case 'flame':
      return 'Roast Publicly';
    case 'heart':
      return 'Love Bombing';
    case 'thumbs_down':
      return 'Disapproval';
    case 'laugh':
      return 'Public Ridicule';
    case 'skull':
      return 'Death Stare';
    case 'crown':
      return 'Royal Mockery';
    default:
      return 'Unknown Action';
  }
};

// Export the mockery description getter function
export const getMockeryDescription = (action: MockeryAction): string => {
  switch (action) {
    case 'tomato':
      return 'Throw a ripe tomato at this user. Messy but harmless.';
    case 'egg':
      return 'Throw an egg at this user. A classic mockery move.';
    case 'rotten_egg':
      return 'Throw a rotten egg. The smell will linger for days.';
    case 'flame':
      return 'Publicly roast this user with a scathing critique.';
    case 'heart':
      return 'Overwhelm with fake affection to create confusion.';
    case 'thumbs_down':
      return 'Show your strong disapproval for this user.';
    case 'laugh':
      return 'Subject this user to public ridicule.';
    case 'skull':
      return 'Give this user the death stare. Intimidating.';
    case 'crown':
      return 'The ultimate royal mockery. Reserved for the most deserving.';
    default:
      return 'No description available for this action.';
  }
};

// Export mockery icon getter function
export const getMockeryActionIcon = (action: MockeryAction) => {
  switch (action) {
    case 'tomato':
      return Tomato;
    case 'egg':
      return Egg;
    case 'rotten_egg':
      return Egg;
    case 'flame':
      return Flame;
    case 'heart':
      return Heart;
    case 'thumbs_down':
      return ThumbsDown;
    case 'laugh':
      return Laugh;
    case 'skull':
      return Skull;
    case 'crown':
      return Crown;
    default:
      return Laugh;
  }
};

// Export mockery tier getter function
export const getMockeryTier = (action: MockeryAction): string => {
  switch (action) {
    case 'crown':
      return 'legendary';
    case 'skull':
      return 'epic';
    case 'flame':
    case 'rotten_egg':
      return 'rare';
    case 'laugh':
    case 'thumbs_down':
    case 'heart':
      return 'uncommon';
    case 'tomato':
    case 'egg':
    default:
      return 'common';
  }
};

// Export mockery cost function
export const getMockeryCost = (action: MockeryAction): number => {
  switch (action) {
    case 'crown':
      return 500;
    case 'skull':
      return 250;
    case 'flame':
    case 'rotten_egg':
      return 100;
    case 'laugh':
    case 'thumbs_down':
    case 'heart':
      return 50;
    case 'tomato':
    case 'egg':
    default:
      return 10;
  }
};

export default {
  getMockeryName,
  getMockeryDescription,
  getMockeryActionIcon,
  getMockeryTier,
  getMockeryCost
};
