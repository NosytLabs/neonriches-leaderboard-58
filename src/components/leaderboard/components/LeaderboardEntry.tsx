
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown, Crown, Shield, Zap } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { getTeamColor } from '@/utils/teamUtils';

interface LeaderboardEntryProps {
  rank: number;
  previousRank?: number;
  username: string;
  displayName?: string;
  avatarUrl?: string;
  team?: string;
  tier?: string;
  amount: number;
  isVIP?: boolean;
  isProtected?: boolean;
  onClick?: () => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  rank,
  previousRank,
  username,
  displayName,
  avatarUrl,
  team,
  tier,
  amount,
  isVIP,
  isProtected,
  onClick
}) => {
  const rankChange = previousRank ? previousRank - rank : 0;
  const formattedAmount = formatCurrency(amount);
  
  const getPositionChangeColor = () => {
    if (!previousRank || previousRank === rank) return 'text-white/60';
    if (rankChange > 0) return 'text-green-500';
    return 'text-red-500';
  };
  
  const getTeamBadgeColor = () => {
    if (!team) return 'bg-white/10 text-white/70';
    
    switch (team.toLowerCase()) {
      case 'red': return 'bg-red-500/20 text-red-400';
      case 'blue': return 'bg-blue-500/20 text-blue-400';
      case 'green': return 'bg-green-500/20 text-green-400';
      case 'gold': return 'bg-yellow-500/20 text-yellow-400';
      case 'purple': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-white/10 text-white/70';
    }
  };
  
  const getTierBadgeColor = () => {
    if (!tier) return 'bg-white/10 text-white/70';
    
    switch (tier.toLowerCase()) {
      case 'royal': return 'bg-royal-gold/20 text-royal-gold';
      case 'premium': return 'bg-blue-500/20 text-blue-400';
      case 'basic': return 'bg-white/10 text-white/70';
      case 'founder': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-white/10 text-white/70';
    }
  };
  
  return (
    <div 
      className="flex items-center p-3 bg-black/20 rounded-md border border-white/10 hover:bg-black/30 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-1 w-14">
        <span className="font-bold text-lg">{rank}</span>
        {rankChange !== 0 && (
          <div className={`flex items-center text-xs ${getPositionChangeColor()}`}>
            {rankChange > 0 ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            <span>{Math.abs(rankChange)}</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center flex-1">
        <Avatar className="h-10 w-10 mr-3 border border-white/20">
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>{displayName?.charAt(0) || username.charAt(0)}</AvatarFallback>
        </Avatar>
        
        <div>
          <div className="flex items-center">
            <span className="font-medium">{displayName || username}</span>
            {isVIP && (
              <Crown className="h-3 w-3 ml-1 text-royal-gold" />
            )}
            {isProtected && (
              <Shield className="h-3 w-3 ml-1 text-royal-gold" />
            )}
          </div>
          
          <div className="flex items-center text-xs text-white/60">
            <span>@{username}</span>
            {team && (
              <>
                <span className="mx-1">•</span>
                <Badge variant="outline" className={`text-xs py-0 h-4 px-1.5 ${getTeamBadgeColor()}`}>
                  {team}
                </Badge>
              </>
            )}
            {tier && (
              <>
                <span className="mx-1">•</span>
                <Badge variant="outline" className={`text-xs py-0 h-4 px-1.5 ${getTierBadgeColor()}`}>
                  {tier}
                </Badge>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <div className="font-bold">{formattedAmount}</div>
      </div>
    </div>
  );
};

export default LeaderboardEntry;
