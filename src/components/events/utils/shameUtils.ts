
import { ShameAction } from '../hooks/useShameEffect';

export const getShameActionPrice = (action: ShameAction): number => {
  switch (action) {
    case 'tomatoes': return 0.5;
    case 'eggs': return 1.0;
    case 'stocks': return 2.0;
    default: return 0.5;
  }
};

export const getShameActionTitle = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    default: return 'Public Shaming';
  }
};

export const getShameActionDescription = (action: ShameAction, username: string = 'noble'): string => {
  switch (action) {
    case 'tomatoes':
      return `Pelt ${username} with rotten tomatoes for all to see. A classic form of medieval public ridicule.`;
    case 'eggs':
      return `Hurl rotten eggs at ${username}, covering them in putrid yolk. The stench will follow them for a day.`;
    case 'stocks':
      return `Place ${username} in the public stocks for a day. The ultimate medieval humiliation.`;
    default:
      return `Publicly shame ${username} for all the kingdom to see.`;
  }
};

export const getShameActionIcon = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return '🍅';
    case 'eggs': return '🥚';
    case 'stocks': return '🪵';
    default: return '📜';
  }
};

export const getShameActionColor = (action: ShameAction): { border: string, bg: string, text: string } => {
  switch (action) {
    case 'tomatoes':
      return {
        border: 'border-royal-crimson/40',
        bg: 'bg-royal-crimson/10',
        text: 'text-royal-crimson'
      };
    case 'eggs':
      return {
        border: 'border-royal-gold/40',
        bg: 'bg-royal-gold/10',
        text: 'text-royal-gold'
      };
    case 'stocks':
      return {
        border: 'border-royal-purple/40',
        bg: 'bg-royal-purple/10',
        text: 'text-royal-purple'
      };
    default:
      return {
        border: 'border-white/20',
        bg: 'bg-white/5',
        text: 'text-white'
      };
  }
};
