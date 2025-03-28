import React from 'react';
import { UserProfile } from '@/types/user';

interface LeaderboardTableProps {
  leaderboardData: UserProfile[];
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ leaderboardData }) => {
  
  const getTeamBadge = (team: string | null) => {
    if (!team) return null;
    
    const teamColors = {
      red: 'text-team-red border-team-red bg-team-red/10',
      green: 'text-team-green border-team-green bg-team-green/10',
      blue: 'text-team-blue border-team-blue bg-team-blue/10'
    };
    
    const teamIcons = {
      red: '🔥',
      green: '⚡',
      blue: '💧'
    };
    
    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${teamColors[team as keyof typeof teamColors]}`}>
        {teamIcons[team as keyof typeof teamIcons]} Team {team.charAt(0).toUpperCase() + team.slice(1)}
      </span>
    );
  };
  
  // Render method
  return (
    <div className="relative overflow-x-auto sm:rounded-lg p-2">
      <table className="w-full text-sm text-left text-white">
        <thead className="text-xs text-white/70 uppercase bg-black/20">
          <tr>
            <th scope="col" className="px-4 py-3">Rank</th>
            <th scope="col" className="px-4 py-3">User</th>
            <th scope="col" className="px-4 py-3 hidden md:table-cell">Team</th>
            <th scope="col" className="px-4 py-3">Amount Spent</th>
            <th scope="col" className="px-4 py-3">Title</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={user.id} className="glass-item hover:bg-white/5 transition-colors">
              <td className="px-4 py-4">{user.rank}</td>
              <td className="px-4 py-4 font-medium whitespace-nowrap">
                <div className="flex items-center">
                  <img src={user.profileImage} alt={user.username} className="w-8 h-8 rounded-full mr-2" />
                  {user.username}
                </div>
              </td>
              <td className="px-4 py-4 hidden md:table-cell">
                {user.team ? getTeamBadge(user.team) : <span className="text-white/30">-</span>}
              </td>
              <td className="px-4 py-4">${user.amountSpent}</td>
              <td className="px-4 py-4">{user.activeTitle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
