
import { Egg, AlertCircle, Crown, Scroll, ShieldOff, MessageSquareOff, Theater } from 'lucide-react';
import { MockeryAction, MockeryTier } from '@/types/mockery';

export const getMockeryText = (mockeryType: MockeryTier): string => {
  switch (mockeryType) {
    case 'common':
      return 'Tomato';
    case 'uncommon':
      return 'Egg';
    case 'rare':
      return 'Stocks';
    case 'epic':
      return 'Silence';
    case 'legendary':
      return 'Court Jester';
    default:
      return 'Unknown';
  }
};

export const getMockeryDescription = (mockeryType: MockeryTier): string => {
  switch (mockeryType) {
    case 'common':
      return 'Throw virtual tomatoes at this user, marking them with a splatter for 24 hours. A classic form of public ridicule!';
    case 'uncommon':
      return 'Pelt this user with virtual eggs, leaving them with an eggy appearance for 48 hours. Messy and embarrassing!';
    case 'rare':
      return 'Place this user in the royal stocks for all to see. They will be displayed prominently in the Hall of Shame for 3 days.';
    case 'epic':
      return 'Impose a royal decree of silence. This user\'s comments will be hidden from public view for 48 hours.';
    case 'legendary':
      return 'Appoint this user as the Court Jester. Their profile will display the jester's hat for 7 days, and they must speak in rhymes in the chat.';
    default:
      return 'Unknown mockery type';
  }
};

export const getMockeryIcon = (mockeryType: MockeryTier) => {
  switch (mockeryType) {
    case 'common':
      return AlertCircle;
    case 'uncommon':
      return Egg;
    case 'rare':
      return Scroll;
    case 'epic':
      return MessageSquareOff;
    case 'legendary':
      return Crown;
    default:
      return AlertCircle;
  }
};

export const getMockeryColor = (mockeryType: MockeryTier) => {
  switch (mockeryType) {
    case 'common':
      return { text: 'text-red-500', bg: 'bg-red-500/10' };
    case 'uncommon':
      return { text: 'text-yellow-200', bg: 'bg-yellow-200/10' };
    case 'rare':
      return { text: 'text-amber-500', bg: 'bg-amber-500/10' };
    case 'epic':
      return { text: 'text-blue-500', bg: 'bg-blue-500/10' };
    case 'legendary':
      return { text: 'text-royal-gold', bg: 'bg-royal-gold/10' };
    default:
      return { text: 'text-white', bg: 'bg-white/10' };
  }
};

export const getMockeryCost = (mockeryType: MockeryTier): number => {
  switch (mockeryType) {
    case 'common':
      return 1;
    case 'uncommon':
      return 3;
    case 'rare':
      return 5;
    case 'epic':
      return 10;
    case 'legendary':
      return 25;
    default:
      return 0;
  }
};

// Helper function to safely convert MockeryAction to MockeryTier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
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
