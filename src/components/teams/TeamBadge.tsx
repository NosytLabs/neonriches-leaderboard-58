
import React from 'react';
import { cn } from '@/lib/utils';
import { TeamColor } from '@/types/team';
import { Crown, ShieldAlert, Sword, Star, Gem, Users } from 'lucide-react';

interface TeamBadgeProps {
  team: TeamColor;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
  className?: string;
}

const TeamBadge: React.FC<TeamBadgeProps> = ({ 
  team, 
  size = 'md', 
  showName = false,
  className
}) => {
  const getTeamIcon = () => {
    switch (team) {
      case 'red':
        return <Sword className={iconClasses} />;
      case 'blue':
        return <ShieldAlert className={iconClasses} />;
      case 'green':
        return <Star className={iconClasses} />;
      case 'gold':
        return <Crown className={iconClasses} />;
      case 'purple':
        return <Gem className={iconClasses} />;
      default:
        return <Users className={iconClasses} />;
    }
  };
  
  const getTeamName = () => {
    switch (team) {
      case 'red':
        return 'Crimson Knights';
      case 'blue':
        return 'Azure Guardians';
      case 'green':
        return 'Emerald Seekers';
      case 'gold':
        return 'Golden Crown';
      case 'purple':
        return 'Royal Purple';
      case 'none':
      case 'neutral':
        return 'Unaligned';
      default:
        return team.charAt(0).toUpperCase() + team.slice(1);
    }
  };
  
  const getTeamColor = () => {
    switch (team) {
      case 'red':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'blue':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'green':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'gold':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'purple':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  const sizeClasses = {
    sm: 'h-6 px-2 text-xs',
    md: 'h-8 px-3 text-sm',
    lg: 'h-10 px-4 text-base'
  };
  
  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };
  
  const iconClasses = iconSizes[size];
  
  return (
    <div 
      className={cn(
        'flex items-center rounded-full border',
        getTeamColor(),
        sizeClasses[size],
        className
      )}
    >
      {getTeamIcon()}
      {showName && <span className="ml-1.5">{getTeamName()}</span>}
    </div>
  );
};

export default TeamBadge;
