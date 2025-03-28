
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ClickData } from '@/hooks/useProfileAnalytics';

interface ClicksChartProps {
  data: ClickData[];
}

const ClicksChart: React.FC<ClicksChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white/50">No click data available yet</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
        <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
        <YAxis stroke="rgba(255,255,255,0.5)" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: '4px'
          }} 
        />
        <Legend />
        <Bar dataKey="clicks" fill="#9B87F5" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ClicksChart;
