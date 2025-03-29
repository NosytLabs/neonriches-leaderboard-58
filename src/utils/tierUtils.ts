
import { UserTier } from '@/types/user';

export const getTierBadge = (tier: UserTier): { color: string, label: string } => {
  switch (tier) {
    case 'crab':
      return { color: 'bg-red-200 text-red-800', label: 'Crab' };
    case 'fish':
      return { color: 'bg-blue-200 text-blue-800', label: 'Fish' };
    case 'dolphin':
      return { color: 'bg-cyan-200 text-cyan-800', label: 'Dolphin' };
    case 'shark':
      return { color: 'bg-indigo-200 text-indigo-800', label: 'Shark' };
    case 'whale':
      return { color: 'bg-purple-200 text-purple-800', label: 'Whale' };
    case 'pro':
      return { color: 'bg-royal-gold/20 text-royal-gold', label: 'Pro' };
    case 'royal':
      return { color: 'bg-royal-purple/20 text-royal-purple', label: 'Royal' };
    case 'legendary':
      return { color: 'bg-gradient-to-r from-royal-gold to-royal-gold-bright text-black', label: 'Legendary' };
    case 'premium':
      return { color: 'bg-royal-crimson/20 text-royal-crimson', label: 'Premium' };
    case 'basic':
    case 'free':
    default:
      return { color: 'bg-gray-200 text-gray-800', label: 'Basic' };
  }
};

export const getTierAmount = (tier: UserTier): number => {
  switch (tier) {
    case 'crab':
      return 50;
    case 'fish':
      return 250;
    case 'dolphin':
      return 1000;
    case 'shark':
      return 5000;
    case 'whale':
      return 10000;
    case 'pro':
      return 25;
    case 'premium':
      return 50;
    case 'royal':
      return 100;
    case 'legendary':
      return 1000;
    case 'basic':
    case 'free':
    default:
      return 0;
  }
};

export const getTierBySpending = (amount: number): UserTier => {
  if (amount >= 25000) {
    return 'whale';
  } else if (amount >= 10000) {
    return 'shark';
  } else if (amount >= 5000) {
    return 'dolphin';
  } else if (amount >= 1000) {
    return 'fish';
  } else if (amount >= 250) {
    return 'crab';
  } else {
    return 'basic';
  }
};

export default getTierBadge;
