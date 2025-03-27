
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface RankTrajectoryProps {
  data: Array<{
    day: string;
    rank: number;
  }>;
}

const RankTrajectory = ({ data }: RankTrajectoryProps) => {
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle>Rank Trajectory</CardTitle>
        <CardDescription>Your recent rank movement</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="day" stroke="#ffffff70" />
              <YAxis domain={['dataMax + 5', 'dataMin - 5']} reversed stroke="#ffffff70" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
                formatter={(value) => [`#${value}`, 'Rank']}
              />
              <Line 
                type="monotone" 
                dataKey="rank" 
                stroke="#00FF8B" 
                strokeWidth={2}
                dot={{ fill: '#00FF8B', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="text-center mt-4 text-sm text-white/70">
          <p>You've climbed <span className="font-bold text-team-green">15 ranks</span> in the past week!</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RankTrajectory;
