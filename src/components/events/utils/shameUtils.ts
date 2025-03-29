
import { User } from '@/types/user';

export type ShameAction = 
  | 'tomatoes'
  | 'eggs'
  | 'stocks'
  | 'silence'
  | 'courtJester'
  | 'jester'
  | 'protected'
  | 'immune'
  | 'dunce'
  | 'roast'
  | 'ridicule'
  | 'taunt'
  | 'drama';

export interface ShameEvent {
  id: string;
  targetUserId: string;
  sourceUserId: string;
  action: ShameAction;
  createdAt: string;
  expiresAt: string;
  message?: string;
  isActive: boolean;
}

export const getShameActionName = (action: ShameAction): string => {
  switch (action) {
    case 'tomatoes': return 'Throw Tomatoes';
    case 'eggs': return 'Throw Eggs';
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
    default: return 'Unknown';
  }
};

export const getShameActionDescription = (action: ShameAction, targetName: string = 'this user'): string => {
  switch (action) {
    case 'tomatoes': return `Pelt ${targetName} with rotten tomatoes. A classic form of public ridicule.`;
    case 'eggs': return `Hurl rotten eggs at ${targetName}. The stench will follow them for a day.`;
    case 'stocks': return `Place ${targetName} in the public stocks. The ultimate medieval humiliation.`;
    case 'silence': return `Silence ${targetName} with a royal decree. They will appear muted for 24 hours.`;
    case 'courtJester': return `Appoint ${targetName} as the court jester. A jester's hat will adorn their profile.`;
    case 'jester': return `Make ${targetName} the fool of the court. Their profile will display jester symbols.`;
    case 'protected': return `Grant ${targetName} royal protection. They cannot be shamed for 24 hours.`;
    case 'immune': return `Grant ${targetName} royal immunity. They are immune to all shaming for 72 hours.`;
    case 'dunce': return `Place a dunce cap on ${targetName}. Their profile will show their lack of wisdom.`;
    case 'roast': return `Subject ${targetName} to a royal roasting. Their profile will show burn marks.`;
    case 'ridicule': return `Subject ${targetName} to public ridicule. Their shame will be announced in court.`;
    case 'taunt': return `Publicly taunt ${targetName}. A banner of mockery will appear on their profile.`;
    case 'drama': return `Create court drama involving ${targetName}. Gossip will spread throughout the kingdom.`;
    default: return `Shame ${targetName} with unknown consequences.`;
  }
};

export const getShameActionPrice = (action: ShameAction): number => {
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

export const getShameActionDuration = (action: ShameAction): number => {
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

export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  return now.getMonth() === 11 || now.getMonth() === 5; // June and December
};

export const getFireSaleDiscountPercentage = (): number => {
  if (!isFireSaleMonth()) return 0;
  
  const now = new Date();
  const day = now.getDate();
  
  // Higher discounts in the middle of the month
  if (day >= 10 && day <= 20) {
    return 30; // 30% off
  } else {
    return 15; // 15% off
  }
};

export const isUserProtected = (user: User): boolean => {
  // Check if the user has active protection
  if (!user.profileBoosts) return false;
  
  const now = new Date();
  
  return user.profileBoosts.some(boost => 
    boost.type === 'protection' && 
    new Date(boost.endDate) > now
  );
};
