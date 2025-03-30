
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User } from '@/types/user';
import { Crown, Shield, ChevronRight, Target } from 'lucide-react';
import { formatCurrency } from '@/utils/formatters';
import { cn } from '@/lib/utils';

interface LeaderboardEntryProps {
  user: User;
  index: number;
  currentUserId?: string;
  compact?: boolean;
  onProfileClick: (userId: string, username: string) => void;
  onShameUser?: (user: User, action: string) => void;
}

const LeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  user,
  index,
  currentUserId,
  compact = false,
  onProfileClick,
  onShameUser
}) => {
  const isCurrentUser = currentUserId === user.id;
  
  // Format the rank with proper ordinal
  const formatRank = (rank: number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const suffix = rank % 10 < 4 && Math.floor(rank / 10) !== 1 
      ? suffixes[rank % 10] 
      : suffixes[0];
    return `${rank}${suffix}`;
  };

  // Get profile color based on team
  const getTeamColor = () => {
    switch (user.team) {
      case 'red': return 'text-team-red border-team-red/30 bg-team-red/10';
      case 'green': return 'text-team-green border-team-green/30 bg-team-green/10';
      case 'blue': return 'text-team-blue border-team-blue/30 bg-team-blue/10';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  // Get tier badge style
  const getTierBadge = () => {
    switch (user.tier) {
      case 'founder':
        return <Badge variant="outline" className="bg-royal-gold/20 text-royal-gold border-royal-gold/30">Founder</Badge>;
      case 'basic':
        return <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/30">Basic</Badge>;
      default:
        return <Badge variant="outline" className="bg-gray-500/20 text-gray-400 border-gray-500/30">Free</Badge>;
    }
  };

  return (
    <div 
      className={cn(
        "py-4 px-2 flex items-center transition-colors hover:bg-white/5",
        isCurrentUser ? "bg-white/10" : ""
      )}
    >
      {/* Rank indicator */}
      <div className="flex-shrink-0 w-12 text-center">
        <span className="text-lg font-bold">#{user.rank || index + 1}</span>
      </div>
      
      {/* User info */}
      <div className="flex-grow flex items-center min-w-0">
        <Avatar 
          onClick={() => onProfileClick(user.id, user.username)}
          className={cn(
            "cursor-pointer h-10 w-10 mr-3 border-2",
            getTeamColor()
          )}
        >
          <AvatarImage src={user.profileImage} alt={user.username} />
          <AvatarFallback>{user.username.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-grow min-w-0">
          <div className="flex items-center">
            <h3 
              className="font-semibold truncate cursor-pointer hover:underline"
              onClick={() => onProfileClick(user.id, user.username)}
            >
              {user.username}
            </h3>
            {getTierBadge()}
          </div>
          
          <div className="text-sm text-gray-400">
            Total Spent: {formatCurrency(user.totalSpent || 0)}
          </div>
        </div>
      </div>
      
      {/* Actions */}
      {!compact && (
        <div className="flex-shrink-0 flex gap-1">
          {onShameUser && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onShameUser(user, 'tomatoes')}
              className="h-8 w-8 text-gray-400 hover:text-royal-crimson hover:bg-royal-crimson/10"
            >
              <Target size={16} />
            </Button>
          )}
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onProfileClick(user.id, user.username)}
            className="h-8 w-8"
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default LeaderboardEntry;
