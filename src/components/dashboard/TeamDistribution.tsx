
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface TeamDistributionProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
}

const TeamDistribution = ({ data }: TeamDistributionProps) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Team Distribution</CardTitle>
        <CardDescription>Overall team contribution</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
                formatter={(value) => [`${value}%`, 'Contribution']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
          {data.map((team, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-1"
                style={{ backgroundColor: team.color }}
              ></div>
              <span className="text-sm text-white/70">{team.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamDistribution;
