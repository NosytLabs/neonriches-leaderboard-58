
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '@/hooks/useAuth';

// Mock data - in a real app, this would come from an API
const generateMockData = (count: number, startRank: number) => {
  const data = [];
  let currentRank = startRank;
  
  for (let i = 0; i < count; i++) {
    // Simulate rank improvement (lower number is better)
    currentRank = Math.max(1, currentRank - Math.floor(Math.random() * 3));
    
    data.push({
      date: new Date(Date.now() - (count - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      rank: currentRank
    });
  }
  
  return data;
};

const RankProgressChart: React.FC = () => {
  const { user } = useAuth();
  const [data, setData] = React.useState<{ date: string; rank: number }[]>([]);
  
  React.useEffect(() => {
    if (user) {
      const startRank = user.rank ? user.rank + 10 : 100;
      setData(generateMockData(14, startRank));
    }
  }, [user]);
  
  if (!user) return null;
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis 
          dataKey="date" 
          stroke="rgba(255,255,255,0.5)"
          tickFormatter={(value) => {
            const date = new Date(value);
            return `${date.getDate()}/${date.getMonth() + 1}`;
          }}
        />
        <YAxis 
          stroke="rgba(255,255,255,0.5)" 
          reversed={true} 
          domain={[1, 'dataMax']}
          label={{ 
            value: 'Rank', 
            angle: -90, 
            position: 'insideLeft',
            style: { fill: 'rgba(255,255,255,0.7)' }
          }}
        />
        <Tooltip 
          formatter={(value) => [`Rank ${value}`, 'Rank']}
          contentStyle={{ 
            backgroundColor: 'rgba(10,10,20,0.8)', 
            border: '1px solid rgba(255,255,255,0.2)' 
          }}
          labelStyle={{ color: 'rgba(255,255,255,0.8)' }}
        />
        <Line 
          type="monotone" 
          dataKey="rank" 
          stroke="rgba(218,165,32,0.8)" 
          strokeWidth={2}
          dot={{ fill: '#DAA520', stroke: '#DAA520', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, fill: '#FFFFFF', stroke: '#DAA520' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RankProgressChart;
