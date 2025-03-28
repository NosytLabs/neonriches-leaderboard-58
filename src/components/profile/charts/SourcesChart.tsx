
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { SourceData } from '@/hooks/useProfileAnalytics';

interface SourcesChartProps {
  data: SourceData[];
}

const COLORS = ['#D4AF37', '#9B87F5', '#FF6B6B', '#4ECDC4', '#556FB5'];

// Custom type for the pie label props
interface PieLabelProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  percent?: number;
  index?: number;
  name?: string;
}

const SourcesChart: React.FC<SourcesChartProps> = ({ data }) => {
  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-white/50">No source data available yet</p>
      </div>
    );
  }

  // Custom label render function with type safety
  const renderPieLabel = ({ name, percent }: PieLabelProps) => {
    if (!name || percent === undefined) return null;
    return `${name}: ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={renderPieLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(0,0,0,0.8)', 
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: '4px'
          }} 
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SourcesChart;
