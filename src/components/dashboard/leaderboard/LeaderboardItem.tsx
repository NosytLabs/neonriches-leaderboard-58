import React from 'react';
import { User } from '@/types/user';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Crown, 
  ChevronUp, 
  ChevronDown, 
  MoreHorizontal, 
  Eye, 
  MessageSquare, 
  Flag, 
  Target 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/utils/formatters';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import { useToast } from '@/hooks/use-toast';

interface LeaderboardItemProps {
  user: User;
  rank: number;
  previousRank?: number;
  isCurrentUser?: boolean;
  onShame?: (userId: string, action: string) => void;
  onMessage?: (userId: string) => void;
  onFollow?: (userId: string) => void;
  className?: string;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ 
  user, 
  rank,
  previousRank,
  isCurrentUser = false,
  onShame,
  onMessage,
  onFollow,
  className
}) => {
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();
  const { toast } = useToast();
  
  const rankChange = previousRank ? previousRank - rank : 0;
  
  const handleViewProfile = () => {
    navigate(`/profile/${user.username}`);
  };
  
  const handleMessage = () => {
    if (!currentUser) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to message users.",
        variant: "destructive"
      });
      return;
    }
    
    if (onMessage) {
      onMessage(user.id);
    }
  };
  
  const handleShame = (action: string) => {
    if (!currentUser) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to shame users.",
        variant: "destructive"
      });
      return;
    }
    
    if (onShame) {
      onShame(user.id, action);
    }
  };
  
  const handleFollow = () => {
    if (!currentUser) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to follow users.",
        variant: "destructive"
      });
      return;
    }
    
    if (onFollow) {
      onFollow(user.id);
    }
  };
  
  return (
    <div 
      className={cn(
        "relative flex items-center p-3 rounded-lg transition-all",
        isCurrentUser ? "glass-morphism border-royal-gold/30" : "glass-morphism border-white/10 hover:border-white/20",
        className
      )}
    >
      {/* Rank */}
      <div className="flex items-center justify-center w-10 mr-3">
        <div className="text-lg font-bold">
          {rank <= 3 ? (
            <span className="flex items-center justify-center">
              <Crown 
                className={cn(
                  "h-5 w-5",
                  rank === 1 ? "text-royal-gold" : 
                  rank === 2 ? "text-gray-300" : 
                  "text-amber-600"
                )} 
              />
              {rank}
            </span>
          ) : (
            <span>{rank}</span>
          )}
        </div>
      </div>
      
      {/* Rank change indicator */}
      {rankChange !== 0 && (
        <div 
          className={cn(
            "absolute top-2 left-1 flex items-center text-xs font-medium",
            rankChange > 0 ? "text-green-500" : "text-red-500"
          )}
        >
          {rankChange > 0 ? (
            <ChevronUp className="h-3 w-3" />
          ) : (
            <ChevronDown className="h-3 w-3" />
          )}
          <span>{Math.abs(rankChange)}</span>
        </div>
      )}
      
      {/* Avatar */}
      <Avatar 
        className={cn(
          "h-10 w-10 border",
          isCurrentUser ? "border-royal-gold" : "border-white/20"
        )}
      >
        <AvatarImage src={user.profileImage} alt={user.username} />
        <AvatarFallback className="bg-royal-navy text-white">
          {user.username.substring(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      {/* User info */}
      <div className="ml-3 flex-1 min-w-0">
        <div className="flex items-center">
          <h3 className="font-medium truncate">
            {user.username}
          </h3>
          
          {user.verified && (
            <Badge variant="outline" className="ml-2 bg-blue-500/10 text-blue-400 border-blue-500/30 px-1.5 py-0">
              <Crown className="h-3 w-3 mr-1" />
              <span className="text-xs">Verified</span>
            </Badge>
          )}
          
          {user.team && (
            <Badge 
              variant="outline" 
              className={cn(
                "ml-2 px-1.5 py-0",
                user.team === 'red' ? "bg-team-red/10 text-team-red border-team-red/30" :
                user.team === 'green' ? "bg-team-green/10 text-team-green border-team-green/30" :
                "bg-team-blue/10 text-team-blue border-team-blue/30"
              )}
            >
              <span className="text-xs">{user.team}</span>
            </Badge>
          )}
        </div>
        
        <div className="flex items-center text-sm text-white/60">
          <span className="truncate">
            {formatCurrency(user.amountSpent || 0)} spent
          </span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center space-x-1">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8" 
          onClick={handleViewProfile}
        >
          <Eye className="h-4 w-4" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 glass-morphism border-white/10">
            <DropdownMenuItem onClick={handleViewProfile}>
              <Eye className="mr-2 h-4 w-4" />
              <span>View Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleMessage}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Message</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleFollow}>
              <Crown className="mr-2 h-4 w-4" />
              <span>Follow</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleShame('tomatoes')}>
              <Target className="mr-2 h-4 w-4 text-royal-crimson" />
              <span>Shame</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate(`/report/${user.id}`)}>
              <Flag className="mr-2 h-4 w-4" />
              <span>Report</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default LeaderboardItem;
