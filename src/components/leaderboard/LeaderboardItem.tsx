
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LeaderboardUser } from './LeaderboardUtils';
import { cn } from '@/lib/utils';
import { Crown, Flame, Shield, Target } from 'lucide-react';
import ProfileBoostedContent from '@/components/ui/ProfileBoostedContent';
import { getTeamColor } from '@/utils/teamUtils';

interface LeaderboardItemProps {
  userData: LeaderboardUser;
  index: number;
  currentUserId?: string;
  isOnCooldown?: boolean;
  onProfileClick: (userId: string) => void;
  onShameUser: (user: LeaderboardUser) => void;
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
  const rankingColor = index === 0 ? 'text-royal-gold' : index === 1 ? 'text-gray-300' : index === 2 ? 'text-amber-600' : 'text-white/70';
  const teamColor = getTeamColor(userData.team);
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <ProfileBoostedContent user={userData} type="card" className="mb-2">
      <div 
        className={cn(
          "relative flex items-center justify-between rounded-lg p-3 transition-all duration-300",
          isCurrentUser ? "glass-morphism-highlight border-royal-gold/30" : "glass-morphism-subtle border-white/5",
        )}
      >
        {/* Ranking Number */}
        <div className={cn("font-mono font-bold text-lg w-10 text-center mr-1", rankingColor)}>
          #{userData.rank}
        </div>
        
        {/* User info */}
        <div className="flex items-center flex-grow">
          <Avatar className="h-9 w-9 border border-white/10">
            <AvatarImage src={userData.avatarUrl} alt={userData.username} />
            <AvatarFallback className="bg-royal-purple-light/20">
              {getInitials(userData.username)}
            </AvatarFallback>
          </Avatar>
          
          <div className="ml-3 flex-grow">
            <div className="flex items-center">
              <button 
                onClick={() => onProfileClick(userData.id)}
                className="text-sm font-medium hover:text-royal-gold transition-colors"
              >
                {userData.username}
              </button>
              
              {userData.tier === 'royal' && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Crown className="h-3.5 w-3.5 ml-1.5 text-royal-gold" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Royal Tier Member</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              
              {userData.tier === 'premium' && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Sparkles className="h-3.5 w-3.5 ml-1.5 text-royal-purple-light" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Premium Tier Member</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
              
              {userData.team && (
                <Badge 
                  variant="outline" 
                  className={cn(
                    "ml-2 py-0 px-1.5 h-4 text-[10px]", 
                    teamColor
                  )}
                >
                  <Shield className="h-2.5 w-2.5 mr-0.5" />
                  TEAM {userData.team.toUpperCase()}
                </Badge>
              )}
            </div>
            
            <div className="text-xs text-white/50 mt-0.5">
              Spent: ${userData.amountSpent.toLocaleString()}
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center gap-1">
          {!isCurrentUser && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-royal-crimson hover:bg-royal-crimson/10 hover:text-royal-crimson-bright"
              onClick={() => onShameUser(userData)}
              disabled={isOnCooldown}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Flame className="h-4 w-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mock this noble</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Button>
          )}
          
          <Link to={`/profile/${userData.username}`}>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-royal-gold hover:bg-royal-gold/10"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Target className="h-4 w-4" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View profile</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Button>
          </Link>
        </div>
      </div>
    </ProfileBoostedContent>
  );
};

export default LeaderboardItem;
