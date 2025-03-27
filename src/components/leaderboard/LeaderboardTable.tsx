import React from 'react';
import { Crown } from 'lucide-react';
import { getTeamColor, getTeamIcon, getTeamName } from './TeamUtils';

interface LeaderboardUser {
  id: number;
  username: string;
  amountSpent: number;
  rank: number;
  team: string;
  profileImage: string;
  title: string;
}

interface LeaderboardTableProps {
  leaderboardData: LeaderboardUser[];
}

const LeaderboardTable = ({ leaderboardData }: LeaderboardTableProps) => {
  return (
    <div className="max-h-[600px] overflow-y-auto scrollbar-none">
      <table className="w-full">
        <thead className="bg-gradient-to-r from-royal-purple/10 via-royal-gold/10 to-royal-blue/10">
          <tr className="text-left text-white/70 text-sm font-royal uppercase tracking-wider">
            <th className="py-4 px-6 font-medium">Position</th>
            <th className="py-4 px-6 font-medium">Noble</th>
            <th className="py-4 px-6 font-medium">Title</th>
            <th className="py-4 px-6 font-medium">Dynasty</th>
            <th className="py-4 px-6 font-medium text-right">Royal Tribute</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr 
              key={user.id} 
              className="text-left border-t border-white/5 hover:bg-white/5 transition-colors animate-fade-in relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <span className="font-mono text-xl font-bold text-white/70">#{user.rank}</span>
                  {user.rank === 1 && (
                    <div className="relative">
                      <Crown size={16} className="ml-2 text-royal-gold animate-pulse-slow" />
                      <div className="absolute -inset-2 bg-royal-gold/20 blur-sm rounded-full"></div>
                    </div>
                  )}
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full overflow-hidden border-2 border-${getTeamColor(user.team)} mr-3 ring-2 ring-${getTeamColor(user.team)}/20`}>
                    <img src={user.profileImage} alt={user.username} className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium font-royal">{user.username}</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="font-serif text-white/90">{user.title}</span>
              </td>
              <td className="py-4 px-6">
                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${getTeamColor(user.team)}/10 text-${getTeamColor(user.team)} border border-${getTeamColor(user.team)}/30`}>
                  {getTeamIcon(user.team)}
                  {getTeamName(user.team)}
                </div>
              </td>
              <td className="py-4 px-6 text-right">
                <span className="font-mono font-bold text-white">${user.amountSpent.toLocaleString()}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
