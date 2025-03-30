
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RankProgressChartProps {
  // Add props as needed
}

const mockData = [
  { day: '1 May', rank: 10 },
  { day: '3 May', rank: 9 },
  { day: '5 May', rank: 7 },
  { day: '7 May', rank: 8 },
  { day: '9 May', rank: 6 },
  { day: '11 May', rank: 5 },
  { day: '13 May', rank: 4 },
  { day: '15 May', rank: 3 },
  { day: '17 May', rank: 3 },
  { day: '19 May', rank: 2 },
  { day: '21 May', rank: 2 },
  { day: '23 May', rank: 1 },
];

const RankProgressChart: React.FC<RankProgressChartProps> = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={mockData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="rankProgress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffd700" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ffd700" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />
        <XAxis 
          dataKey="day" 
          stroke="#fff" 
          opacity={0.5} 
          tick={{ fontSize: 12 }} 
        />
        <YAxis 
          stroke="#fff" 
          opacity={0.5} 
          tick={{ fontSize: 12 }} 
          domain={['dataMin', 'dataMax']}
          reversed={true} // Higher rank = better (rank 1 is best)
          allowDecimals={false}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.8)', 
            borderColor: 'rgba(255, 215, 0, 0.5)',
            color: 'white' 
          }} 
          itemStyle={{ color: '#ffd700' }}
          labelStyle={{ color: 'white' }}
        />
        <Area 
          type="monotone" 
          dataKey="rank" 
          stroke="#ffd700" 
          fillOpacity={1} 
          fill="url(#rankProgress)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RankProgressChart;
