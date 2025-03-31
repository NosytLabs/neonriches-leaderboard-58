
import React from 'react';
import { TeamColor } from '@/types/team';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import useTeam from '@/hooks/useTeam';

interface TeamBadgeProps {
  team: TeamColor;
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
  const { theme, getTeamName } = useTeam();
  
  // Get team name
  const teamName = getTeamName(team);
  
  // Size classes
  const sizeClasses = {
    sm: 'h-5 text-xs',
    md: 'h-6 text-sm',
    lg: 'h-8 text-base'
  };
  
  return (
    <Badge
      className={cn(
        "relative overflow-hidden rounded-full",
        sizeClasses[size],
        className
      )}
      style={{
        backgroundColor: theme ? theme.background : undefined,
        color: theme ? theme.text : undefined,
        borderColor: theme ? theme.border : undefined
      }}
    >
      <span 
        className="absolute inset-0 opacity-20" 
        style={{ backgroundColor: theme ? theme.primary : undefined }}
      />
      <span className="relative">
        {showName ? teamName : team.toUpperCase()}
      </span>
    </Badge>
  );
};

export default TeamBadge;
