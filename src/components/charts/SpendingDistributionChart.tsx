
import React, { useState } from 'react';
import { 
  PieChart, 
  Pie, 
  ResponsiveContainer, 
  Cell, 
  Legend, 
  Tooltip,
  Sector
} from 'recharts';

interface SpendingDistributionChartProps {
  data: Array<{ name: string; value: number; color: string }>;
  className?: string;
}

// Active shape for the pie chart
const renderActiveShape = (props: any) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={-15} textAnchor="middle" fill="#fff" className="text-sm">
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={15} textAnchor="middle" fill="#ffffff">
        ${value.toFixed(2)} ({(percent * 100).toFixed(0)}%)
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 5}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.8}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 5}
        outerRadius={outerRadius + 7}
        fill={fill}
      />
    </g>
  );
};

// Custom tooltip for the pie chart
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-black/80 border border-white/10 rounded p-2 text-sm">
        <p className="font-medium">{data.name}</p>
        <p className="text-white/80">${data.value.toFixed(2)}</p>
        <p className="text-white/60">
          {(payload[0].percent * 100).toFixed(0)}% of total
        </p>
      </div>
    );
  }
  return null;
};

const SpendingDistributionChart: React.FC<SpendingDistributionChartProps> = ({ 
  data,
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };
  
  // Sort data by value in descending order
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  
  // Calculate total spending
  const totalSpending = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className={`${className} w-full h-full min-h-[300px]`}>
      <div className="flex flex-col h-full">
        <div className="text-center mb-2">
          <h3 className="text-lg font-semibold">Spending Distribution</h3>
          <p className="text-white/60 text-sm">Total: ${totalSpending.toFixed(2)}</p>
        </div>
        
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={sortedData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                onMouseEnter={handlePieEnter}
                paddingAngle={2}
              >
                {sortedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend layout="vertical" align="right" verticalAlign="middle" />
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SpendingDistributionChart;
