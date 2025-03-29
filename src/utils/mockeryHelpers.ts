
import { MockeryAction, MockeryTier } from '@/types/mockery';

// Get the name of a mockery action for display
export const getMockeryActionName = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Rotten Eggs';
    case 'stocks': return 'Place in Stocks';
    case 'silence': return 'Royal Silence';
    case 'courtJester': return 'Court Jester';
    case 'jester': return 'Royal Jester';
    case 'protected': return 'Royal Protection';
    case 'immune': return 'Royal Immunity';
    case 'dunce': return 'Dunce Cap';
    case 'roast': return 'Royal Roast';
    case 'ridicule': return 'Public Ridicule';
    case 'taunt': return 'Royal Taunt';
    case 'drama': return 'Court Drama';
    default: return 'Unknown Action';
  }
};

// Get the description of a mockery action
export const getMockeryDescription = (action: MockeryAction, targetName: string = 'this user'): string => {
  switch (action) {
    case 'tomatoes': return `Pelt ${targetName} with rotten tomatoes. A classic form of public ridicule (visual effect only).`;
    case 'eggs': return `Hurl rotten eggs at ${targetName}. The visual stench will follow them for a day.`;
    case 'stocks': return `Place ${targetName} in the public stocks. The ultimate medieval visual humiliation.`;
    case 'silence': return `Silence ${targetName} with a royal decree. They will appear muted in public forums for 24 hours.`;
    case 'courtJester': return `Appoint ${targetName} as the court jester. They will be adorned with a jester's hat and bells for all to see.`;
    case 'jester': return `Make ${targetName} the fool of the court. Their profile will display jester symbols for 48 hours.`;
    case 'protected': return `Grant ${targetName} royal protection. They cannot be mocked for 24 hours.`;
    case 'immune': return `Grant ${targetName} royal immunity. They are immune to all mockery for 72 hours.`;
    case 'dunce': return `Place a dunce cap on ${targetName}. Their profile will show they are lacking in royal wisdom.`;
    case 'roast': return `Subject ${targetName} to a royal roasting. Their profile will show burn marks for 24 hours.`;
    case 'ridicule': return `Subject ${targetName} to public ridicule. Their shame will be announced in the royal court.`;
    case 'taunt': return `Publicly taunt ${targetName}. A banner of mockery will appear on their profile.`;
    case 'drama': return `Create court drama involving ${targetName}. Gossip will spread throughout the kingdom.`;
    default: return `Mock ${targetName} with unknown consequences.`;
  }
};

// Get the tier color for a mockery tier
export const getTierColor = (tier: MockeryTier): string => {
  switch (tier) {
    case 'common': return '#7c7c7c';
    case 'uncommon': return '#27a745';
    case 'rare': return '#007bff';
    case 'epic': return '#a335ee';
    case 'legendary': return '#ff8800';
    default: return '#7c7c7c';
  }
};

// Get the duration in hours for a mockery action
export const getMockeryDuration = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 24;
    case 'eggs': return 48;
    case 'stocks': return 72;
    case 'silence': return 24;
    case 'courtJester': return 48;
    case 'jester': return 48;
    case 'protected': return 24;
    case 'immune': return 72;
    case 'dunce': return 36;
    case 'roast': return 24;
    case 'ridicule': return 48;
    case 'taunt': return 24;
    case 'drama': return 72;
    default: return 24;
  }
};

// Format duration for display
export const formatDuration = (hours: number): string => {
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? '' : 's'}`;
  } else {
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    
    if (remainingHours === 0) {
      return `${days} day${days === 1 ? '' : 's'}`;
    } else {
      return `${days} day${days === 1 ? '' : 's'} and ${remainingHours} hour${remainingHours === 1 ? '' : 's'}`;
    }
  }
};

// Get price for a mockery action
export const getMockeryPrice = (action: MockeryAction): number => {
  switch (action) {
    case 'tomatoes': return 0.25;
    case 'eggs': return 0.50;
    case 'stocks': return 1.00;
    case 'silence': return 1.50;
    case 'courtJester': return 2.00;
    case 'jester': return 2.50;
    case 'protected': return 5.00;
    case 'immune': return 10.00;
    case 'dunce': return 1.75;
    case 'roast': return 1.25;
    case 'ridicule': return 1.50;
    case 'taunt': return 1.00;
    case 'drama': return 3.00;
    default: return 1.00;
  }
};

// Convert action to tier
export const convertActionToTier = (action: MockeryAction): MockeryTier => {
  switch (action) {
    case 'tomatoes':
    case 'dunce':
    case 'taunt':
      return 'common';
    case 'eggs':
    case 'roast':
    case 'ridicule':
      return 'uncommon';
    case 'stocks':
    case 'silence':
    case 'drama':
      return 'rare';
    case 'courtJester':
    case 'jester':
    case 'protected':
      return 'epic';
    case 'immune':
      return 'legendary';
    default:
      return 'common';
  }
};

// Get mockery text (different from description)
export const getMockeryText = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return "Rotten Tomatoes";
    case 'eggs': return "Rotten Eggs";
    case 'stocks': return "Public Stocks";
    case 'silence': return "Royal Silence";
    case 'courtJester': return "Court Jester";
    case 'jester': return "Royal Jester";
    case 'protected': return "Royal Protection";
    case 'immune': return "Royal Immunity";
    case 'dunce': return "Dunce Cap";
    case 'roast': return "Royal Roast";
    case 'ridicule': return "Public Ridicule";
    case 'taunt': return "Royal Taunt";
    case 'drama': return "Court Drama";
    default: return "Unknown";
  }
};

// Get mockery color for UI elements
export const getMockeryColor = (action: MockeryAction): string => {
  const tier = convertActionToTier(action);
  return getTierColor(tier);
};

// Get icon for mockery action
export const getMockeryIcon = (action: MockeryAction): string => {
  switch (action) {
    case 'tomatoes': return 'tomato';
    case 'eggs': return 'egg';
    case 'stocks': return 'stocks';
    case 'silence': return 'mute';
    case 'courtJester': return 'jester-hat';
    case 'jester': return 'jester-hat';
    case 'protected': return 'shield';
    case 'immune': return 'shield-star';
    case 'dunce': return 'dunce-cap';
    case 'roast': return 'fire';
    case 'ridicule': return 'laugh';
    case 'taunt': return 'message-circle';
    case 'drama': return 'theater-masks';
    default: return 'help-circle';
  }
};

// Get mockery cost (alias for getMockeryPrice for compatibility)
export const getMockeryCost = getMockeryPrice;
