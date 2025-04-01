
import React from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { TeamColor } from '@/types/user-consolidated';

interface TeamBadgeProps {
  team: TeamColor | string | null;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
  showName?: boolean; // Added this prop to fix errors in consuming components
}

/**
 * A badge component for displaying team affiliation
 */
const TeamBadge: React.FC<TeamBadgeProps> = ({ 
  team, 
  size = 'md', 
  showLabel = true,
  className = '',
  showName = true // Default to true for backwards compatibility
}) => {
  if (!team || team === 'none' || team === 'neutral') {
    return null;
  }
  
  // Normalize the team value
  const normalizedTeam = String(team).toLowerCase() as TeamColor;
  
  // Get badge styles based on team
  const getBadgeColor = () => {
    switch (normalizedTeam) {
      case 'red':
        return 'bg-red-600 hover:bg-red-700 text-white';
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'green':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'gold':
        return 'bg-yellow-500 hover:bg-yellow-600 text-black';
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-700 text-white';
      case 'silver':
        return 'bg-gray-300 hover:bg-gray-400 text-gray-800';
      case 'bronze':
        return 'bg-amber-600 hover:bg-amber-700 text-white';
      default:
        return 'bg-gray-600 hover:bg-gray-700 text-white';
    }
  };
  
  // Get team display name
  const getTeamName = (teamColor: TeamColor | string): string => {
    const teamNames: Record<string, string> = {
      red: 'Red Crown',
      blue: 'Blue Legion',
      green: 'Green Order',
      gold: 'Gold Dynasty',
      purple: 'Purple Realm',
      none: '',
      neutral: '',
      silver: 'Silver Alliance',
      bronze: 'Bronze Brigade'
    };
    
    return teamNames[teamColor] || teamColor;
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1'
  };
  
  return (
    <Badge 
      className={cn(
        getBadgeColor(),
        sizeClasses[size],
        className
      )}
      variant="default"
    >
      {(showLabel || showName) ? getTeamName(normalizedTeam) : ''}
    </Badge>
  );
};

export default TeamBadge;
