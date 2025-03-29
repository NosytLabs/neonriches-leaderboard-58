
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Flame, TrendingUp, TrendingDown, Crown, Check, ChevronRight, DollarSign } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { User } from '@/types/user';
import { formatCurrency, formatCompactNumber } from '@/utils/formatters';
import { getTeamColor } from '@/utils/teamUtils';
import { getTierBadge } from '@/utils/tierUtils';

export interface LeaderboardUser {
  id: string;
  username: string;
  displayName?: string;
  profileImage?: string;
  rank: number;
  previousRank?: number;
  team?: 'red' | 'green' | 'blue' | null;
  tier?: string;
  totalSpent?: number;
  amountSpent?: number;
  spentAmount?: number;
  isVerified?: boolean;
  isProtected?: boolean;
}

export interface LeaderboardItemProps {
  userData: LeaderboardUser;
  index: number;
  currentUserId: string;
  isOnCooldown: boolean;
  onProfileClick: (userId: string) => void;
  onShameUser: (user: LeaderboardUser, type?: string) => void;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  userData,
  index,
  currentUserId,
  isOnCooldown,
  onProfileClick,
  onShameUser
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const isCurrentUser = userData.id === currentUserId;
  
  const {
    id,
    username,
    displayName,
    profileImage,
    rank,
    previousRank,
    team,
    tier,
    totalSpent = 0,
    amountSpent = 0,
    spentAmount = 0
  } = userData;
  
  const teamColor = getTeamColor(team);
  const actualSpentAmount = totalSpent || amountSpent || spentAmount || 0;
  
  // Rank change display
  const rankChange = previousRank !== undefined ? previousRank - rank : undefined;
  const rankDirection = rankChange ? (rankChange > 0 ? 'up' : rankChange < 0 ? 'down' : 'same') : undefined;
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleShameClick = () => {
    onShameUser(userData);
  };
  
  const handleProfileClick = () => {
    onProfileClick(id);
  };
  
  // Generate initials for avatar fallback
  const getInitials = () => {
    const nameToUse = displayName || username || 'User';
    return nameToUse.substring(0, 2).toUpperCase();
  };
  
  // Format rank for display
  const formatRank = (rank: number) => {
    return `#${rank.toLocaleString()}`;
  };
  
  return (
    <motion.div
      className={`${isCurrentUser ? 'glass-morphism border-royal-gold/30' : 'glass-morphism border-white/10'} 
        rounded-lg p-3 transition-all ${isHovered ? 'bg-black/20' : 'bg-black/10'} relative`}
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Rank indicator */}
      <div className="absolute top-3 left-3 font-semibold text-sm">
        <div className="flex items-center">
          <span className={`${index < 3 ? 'text-royal-gold' : 'text-white/70'}`}>
            {formatRank(rank)}
          </span>
          
          {rankChange !== undefined && rankDirection && (
            <div className="ml-2">
              {rankDirection === 'up' && (
                <span className="flex items-center text-emerald-500 text-xs">
                  <TrendingUp size={12} className="mr-0.5" />
                  {Math.abs(rankChange)}
                </span>
              )}
              {rankDirection === 'down' && (
                <span className="flex items-center text-red-500 text-xs">
                  <TrendingDown size={12} className="mr-0.5" />
                  {Math.abs(rankChange)}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Top spender badge */}
      {index < 3 && (
        <div className="absolute -top-2 -right-2 z-10">
          <Badge 
            className={`${index === 0 ? 'bg-royal-gold text-black' : 
                       index === 1 ? 'bg-gray-300 text-black' : 
                       'bg-amber-700 text-white'} 
                       font-bold px-2 py-1 royal-shadow`}
          >
            <Crown className="h-3 w-3 mr-1" />
            <span>{index === 0 ? 'KING' : index === 1 ? '2ND' : '3RD'}</span>
          </Badge>
        </div>
      )}
      
      <div className="flex items-center mt-3">
        {/* Avatar */}
        <Avatar 
          className="h-12 w-12 border-2 border-white/10 cursor-pointer hover:border-royal-gold/50 transition-colors"
          onClick={handleProfileClick}
        >
          <AvatarImage src={profileImage} alt={displayName || username} />
          <AvatarFallback className="bg-gradient-to-br from-gray-800 to-gray-900">
            {getInitials()}
          </AvatarFallback>
        </Avatar>
        
        <div className="ml-3 flex-grow">
          {/* Username and Verification */}
          <div className="flex items-center">
            <h3 
              className={`font-semibold ${isCurrentUser ? 'text-royal-gold' : ''} cursor-pointer hover:text-royal-gold transition-colors`}
              onClick={handleProfileClick}
            >
              {displayName || username}
            </h3>
            {userData.isVerified && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Check className="h-4 w-4 text-blue-500 ml-1" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Verified User</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          
          {/* User metadata */}
          <div className="flex items-center text-xs text-white/60 mt-1">
            <span>@{username}</span>
            
            {team && (
              <>
                <span className="mx-1">•</span>
                <span className={`font-medium ${teamColor}`}>
                  Team {team.charAt(0).toUpperCase() + team.slice(1)}
                </span>
              </>
            )}
            
            {tier && (
              <>
                <span className="mx-1">•</span>
                <span>{getTierBadge(tier)}</span>
              </>
            )}
          </div>
        </div>
        
        {/* Amount spent */}
        <div className="text-right">
          <div className="flex items-center justify-end font-semibold text-royal-gold">
            <DollarSign className="h-4 w-4 mr-0.5" />
            <span>{formatCurrency(actualSpentAmount)}</span>
          </div>
          
          {/* Action buttons */}
          <div className="mt-2 flex justify-end">
            {!isCurrentUser && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      className="h-8 w-8 bg-black/20 hover:bg-black/30 hover:text-royal-crimson"
                      onClick={handleShameClick}
                      disabled={isOnCooldown || userData.isProtected}
                    >
                      {userData.isProtected ? (
                        <Shield className="h-4 w-4 text-royal-navy" />
                      ) : (
                        <Flame className="h-4 w-4" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {userData.isProtected 
                      ? "This user is protected from mockery" 
                      : isOnCooldown 
                        ? "You're on cooldown" 
                        : "Mock this user"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 bg-black/20 hover:bg-black/30 ml-1"
              onClick={handleProfileClick}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderboardItem;
