
import React from 'react';
import { LeaderboardUser } from '@/types/leaderboard';
import { TeamColor } from '@/types/user-consolidated';

interface LeaderboardTableProps {
  users: LeaderboardUser[];
  currentUserId?: string;
}

// Helper functions that would normally be in teamUtils.ts
const getTeamColor = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'text-red-400 bg-red-500/20',
    'blue': 'text-blue-400 bg-blue-500/20',
    'green': 'text-green-400 bg-green-500/20',
    'gold': 'text-yellow-400 bg-yellow-500/20',
    'purple': 'text-purple-400 bg-purple-500/20',
    'none': 'text-gray-400 bg-gray-500/20',
    'neutral': 'text-gray-400 bg-gray-500/20'
  };
  
  return teamMap[team as string] || 'text-gray-400 bg-gray-500/20';
};

const getTeamName = (team: TeamColor | string | null): string => {
  const teamMap: Record<string, string> = {
    'red': 'Crimson',
    'blue': 'Azure',
    'green': 'Emerald',
    'gold': 'Gold',
    'purple': 'Royal',
    'none': 'Neutral',
    'neutral': 'Neutral'
  };
  
  return teamMap[team as string] || 'Neutral';
};

const asTeamColor = (team: TeamColor | string | null): TeamColor => {
  const validTeams: TeamColor[] = ['red', 'blue', 'green', 'gold', 'purple', 'none', 'neutral'];
  
  if (team && validTeams.includes(team as TeamColor)) {
    return team as TeamColor;
  }
  
  return 'neutral';
};

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ users, currentUserId }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-white/10">
            <th className="p-3">Rank</th>
            <th className="p-3">User</th>
            <th className="p-3">Team</th>
            <th className="p-3 text-right">Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr 
              key={user.id}
              className={`border-b border-white/10 ${user.id === currentUserId ? 'bg-white/5' : 'hover:bg-white/5'}`}
            >
              <td className="p-3 font-medium">#{user.rank}</td>
              <td className="p-3">
                <div className="flex items-center space-x-3">
                  {user.profileImage && (
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700">
                      <img src={user.profileImage} alt={user.username} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div>
                    <div className="font-medium">{user.displayName || user.username}</div>
                    <div className="text-sm text-gray-400">@{user.username}</div>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className={`inline-block px-2 py-1 rounded text-xs ${getTeamColor(asTeamColor(user.team as string))}`}>
                  {getTeamName(asTeamColor(user.team as string))}
                </span>
              </td>
              <td className="p-3 text-right font-medium">
                ${user.totalSpent.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
