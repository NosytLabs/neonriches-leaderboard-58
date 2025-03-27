
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Eye, Heart, Ban } from 'lucide-react';
import { LeaderboardUser, getTeamBorderColor, getTeamColor, getGenderTitle, getGenderEmoji, getInitials, getRankIcon } from './LeaderboardUtils';

interface LeaderboardItemProps {
  userData: LeaderboardUser;
  index: number;
  currentUserId?: string;
  isPokeCooldown: boolean;
  onProfileClick: (userId: string) => void;
  onPokeUser: (user: LeaderboardUser) => void;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  userData,
  index,
  currentUserId,
  isPokeCooldown,
  onProfileClick,
  onPokeUser
}) => {
  return (
    <div 
      className={`flex items-center justify-between p-3 rounded-lg mb-2 animate-fade-in ${
        index % 2 === 0 ? 'bg-white/5' : ''
      } hover:bg-white/10 transition-colors`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center space-x-3">
        <div className="flex flex-col items-center justify-center w-8">
          <span className="text-lg font-bold">{userData.rank}</span>
          {getRankIcon(userData.rank)}
        </div>
        
        <Avatar className={`border-2 ${userData.team ? getTeamBorderColor(userData.team) : 'border-white/20'}`}>
          <AvatarImage src={userData.profileImage} alt={userData.username} />
          <AvatarFallback>{getInitials(userData.username)}</AvatarFallback>
        </Avatar>
        
        <div>
          <div className="font-medium flex items-center">
            {userData.username}
            {index < 3 && <div className="ml-1.5">{getGenderEmoji(userData.gender)}</div>}
          </div>
          <div className={`text-xs ${getTeamColor(userData.team)}`}>
            {getGenderTitle(userData.gender || null)}
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="text-right mr-4">
          <div className="font-mono font-bold">${userData.amountSpent}</div>
          <div className="text-xs text-white/50">Total Spent</div>
        </div>
        
        <div className="flex space-x-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
            onClick={() => onProfileClick(userData.id)}
          >
            <Eye size={14} />
          </Button>
          
          {currentUserId !== userData.id && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
              onClick={() => onPokeUser(userData)}
              disabled={isPokeCooldown}
            >
              {isPokeCooldown ? (
                <Ban size={14} className="text-white/40" />
              ) : (
                <Heart size={14} className="text-team-red" />
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardItem;
