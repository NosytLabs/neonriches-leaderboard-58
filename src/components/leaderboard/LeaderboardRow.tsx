
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { LeaderboardUser } from '@/types/leaderboard';
import { formatCurrency } from '@/utils/formatters';
import { Crown, TrendingDown, TrendingUp } from 'lucide-react';

interface LeaderboardRowProps {
  user: LeaderboardUser;
  position: number;
  isCurrentUser: boolean;
}

const LeaderboardRow: React.FC<LeaderboardRowProps> = ({ user, position, isCurrentUser }) => {
  const rankChange = user.previousRank ? user.previousRank - position : 0;
  
  return (
    <Link 
      to={`/profile/${user.username}`} 
      className={`flex items-center p-3 rounded-md hover:bg-opacity-75 transition-colors ${
        isCurrentUser ? 'bg-royal-gold/10 hover:bg-royal-gold/20' : 'hover:bg-white/5'
      }`}
    >
      <div className="flex-shrink-0 w-8 text-center font-bold">
        {position <= 3 ? (
          <span className="text-royal-gold">
            {position === 1 ? <Crown className="h-5 w-5 mx-auto animate-crown-glow" /> : position}
          </span>
        ) : (
          <span className="text-white/70">{position}</span>
        )}
      </div>
      
      <Avatar className="h-10 w-10 mx-3 border border-white/20">
        <AvatarImage src={user.profileImage} alt={user.username} />
        <AvatarFallback>
          {user.displayName?.substring(0, 2) || user.username.substring(0, 2)}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="font-medium">{user.displayName || user.username}</span>
          {user.isVerified && (
            <Badge variant="outline" className="ml-2 h-5 px-1 bg-royal-gold/10 text-royal-gold border-royal-gold/30">
              <Crown className="h-3 w-3 mr-1" />
              <span className="text-xs">Verified</span>
            </Badge>
          )}
        </div>
        <div className="text-sm text-white/60">@{user.username}</div>
      </div>
      
      <div className="text-right">
        <div className="font-bold text-royal-gold">${formatCurrency(user.totalSpent)}</div>
        {rankChange !== 0 && (
          <div className="flex items-center text-xs justify-end">
            {rankChange > 0 ? (
              <>
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-green-500">+{rankChange}</span>
              </>
            ) : (
              <>
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-red-500">{rankChange}</span>
              </>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};

export default LeaderboardRow;
