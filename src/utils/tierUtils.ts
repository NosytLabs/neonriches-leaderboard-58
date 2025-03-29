
import { UserTier } from '@/types/user';
import { Crown, Award, Star, Medal, CircleDollarSign } from 'lucide-react';

export const getTierLabel = (tier: UserTier): string => {
  switch (tier) {
    case 'bronze': return 'Bronze';
    case 'silver': return 'Silver';
    case 'gold': return 'Gold';
    case 'platinum': return 'Platinum';
    case 'royal': return 'Royal';
    default: return 'Bronze';
  }
};

export const getTierMinSpend = (tier: UserTier): number => {
  switch (tier) {
    case 'bronze': return 0;
    case 'silver': return 50;
    case 'gold': return 200;
    case 'platinum': return 500;
    case 'royal': return 1000;
    default: return 0;
  }
};

export const getTierMaxSpend = (tier: UserTier): number | null => {
  switch (tier) {
    case 'bronze': return 49.99;
    case 'silver': return 199.99;
    case 'gold': return 499.99;
    case 'platinum': return 999.99;
    case 'royal': return null; // No upper limit
    default: return 49.99;
  }
};

export const getTierBadge = (tier: UserTier) => {
  switch (tier) {
    case 'bronze': return Medal;
    case 'silver': return Star;
    case 'gold': return Award;
    case 'platinum': return CircleDollarSign;
    case 'royal': return Crown;
    default: return Medal;
  }
};

export const getTierColor = (tier: UserTier): string => {
  switch (tier) {
    case 'bronze': return 'text-amber-600';
    case 'silver': return 'text-slate-400';
    case 'gold': return 'text-yellow-500';
    case 'platinum': return 'text-indigo-400';
    case 'royal': return 'text-royal-gold';
    default: return 'text-gray-400';
  }
};

export const getTierBadgeColor = (tier: UserTier): { color: string; label: string } => {
  switch (tier) {
    case 'bronze':
      return { color: 'bg-amber-600/20 text-amber-600 border-amber-600/30', label: 'Bronze' };
    case 'silver':
      return { color: 'bg-slate-400/20 text-slate-400 border-slate-400/30', label: 'Silver' };
    case 'gold':
      return { color: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30', label: 'Gold' };
    case 'platinum':
      return { color: 'bg-indigo-400/20 text-indigo-400 border-indigo-400/30', label: 'Platinum' };
    case 'royal':
      return { color: 'bg-royal-gold/20 text-royal-gold border-royal-gold/30', label: 'Royal' };
    default:
      return { color: 'bg-gray-400/20 text-gray-400 border-gray-400/30', label: 'Bronze' };
  }
};

export const getUserTierProgress = (spentAmount: number): { tier: UserTier; progress: number; nextTier?: UserTier } => {
  if (spentAmount >= 1000) {
    return { tier: 'royal', progress: 100 };
  } else if (spentAmount >= 500) {
    const progress = Math.min(((spentAmount - 500) / 500) * 100, 99);
    return { tier: 'platinum', progress, nextTier: 'royal' };
  } else if (spentAmount >= 200) {
    const progress = ((spentAmount - 200) / 300) * 100;
    return { tier: 'gold', progress, nextTier: 'platinum' };
  } else if (spentAmount >= 50) {
    const progress = ((spentAmount - 50) / 150) * 100;
    return { tier: 'silver', progress, nextTier: 'gold' };
  } else {
    const progress = (spentAmount / 50) * 100;
    return { tier: 'bronze', progress, nextTier: 'silver' };
  }
};

export const getNextTierAmount = (currentSpent: number): number => {
  if (currentSpent < 50) {
    return 50 - currentSpent;
  } else if (currentSpent < 200) {
    return 200 - currentSpent;
  } else if (currentSpent < 500) {
    return 500 - currentSpent;
  } else if (currentSpent < 1000) {
    return 1000 - currentSpent;
  }
  return 0;
};
