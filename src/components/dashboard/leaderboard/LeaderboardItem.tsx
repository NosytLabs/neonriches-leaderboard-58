
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; 
import { Shield, MoreVertical, Crown } from 'lucide-react';
import { TeamColor } from '@/types/user-consolidated';
import { LeaderboardUser } from '@/types/leaderboard';

// Helper function to convert any team value to a safe team color
const asTeamColor = (team: TeamColor | string | null): TeamColor => {
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  if (team && validTeams.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  return 'neutral';
};

interface LeaderboardItemProps {
  userData: LeaderboardUser;
  index: number;
  currentUserId?: string;
  isOnCooldown?: boolean;
  onProfileClick: (userId: string) => void;
  onShameUser: (user: LeaderboardUser, type?: string) => void;
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  userData,
  index,
  currentUserId,
  isOnCooldown = false,
  onProfileClick,
  onShameUser
}) => {
  // Handle rank styling with increase/decrease indicators
  const getRankChange = () => {
    if (!userData.previousRank) return null;
    
    const change = userData.previousRank - userData.rank;
    
    if (change > 0) {
      return <span className="text-green-500 text-xs">↑{change}</span>;
    } else if (change < 0) {
      return <span className="text-red-500 text-xs">↓{Math.abs(change)}</span>;
    }
    return <span className="text-gray-500 text-xs">-</span>;
  };
  
  const safeTeamColor = asTeamColor(userData.team as string);
  
  return (
    <div className={`relative flex items-center justify-between p-3 mb-2 rounded-lg 
      ${userData.id === currentUserId ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'} 
      ${index === 0 ? 'border border-yellow-500/30' : ''}`}
    >
      {/* Rank */}
      <div className="flex items-center mr-2 w-12">
        <div className="text-lg font-bold mr-1">#{userData.rank}</div>
        <div>{getRankChange()}</div>
      </div>
      
      {/* User Info */}
      <div className="flex-1 flex items-center" onClick={() => onProfileClick(userData.id)}>
        <Avatar className="h-10 w-10 mr-3">
          <AvatarImage src={userData.profileImage} />
          <AvatarFallback className={`bg-${safeTeamColor}-900/30`}>
            {userData.username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <div className="font-medium flex items-center">
            {userData.displayName || userData.username}
            {index === 0 && <Crown className="ml-1 h-3 w-3 text-yellow-500" />}
          </div>
          <div className="text-xs text-gray-400">
            ${userData.totalSpent.toLocaleString()}
          </div>
        </div>
        
        {/* Protected Shield */}
        {userData.isProtected && (
          <Shield className="h-4 w-4 ml-2 text-blue-400" />
        )}
      </div>
      
      {/* Actions */}
      <div className="flex items-center">
        <button 
          className="p-1 hover:bg-white/10 rounded"
          onClick={() => onShameUser(userData)}
          disabled={userData.id === currentUserId || isOnCooldown}
        >
          <MoreVertical className="h-4 w-4 text-gray-400" />
        </button>
      </div>
      
      {/* Team indicator */}
      {userData.team && (
        <div 
          className={`absolute top-0 right-0 h-1 w-1/4 rounded-tr-lg bg-${safeTeamColor}-500/50`}
        />
      )}
    </div>
  );
};

export default LeaderboardItem;
