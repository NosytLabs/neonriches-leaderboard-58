
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Users, ArrowUp, ArrowDown, DollarSign, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTeamColor, getTeamName } from './TeamUtils';
import { useToast } from '@/hooks/use-toast';
import useNotificationSounds from '@/hooks/use-notification-sounds';
import { UserProfile } from '@/types/user';

interface LeaderboardTableProps {
  users: UserProfile[];
  currentFilter?: string | null;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ 
  users,
  currentFilter 
}) => {
  const navigate = useNavigate();
  const { playSound } = useNotificationSounds();
  const { toast } = useToast();

  const handleProfileClick = (user: UserProfile) => {
    // Navigate to the user's profile page
    playSound('click');
    navigate(`/profile/${user.username}`);
    toast({
      title: "Royal Intelligence",
      description: `Spying on the noble ${user.displayName || user.username}'s profile. How scandalous!`,
      duration: 3000,
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-white/10">
          <tr className="text-xs text-white/50 uppercase">
            <th className="px-4 py-3 text-left">Rank</th>
            <th className="px-4 py-3 text-left">Noble</th>
            <th className="px-4 py-3 text-center">House</th>
            <th className="px-4 py-3 text-right">Royal Tribute</th>
            <th className="px-4 py-3 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const rankChange = user.previousRank ? user.previousRank - user.rank : 0;
            const teamColor = getTeamColor(user.team as string);
            const teamName = getTeamName(user.team as string);
            
            return (
              <tr 
                key={user.id}
                className={cn(
                  "border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer",
                  index < 3 ? "hover:bg-royal-gold/10" : ""
                )}
                onClick={() => handleProfileClick(user)}
              >
                {/* Rank Column */}
                <td className="px-4 py-4 text-left">
                  <div className="flex items-center">
                    {index === 0 && (
                      <Crown className="h-5 w-5 text-royal-gold mr-2 animate-crown-glow" />
                    )}
                    <span className={cn(
                      "font-bold",
                      index === 0 ? "text-royal-gold" : 
                      index === 1 ? "text-white/90" :
                      index === 2 ? "text-white/80" : 
                      "text-white/70"
                    )}>
                      #{user.rank}
                    </span>
                    
                    {rankChange !== 0 && (
                      <span className={cn(
                        "ml-2 text-xs flex items-center",
                        rankChange > 0 ? "text-green-500" : "text-red-500"
                      )}>
                        {rankChange > 0 ? (
                          <ArrowUp className="h-3 w-3 mr-0.5" />
                        ) : (
                          <ArrowDown className="h-3 w-3 mr-0.5" />
                        )}
                        {Math.abs(rankChange)}
                      </span>
                    )}
                  </div>
                </td>
                
                {/* User Column */}
                <td className="px-4 py-3 text-left">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-white/10 mr-2 overflow-hidden flex items-center justify-center border-2 border-transparent" style={{ borderColor: user.isVIP ? '#FFD700' : 'transparent' }}>
                      {user.profileImage ? (
                        <img src={user.profileImage} alt={user.username} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-sm font-bold">{user.username.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{user.displayName || user.username}</div>
                      <div className="text-xs text-white/50">Joined {new Date(user.joinDate || user.joinedAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </td>
                
                {/* Team Column */}
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <div className={cn(
                      "h-5 w-5 rounded-full flex items-center justify-center mr-1",
                      `bg-team-${user.team}`
                    )}>
                      <Users className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs">{teamName}</span>
                  </div>
                </td>
                
                {/* Amount Spent Column */}
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end">
                    <DollarSign className="h-4 w-4 text-royal-gold mr-0.5" />
                    <span className="font-mono">{user.amountSpent?.toLocaleString() || user.spentAmount?.toLocaleString() || 0}</span>
                  </div>
                </td>
                
                {/* Status Column */}
                <td className="px-4 py-3 text-right">
                  {index === 0 && <span className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-1 rounded">Sovereign</span>}
                  {index === 1 && <span className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded">Regent</span>}
                  {index === 2 && <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Duke</span>}
                  {index >= 3 && index < 10 && <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">Noble</span>}
                  {index >= 10 && <span className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded">Commoner</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
