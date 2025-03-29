
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const TeamStandings: React.FC = () => {
  const teams = [
    { name: 'red', label: 'Red Team', members: 245, totalSpent: 12500, color: 'text-red-500' },
    { name: 'blue', label: 'Blue Team', members: 210, totalSpent: 10800, color: 'text-blue-500' },
    { name: 'green', label: 'Green Team', members: 180, totalSpent: 9200, color: 'text-green-500' }
  ];
  
  const maxSpent = Math.max(...teams.map(team => team.totalSpent));
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Team Standings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teams.map(team => (
            <div key={team.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className={`font-medium ${team.color}`}>{team.label}</span>
                <span className="text-sm">${team.totalSpent.toLocaleString()}</span>
              </div>
              <Progress 
                value={(team.totalSpent / maxSpent) * 100} 
                className={`h-2 ${
                  team.name === 'red' ? 'bg-red-900/50' : 
                  team.name === 'blue' ? 'bg-blue-900/50' : 
                  'bg-green-900/50'
                }`}
                indicatorClassName={
                  team.name === 'red' ? 'bg-red-500' : 
                  team.name === 'blue' ? 'bg-blue-500' : 
                  'bg-green-500'
                }
              />
              <div className="text-xs text-white/60 text-right">
                {team.members} members
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamStandings;
