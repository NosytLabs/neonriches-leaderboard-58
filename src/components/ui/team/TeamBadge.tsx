
import React from 'react';
import { TeamColor } from '@/types/team';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { getTeamColor, getTeamName } from '@/utils/teamUtils';
import { toTeamColor } from '@/utils/typeConverters';

interface TeamBadgeProps {
  team: string | TeamColor;
  showName?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * TeamBadge - A reusable component for displaying team badges
 */
export const TeamBadge: React.FC<TeamBadgeProps> = ({
  team,
  showName = true,
  className,
  size = 'md'
}) => {
  // Convert to proper TeamColor type
  const teamColor = toTeamColor(team);
  
  // Get team name and color
  const teamName = getTeamName(teamColor);
  const colorClass = getTeamColor(teamColor);
  
  // Size classes
  const sizeClasses = {
    sm: 'h-5 text-xs',
    md: 'h-6 text-sm',
    lg: 'h-8 text-base'
  };
  
  return (
    <Badge
      variant="outline"
      className={cn(
        "relative overflow-hidden rounded-full",
        colorClass,
        sizeClasses[size],
        className
      )}
    >
      <span className="relative">
        {showName ? teamName : teamColor.toUpperCase()}
      </span>
    </Badge>
  );
};

export default TeamBadge;
