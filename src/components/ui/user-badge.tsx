
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { UserTier, TeamType } from '@/types/user-types';
import {
  Diamond,
  Crown,
  Award,
  Shield,
  Star,
  User,
  Sparkles,
  Gem,
  Coins
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserBadgeProps {
  type: 'tier' | 'team';
  value: UserTier | TeamType;
  className?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const UserBadge: React.FC<UserBadgeProps> = ({
  type,
  value,
  className,
  showLabel = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base'
  };

  const tierBadges: Record<string, { bg: string; icon: React.ReactNode; label: string }> = {
    free: { bg: 'bg-gray-100 text-gray-800', icon: <User size={14} />, label: 'Free' },
    basic: { bg: 'bg-gray-200 text-gray-800', icon: <User size={14} />, label: 'Basic' },
    bronze: { bg: 'bg-amber-700/80 text-white', icon: <Award size={14} />, label: 'Bronze' },
    silver: { bg: 'bg-gray-400 text-white', icon: <Shield size={14} />, label: 'Silver' },
    gold: { bg: 'bg-amber-500 text-black', icon: <Crown size={14} />, label: 'Gold' },
    platinum: { bg: 'bg-slate-300 text-slate-900', icon: <Diamond size={14} />, label: 'Platinum' },
    diamond: { bg: 'bg-sky-300 text-sky-900', icon: <Diamond size={14} />, label: 'Diamond' },
    pro: { bg: 'bg-indigo-500 text-white', icon: <Star size={14} />, label: 'Pro' },
    vip: { bg: 'bg-purple-600 text-white', icon: <Sparkles size={14} />, label: 'VIP' },
    standard: { bg: 'bg-blue-500 text-white', icon: <Shield size={14} />, label: 'Standard' },
    premium: { bg: 'bg-purple-500 text-white', icon: <Gem size={14} />, label: 'Premium' },
    elite: { bg: 'bg-rose-500 text-white', icon: <Award size={14} />, label: 'Elite' },
    royal: { bg: 'bg-amber-600 text-white', icon: <Crown size={14} />, label: 'Royal' },
    legendary: { bg: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white', icon: <Sparkles size={14} />, label: 'Legendary' },
    founder: { bg: 'bg-gradient-to-r from-amber-500 to-yellow-300 text-black', icon: <Crown size={14} />, label: 'Founder' },
    plus: { bg: 'bg-green-500 text-white', icon: <Coins size={14} />, label: 'Plus' }
  };

  const teamBadges: Record<string, { bg: string; icon: React.ReactNode; label: string }> = {
    red: { bg: 'bg-red-500 text-white', icon: <Shield size={14} className="text-white" />, label: 'Red' },
    green: { bg: 'bg-green-500 text-white', icon: <Shield size={14} className="text-white" />, label: 'Green' },
    blue: { bg: 'bg-blue-500 text-white', icon: <Shield size={14} className="text-white" />, label: 'Blue' },
    gold: { bg: 'bg-amber-500 text-black', icon: <Shield size={14} className="text-black" />, label: 'Gold' },
    purple: { bg: 'bg-purple-500 text-white', icon: <Shield size={14} className="text-white" />, label: 'Purple' },
    none: { bg: 'bg-gray-400 text-white', icon: <Shield size={14} className="text-white" />, label: 'None' },
    neutral: { bg: 'bg-gray-300 text-gray-800', icon: <Shield size={14} className="text-gray-800" />, label: 'Neutral' }
  };

  const getBadgeDetails = () => {
    if (type === 'tier') {
      return tierBadges[value as string] || tierBadges.basic;
    } else if (type === 'team') {
      return teamBadges[value as string] || teamBadges.none;
    }
    return { bg: 'bg-gray-500 text-white', icon: <User size={14} />, label: 'Unknown' };
  };

  const { bg, icon, label } = getBadgeDetails();

  return (
    <Badge className={cn('font-medium flex items-center gap-1', bg, sizeClasses[size], className)}>
      {icon}
      {showLabel && <span>{label}</span>}
    </Badge>
  );
};

export default UserBadge;
