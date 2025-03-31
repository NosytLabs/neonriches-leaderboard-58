
import React from 'react';
import { TeamColor } from '@/types/team';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import useTeam from '@/hooks/useTeam';
import { asTeamColor } from '@/components/leaderboard/TeamUtils';

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
  const teamColor = asTeamColor(team);
  const { getTeamTheme, getTeamName } = useTeam();
  
  // Get team name
  const teamName = getTeamName(teamColor);
  const theme = getTeamTheme(teamColor);
  
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
        {showName ? teamName : teamColor.toUpperCase()}
      </span>
    </Badge>
  );
};

export default TeamBadge;
