import React from 'react';
import { LeaderboardUser } from '@/types/leaderboard';
import { getTeamColorClass, getTeamDisplayName, asTeamColor } from '@/utils/teamUtils';

interface LeaderboardTableProps {
  users: LeaderboardUser[];
  currentUserId?: string;
}

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
                <span className={`inline-block px-2 py-1 rounded text-xs ${getTeamColorClass(user.team)}`}>
                  {getTeamDisplayName(asTeamColor(user.team))}
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
