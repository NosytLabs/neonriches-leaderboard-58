
import React from 'react';
import { Flame, Coins, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TEAM_DISPLAY_NAMES, TEAM_MOTTOS } from '@/constants/teamConstants';
import { TeamColor } from '@/types/team';

interface TeamSelectorProps {
  team: TeamColor;
  onTeamChange: (team: TeamColor) => void;
  className?: string;
  showDescription?: boolean;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({
  team,
  onTeamChange,
  className,
  showDescription = false
}) => {
  const getTeamIconAndColor = (teamColor: TeamColor) => {
    switch(teamColor) {
      case 'red': 
        return {
          icon: <Flame className="h-8 w-8 text-red-400" />,
          bgClass: 'bg-red-500/20 hover:bg-red-500/30',
          borderClass: 'border-red-500/30 hover:border-red-500/50',
          textClass: 'text-red-400'
        };
      case 'green': 
        return {
          icon: <Coins className="h-8 w-8 text-green-400" />,
          bgClass: 'bg-green-500/20 hover:bg-green-500/30',
          borderClass: 'border-green-500/30 hover:border-green-500/50',
          textClass: 'text-green-400'
        };
      case 'blue': 
        return {
          icon: <CreditCard className="h-8 w-8 text-blue-400" />,
          bgClass: 'bg-blue-500/20 hover:bg-blue-500/30',
          borderClass: 'border-blue-500/30 hover:border-blue-500/50',
          textClass: 'text-blue-400'
        };
      default:
        return {
          icon: <Flame className="h-8 w-8 text-gray-400" />,
          bgClass: 'bg-gray-500/20 hover:bg-gray-500/30',
          borderClass: 'border-gray-500/30 hover:border-gray-500/50',
          textClass: 'text-gray-400'
        };
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid grid-cols-3 gap-4">
        {(['red', 'green', 'blue'] as TeamColor[]).map((teamColor) => {
          const { icon, bgClass, borderClass, textClass } = getTeamIconAndColor(teamColor);
          const isSelected = team === teamColor;
          
          return (
            <div
              key={teamColor}
              className={cn(
                "flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-all",
                bgClass,
                borderClass,
                isSelected ? "ring-2 ring-offset-2 ring-offset-black ring-royal-gold" : ""
              )}
              onClick={() => onTeamChange(teamColor)}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                {icon}
              </div>
              <h3 className={cn("font-semibold text-sm md:text-base text-center", textClass)}>
                {TEAM_DISPLAY_NAMES[teamColor].split(' ')[0]}
              </h3>
              
              {showDescription && (
                <p className="text-xs text-center mt-2 text-white/70">
                  {TEAM_MOTTOS[teamColor] || TEAM_MOTTOS.default}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSelector;
