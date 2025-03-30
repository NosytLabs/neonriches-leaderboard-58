
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const RankProgressChart = () => {
  // Mock data - in a real app, this would come from the API
  const data = [
    { day: 'Mon', rank: 120 },
    { day: 'Tue', rank: 115 },
    { day: 'Wed', rank: 110 },
    { day: 'Thu', rank: 105 },
    { day: 'Fri', rank: 95 },
    { day: 'Sat', rank: 88 },
    { day: 'Sun', rank: 82 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
        <XAxis 
          dataKey="day" 
          tick={{ fill: 'rgba(255, 255, 255, 0.6)' }}
        />
        <YAxis 
          tick={{ fill: 'rgba(255, 255, 255, 0.6)' }}
          domain={['dataMin - 5', 'dataMax + 5']}
          reversed
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333' }}
          labelStyle={{ color: '#fff' }}
          formatter={(value) => [`Rank #${value}`, 'Rank']}
        />
        <Line 
          type="monotone" 
          dataKey="rank" 
          stroke="#FFD700" 
          strokeWidth={2} 
          dot={{ fill: '#FFD700', strokeWidth: 2 }}
          activeDot={{ r: 8, fill: '#FFD700', stroke: '#fff' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RankProgressChart;
