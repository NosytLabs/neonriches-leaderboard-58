
import { UserTier } from '@/types/user-consolidated';

/**
 * Get the CSS color class for a user tier
 * @param tier The user tier
 * @returns CSS color class
 */
export function getTierColor(tier: UserTier): string {
  const tierColors: Record<string, string> = {
    'free': 'text-gray-400',
    'basic': 'text-green-500',
    'premium': 'text-purple-500',
    'royal': 'text-royal-gold',
    'legendary': 'text-orange-500',
    'founder': 'text-yellow-300',
    'noble': 'text-indigo-400',
    'knight': 'text-blue-400',
    'baron': 'text-emerald-400',
    'viscount': 'text-cyan-400',
    'earl': 'text-amber-400',
    'duke': 'text-rose-400',
    'prince': 'text-violet-400',
    'king': 'text-yellow-400',
    'emperor': 'text-orange-300',
    'whale': 'text-teal-300',
    'pro': 'text-blue-500',
    'standard': 'text-green-400',
    'elite': 'text-indigo-500',
    'silver': 'text-slate-400',
    'gold': 'text-yellow-500',
    'platinum': 'text-indigo-400',
    'diamond': 'text-cyan-300',
    'bronze': 'text-amber-700',
    'vip': 'text-purple-400'
  };

  return tierColors[tier] || 'text-gray-400';
}

/**
 * Get the background color class for a user tier
 * @param tier The user tier
 * @returns CSS background class
 */
export function getTierBgColor(tier: UserTier): string {
  const tierBgColors: Record<string, string> = {
    'free': 'bg-gray-800',
    'basic': 'bg-green-900',
    'premium': 'bg-purple-900',
    'royal': 'bg-amber-900',
    'legendary': 'bg-orange-900',
    'founder': 'bg-yellow-900',
    'noble': 'bg-indigo-900',
    'knight': 'bg-blue-900',
    'baron': 'bg-emerald-900',
    'viscount': 'bg-cyan-900',
    'earl': 'bg-amber-900',
    'duke': 'bg-rose-900',
    'prince': 'bg-violet-900',
    'king': 'bg-yellow-900',
    'emperor': 'bg-orange-900',
    'whale': 'bg-teal-900',
    'pro': 'bg-blue-900',
    'standard': 'bg-green-800',
    'elite': 'bg-indigo-900',
    'silver': 'bg-slate-800',
    'gold': 'bg-yellow-900',
    'platinum': 'bg-indigo-800',
    'diamond': 'bg-cyan-900',
    'bronze': 'bg-amber-900',
    'vip': 'bg-purple-800'
  };

  return tierBgColors[tier] || 'bg-gray-800';
}

export default {
  getTierColor,
  getTierBgColor
};
