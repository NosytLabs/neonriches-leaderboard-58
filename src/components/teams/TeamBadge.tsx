
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { safeToString } from '@/utils/safeToString';

interface TeamBadgeProps {
  team: string;
  size?: 'sm' | 'md' | 'lg';
  showName?: boolean;
  className?: string;
}

const TeamBadge: React.FC<TeamBadgeProps> = ({
  team,
  size = 'md',
  showName = true,
  className = ''
}) => {
  const getTeamColor = (teamName: string) => {
    const teamColors: Record<string, string> = {
      red: 'bg-red-600 text-white',
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      gold: 'bg-yellow-600 text-white',
      purple: 'bg-purple-600 text-white',
      none: 'bg-gray-600 text-white',
      neutral: 'bg-gray-400 text-gray-900',
      silver: 'bg-gray-300 text-gray-800',
      bronze: 'bg-amber-700 text-white'
    };
    
    return teamColors[teamName.toLowerCase()] || 'bg-gray-600 text-white';
  };
  
  const getTeamName = (teamName: string) => {
    const teamNames: Record<string, string> = {
      red: 'Crimson Court',
      blue: 'Royal Navy',
      green: 'Golden Order',
      gold: 'Sovereign Gold',
      purple: 'Royal Velvet',
      none: 'Unaligned',
      neutral: 'Neutral',
      silver: 'Silver Alliance',
      bronze: 'Bronze Legion'
    };
    
    return teamNames[teamName.toLowerCase()] || 'Unknown Team';
  };
  
  const getSizeClasses = (badgeSize: string) => {
    const sizeClasses: Record<string, string> = {
      sm: 'text-xs px-1.5 py-0.5',
      md: 'text-sm px-2 py-1',
      lg: 'px-3 py-1.5'
    };
    
    return sizeClasses[badgeSize] || sizeClasses.md;
  };
  
  const safeTeam = safeToString(team, 'neutral').toLowerCase();
  const firstLetter = safeTeam.charAt(0).toUpperCase();
  const restOfName = safeTeam.slice(1);
  const formattedTeamName = firstLetter + restOfName;
  
  return (
    <Badge 
      className={`${getTeamColor(safeTeam)} ${getSizeClasses(size)} ${className}`}
    >
      {showName ? getTeamName(safeTeam) : formattedTeamName}
    </Badge>
  );
};

export default TeamBadge;
