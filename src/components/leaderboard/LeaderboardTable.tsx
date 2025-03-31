import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Users, ArrowUp, ArrowDown, DollarSign, Crown, Scroll } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getTeamColor, getTeamName } from './TeamUtils';
import { useToastContext } from '@/contexts/ToastContext';
import useNotificationSounds from '@/hooks/sounds/use-notification-sounds';
import { UserProfile } from '@/types/user';
import { motion } from 'framer-motion';

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
  const { addToast } = useToastContext();

  const handleProfileClick = (user: UserProfile) => {
    // Navigate to the user's profile page
    playSound('click');
    navigate(`/profile/${user.username}`);
    addToast({
      title: "Royal Intelligence",
      description: `Spying on the noble ${user.displayName || user.username}'s profile. How scandalous!`,
      duration: 3000,
    });
  };
  
  const getRankChangeText = (change: number) => {
    if (change > 5) return "Rapidly ascending the social ladder!";
    if (change > 0) return "Moving up in court society.";
    if (change < -5) return "Plummeting through the ranks!";
    if (change < 0) return "Losing favor with the Crown.";
    return "Maintaining their position.";
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
              <motion.tr 
                key={user.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                      <div className="group relative ml-2">
                        <span className={cn(
                          "text-xs flex items-center",
                          rankChange > 0 ? "text-green-500" : "text-red-500"
                        )}>
                          {rankChange > 0 ? (
                            <ArrowUp className="h-3 w-3 mr-0.5" />
                          ) : (
                            <ArrowDown className="h-3 w-3 mr-0.5" />
                          )}
                          {Math.abs(rankChange)}
                        </span>
                        
                        {/* Tooltip */}
                        <div className="absolute left-0 -bottom-12 w-40 bg-black/80 text-white text-xs p-2 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                          {getRankChangeText(rankChange)}
                        </div>
                      </div>
                    )}
                  </div>
                </td>
                
                {/* User Column */}
                <td className="px-4 py-3 text-left">
                  <div className="flex items-center">
                    <div className={cn(
                      "h-8 w-8 rounded-full bg-white/10 mr-2 overflow-hidden flex items-center justify-center",
                      user.isVIP ? "border-2 border-royal-gold" : "border-2 border-transparent"
                    )}>
                      {user.profileImage ? (
                        <img src={user.profileImage} alt={user.username} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-sm font-bold">{user.username.charAt(0).toUpperCase()}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium group relative">
                        {user.displayName || user.username}
                        
                        {/* VIP badge */}
                        {user.isVIP && (
                          <span className="ml-2 inline-flex items-center">
                            <span className="inline-block h-3 w-3 bg-royal-gold rounded-full animate-pulse-slow"></span>
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-white/50 flex items-center">
                        <Scroll className="h-3 w-3 mr-1 text-white/40" />
                        Joined {new Date(user.joinedAt || user.joinDate || "").toLocaleDateString()}
                      </div>
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
                    <span className="font-mono">{(user.amountSpent || user.spentAmount || 0).toLocaleString()}</span>
                  </div>
                </td>
                
                {/* Status Column */}
                <td className="px-4 py-3 text-right">
                  {index === 0 && (
                    <span className="text-xs bg-royal-gold/20 text-royal-gold px-2 py-1 rounded royal-shine">
                      Sovereign
                    </span>
                  )}
                  {index === 1 && (
                    <span className="text-xs bg-white/10 text-white/90 px-2 py-1 rounded">
                      Regent
                    </span>
                  )}
                  {index === 2 && (
                    <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">
                      Duke
                    </span>
                  )}
                  {index >= 3 && index < 10 && (
                    <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded">
                      Noble
                    </span>
                  )}
                  {index >= 10 && (
                    <span className="text-xs bg-white/5 text-white/60 px-2 py-1 rounded">
                      Commoner
                    </span>
                  )}
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
