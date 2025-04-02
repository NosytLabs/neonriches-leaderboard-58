
import React from 'react';
import { TeamData, TeamColor } from '@/types/mockery-types';
import { addTeamId } from '@/utils/teamUtils';

interface TeamLeaderboardProps {
  teams: TeamData[];
  activeTeam?: TeamColor | null;
}

const TeamLeaderboard: React.FC<TeamLeaderboardProps> = ({ teams, activeTeam }) => {
  // Sort teams by ranking if available, or by name
  const sortedTeams = [...teams].sort((a, b) => {
    if (a.ranking !== undefined && b.ranking !== undefined) {
      return a.ranking - b.ranking;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Team Leaderboard</h2>
      
      <div className="overflow-hidden rounded-lg border border-white/10">
        <div className="bg-black/20 grid grid-cols-12 py-2 px-4 text-sm font-medium text-white/60">
          <div className="col-span-1">#</div>
          <div className="col-span-5">Team</div>
          <div className="col-span-3 text-center">Members</div>
          <div className="col-span-3 text-right">Score</div>
        </div>
        
        <div className="divide-y divide-white/10">
          {sortedTeams.map((team, index) => {
            const teamId = team.teamId || addTeamId(team.color); // Add ID if missing
            const isActive = activeTeam === team.color;
            
            let rowColorClass = '';
            if (isActive) {
              rowColorClass = 'bg-white/5';
            } else if (index % 2 === 0) {
              rowColorClass = 'bg-black/10';
            }
            
            return (
              <div 
                key={teamId}
                className={`grid grid-cols-12 py-3 px-4 ${rowColorClass} ${isActive ? 'font-medium' : ''}`}
              >
                <div className="col-span-1">{team.ranking || index + 1}</div>
                <div className="col-span-5 flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: team.color }}
                  ></div>
                  {team.name}
                  {isActive && (
                    <span className="ml-2 text-xs bg-white/10 px-1.5 py-0.5 rounded text-white/80">You</span>
                  )}
                </div>
                <div className="col-span-3 text-center">
                  {team.memberCount !== undefined ? team.memberCount.toLocaleString() : '-'}
                </div>
                <div className="col-span-3 text-right">
                  {Math.floor(Math.random() * 10000).toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamLeaderboard;
