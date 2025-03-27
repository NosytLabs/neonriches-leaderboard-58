
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { User, Scroll } from 'lucide-react';
import { LeaderboardUser, getTeamColor, getTeamBorderColor, getRankIcon, getInitials } from './LeaderboardUtils';
import { ShameAction } from '@/components/events/hooks/useShameEffect';

interface LeaderboardItemProps {
  userData: LeaderboardUser;
  index: number;
  currentUserId?: string;
  isOnCooldown: boolean;
  onProfileClick: (userId: string) => void;
  onShameUser: (user: LeaderboardUser, type: ShameAction) => void;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  userData,
  index,
  currentUserId,
  isOnCooldown,
  onProfileClick,
  onShameUser
}) => {
  const isCurrentUser = userData.id === currentUserId;
  
  // Get shame count
  const getShameCount = () => {
    const userShameKey = `user_shame_count_${userData.id}`;
    return parseInt(localStorage.getItem(userShameKey) || '0');
  };
  
  const shameCount = getShameCount();
  
  // Format amount with currency symbol
  const formattedAmount = `$${userData.amountSpent.toLocaleString()}`;
  
  // Get classes based on user position
  const getPositionClass = () => {
    if (index === 0) return "border-l-royal-gold";
    if (index === 1) return "border-l-[#C0C0C0]";
    if (index === 2) return "border-l-[#CD7F32]";
    return "border-l-transparent";
  };
  
  return (
    <TooltipProvider>
      <div className={`flex items-center justify-between py-2 px-3 my-1 rounded-md hover:bg-white/5 transition-colors border-l-2 ${getPositionClass()} ${
        isCurrentUser ? 'bg-white/5' : ''
      }`}>
        <div className="flex items-center">
          <div className="flex items-center justify-center w-6 h-6 rounded-full glass-morphism border-white/10 mr-2 text-xs">
            <span>#{userData.rank}</span>
          </div>
          
          <div className="relative group">
            <div 
              className={`w-8 h-8 rounded-full glass-morphism ${getTeamBorderColor(userData.team)} flex items-center justify-center mr-2 cursor-pointer`}
              onClick={() => onProfileClick(userData.id)}
            >
              {userData.profileImage ? (
                <img src={userData.profileImage} alt={userData.username} className="w-full h-full rounded-full" />
              ) : (
                <span className={`text-sm font-medium ${getTeamColor(userData.team)}`}>
                  {getInitials(userData.username)}
                </span>
              )}
              
              {/* Show rank badge for top 3 */}
              {index < 3 && (
                <div className="absolute -top-1 -right-1 bg-background rounded-full p-0.5">
                  {getRankIcon(userData.rank)}
                </div>
              )}
            </div>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <span></span>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>View profile</p>
              </TooltipContent>
            </Tooltip>
          </div>
          
          <div>
            <div className="flex items-center">
              <span className={`font-medium text-sm ${isCurrentUser ? 'text-white' : ''}`}>
                {userData.username}
              </span>
              {userData.team && (
                <span className={`ml-2 h-2 w-2 rounded-full bg-team-${userData.team}`}></span>
              )}
              {shameCount > 0 && (
                <span className="ml-2 text-xs bg-red-500/20 px-1.5 py-0.5 rounded-full text-red-300">
                  {shameCount} {shameCount === 1 ? 'shame' : 'shames'}
                </span>
              )}
            </div>
            <div className="text-white/60 text-xs">{formattedAmount}</div>
          </div>
        </div>
        
        <div className="flex space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full hover:bg-white/10"
                onClick={() => onProfileClick(userData.id)}
              >
                <User size={14} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View profile</p>
            </TooltipContent>
          </Tooltip>
          
          {!isCurrentUser && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full hover:bg-white/10"
                  onClick={() => onShameUser(userData, 'tomatoes')}
                  disabled={isOnCooldown}
                >
                  <Scroll size={14} className={isOnCooldown ? 'text-white/30' : ''} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isOnCooldown ? 'Shaming on cooldown' : 'Public Shame'}</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
};

export default LeaderboardItem;
