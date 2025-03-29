
import React from 'react';
import { cn } from '@/lib/utils';
import { UserTier, TeamType } from '@/contexts/auth/types';
import { Icon } from '@/components/ui/icon';

interface UserBadgeProps {
  tier?: UserTier;
  team?: TeamType;
  isVIP?: boolean;
  isDonor?: boolean;
  isMVP?: boolean;
  isFounder?: boolean;
  showLabel?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

const UserBadge: React.FC<UserBadgeProps> = ({
  tier,
  team,
  isVIP = false,
  isDonor = false,
  isMVP = false,
  isFounder = false,
  showLabel = true,
  size = 'md',
  className
}) => {
  const sizeClasses = {
    xs: 'h-5 text-xs',
    sm: 'h-6 text-xs',
    md: 'h-7 text-sm',
    lg: 'h-8 text-base',
  };

  const getBadgeForTier = () => {
    const badges: Record<UserTier, { bg: string, icon: React.ReactNode, label: string }> = {
      'free': {
        bg: 'bg-neutral-600',
        icon: <Icon name="User" size="xs" />,
        label: 'Free'
      },
      'bronze': {
        bg: 'bg-gradient-to-r from-amber-700 to-amber-600',
        icon: <Icon name="trophy" size="xs" />,
        label: 'Bronze'
      },
      'silver': {
        bg: 'bg-gradient-to-r from-gray-400 to-gray-300',
        icon: <Icon name="trophy" size="xs" />,
        label: 'Silver'
      },
      'gold': {
        bg: 'bg-gradient-to-r from-yellow-600 to-yellow-500',
        icon: <Icon name="crown" size="xs" />,
        label: 'Gold'
      },
      'platinum': {
        bg: 'bg-gradient-to-r from-blue-600 to-cyan-500',
        icon: <Icon name="crown" size="xs" />,
        label: 'Platinum'
      },
      'pro': {
        bg: 'bg-gradient-to-r from-purple-600 to-indigo-500',
        icon: <Icon name="diamond" size="xs" />,
        label: 'Pro'
      }
    };

    if (!tier) return null;
    const badge = badges[tier];

    return (
      <div className={cn(
        'flex items-center px-2 rounded-full',
        badge.bg,
        'text-white',
        'shadow-sm',
        sizeClasses[size],
        'border border-white/20'
      )}>
        {badge.icon}
        {showLabel && <span className="ml-1 font-medium">{badge.label}</span>}
      </div>
    );
  };

  const getTeamBadge = () => {
    if (!team || team === 'none') return null;

    const badges: Record<TeamType, { bg: string, icon: React.ReactNode, label: string }> = {
      'red': {
        bg: 'bg-gradient-to-r from-red-600 to-red-500',
        icon: <Icon name="Flame" size="xs" />,
        label: 'Red'
      },
      'green': {
        bg: 'bg-gradient-to-r from-green-600 to-green-500',
        icon: <Icon name="Leaf" size="xs" />,
        label: 'Green'
      },
      'blue': {
        bg: 'bg-gradient-to-r from-blue-600 to-blue-500',
        icon: <Icon name="Droplets" size="xs" />,
        label: 'Blue'
      },
      'none': {
        bg: 'bg-gray-600',
        icon: <Icon name="User" size="xs" />,
        label: 'None'
      }
    };

    const badge = badges[team];

    return (
      <div className={cn(
        'flex items-center px-2 rounded-full',
        badge.bg,
        'text-white',
        'shadow-sm',
        sizeClasses[size],
        'border border-white/20'
      )}>
        {badge.icon}
        {showLabel && <span className="ml-1 font-medium">{badge.label}</span>}
      </div>
    );
  };

  const getSpecialBadges = () => {
    const badges = [];

    if (isVIP) {
      badges.push(
        <div key="vip" className={cn(
          'flex items-center px-2 rounded-full',
          'bg-gradient-to-r from-purple-600 to-pink-500',
          'text-white shadow-sm',
          sizeClasses[size],
          'border border-white/20'
        )}>
          <Icon name="Star" size="xs" />
          {showLabel && <span className="ml-1 font-medium">VIP</span>}
        </div>
      );
    }

    if (isDonor) {
      badges.push(
        <div key="donor" className={cn(
          'flex items-center px-2 rounded-full',
          'bg-gradient-to-r from-yellow-500 to-amber-400',
          'text-white shadow-sm',
          sizeClasses[size],
          'border border-white/20'
        )}>
          <Icon name="Heart" size="xs" />
          {showLabel && <span className="ml-1 font-medium">Donor</span>}
        </div>
      );
    }

    if (isMVP) {
      badges.push(
        <div key="mvp" className={cn(
          'flex items-center px-2 rounded-full',
          'bg-gradient-to-r from-indigo-500 to-violet-500',
          'text-white shadow-sm',
          sizeClasses[size],
          'border border-white/20'
        )}>
          <Icon name="Medal" size="xs" />
          {showLabel && <span className="ml-1 font-medium">MVP</span>}
        </div>
      );
    }

    if (isFounder) {
      badges.push(
        <div key="founder" className={cn(
          'flex items-center px-2 rounded-full',
          'bg-gradient-to-r from-rose-500 to-red-500',
          'text-white shadow-sm',
          sizeClasses[size],
          'border border-white/20'
        )}>
          <Icon name="Crown" size="xs" />
          {showLabel && <span className="ml-1 font-medium">Founder</span>}
        </div>
      );
    }

    return badges;
  };

  return (
    <div className={cn('flex flex-wrap gap-1', className)}>
      {getBadgeForTier()}
      {getTeamBadge()}
      {getSpecialBadges()}
    </div>
  );
};

export default UserBadge;
