
import { ShameAction } from '@/types/mockery';
import { Shield, Crown, CloudLightning, ThumbsDown, Flame, Egg, AlertTriangle, VolumeX, MessageSquare } from 'lucide-react';

export const getShameActionPrice = (action: ShameAction): number => {
  const prices: Record<ShameAction, number> = {
    'tomatoes': 0.25,
    'eggs': 0.50,
    'stocks': 1.00,
    'silence': 1.50,
    'courtJester': 2.00,
    'jester': 2.50,
    'protected': 5.00,
    'immune': 10.00,
    'dunce': 1.75,
    'roast': 1.25,
    'ridicule': 1.50,
    'taunt': 1.00,
    'drama': 3.00
  };
  
  return prices[action] || 1.00;
};

export const getShameActionIcon = (action: ShameAction) => {
  const icons: Record<ShameAction, any> = {
    'tomatoes': Egg,
    'eggs': Egg,
    'stocks': AlertTriangle,
    'silence': VolumeX,
    'courtJester': Crown,
    'jester': Crown,
    'protected': Shield,
    'immune': Shield,
    'dunce': ThumbsDown,
    'roast': Flame,
    'ridicule': ThumbsDown,
    'taunt': MessageSquare,
    'drama': CloudLightning
  };
  
  return icons[action] || Crown;
};

export const getShameActionTitle = (action: ShameAction): string => {
  const titles: Record<ShameAction, string> = {
    'tomatoes': 'Pelt with Tomatoes',
    'eggs': 'Hurl Eggs',
    'stocks': 'Place in Stocks',
    'silence': 'Royal Silence',
    'courtJester': 'Court Jester',
    'jester': 'Appoint as Jester',
    'protected': 'Royal Protection',
    'immune': 'Royal Immunity',
    'dunce': 'Dunce Cap',
    'roast': 'Royal Roasting',
    'ridicule': 'Public Ridicule',
    'taunt': 'Public Taunt',
    'drama': 'Court Drama'
  };
  
  return titles[action] || 'Shame';
};

export const getShameActionDescription = (action: ShameAction): string => {
  const descriptions: Record<ShameAction, string> = {
    'tomatoes': 'Pelts the user with rotten tomatoes, marking them with shame for 24 hours.',
    'eggs': 'Hurls rotten eggs at the user, marking them with shame for 48 hours.',
    'stocks': 'Places the user in the public stocks for 72 hours, visible to all.',
    'silence': 'Silences the user with a royal decree for 24 hours.',
    'courtJester': 'Appoints the user as the court jester for 48 hours, reducing their status.',
    'jester': 'Makes the user the fool of the court for 48 hours.',
    'protected': 'Grants the user royal protection for 24 hours, preventing basic mockery.',
    'immune': 'Grants the user royal immunity for 72 hours, preventing all mockery.',
    'dunce': 'Places a dunce cap on the user for 36 hours.',
    'roast': 'Subjects the user to a royal roasting for 24 hours.',
    'ridicule': 'Subjects the user to public ridicule for 48 hours.',
    'taunt': 'Publicly taunts the user for 24 hours.',
    'drama': 'Creates court drama involving the user for 72 hours.'
  };
  
  return descriptions[action] || 'Shames the user publicly.';
};

export const hasWeeklyDiscount = (): boolean => {
  // Check if there's a weekly discount based on the current date
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday
  
  // Discount on Tuesdays and Thursdays
  return day === 2 || day === 4;
};

export const getWeeklyDiscountedAction = (): ShameAction => {
  const now = new Date();
  const week = Math.floor(now.getDate() / 7);
  
  // Rotate through different actions based on the week of the month
  const discountedActions: ShameAction[] = ['tomatoes', 'eggs', 'ridicule', 'taunt'];
  return discountedActions[week % discountedActions.length];
};

export const getDiscountedShamePrice = (action: ShameAction): number => {
  const basePrice = getShameActionPrice(action);
  if (hasWeeklyDiscount() && action === getWeeklyDiscountedAction()) {
    return basePrice * 0.75; // 25% discount
  }
  return basePrice;
};

export const isFireSaleMonth = (): boolean => {
  const now = new Date();
  const month = now.getMonth();
  
  // Fire sale in March (2) and September (8)
  return month === 2 || month === 8;
};

export const getFireSaleDiscountPercentage = (): number => {
  if (!isFireSaleMonth()) return 0;
  
  const now = new Date();
  const day = now.getDate();
  
  // Higher discounts at the beginning of the month
  if (day <= 7) return 30; // 30% off first week
  if (day <= 14) return 25; // 25% off second week
  if (day <= 21) return 20; // 20% off third week
  return 15; // 15% off last week
};
