
import React, { useState, useCallback } from 'react';
import { 
  PieChart, 
  Pie, 
  ResponsiveContainer, 
  Cell, 
  Legend, 
  Tooltip,
  Sector,
  AnimatedProps
} from 'recharts';
import { motion } from 'framer-motion';

interface SpendingData {
  name: string;
  value: number;
  color: string;
}

interface SpendingDistributionChartProps {
  data: SpendingData[];
  className?: string;
  height?: number;
  showLegend?: boolean;
  animated?: boolean;
}

// Enhanced active shape for the pie chart with animations
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
      <text 
        x={cx} 
        y={cy - 5} 
        textAnchor="middle" 
        fill="#fff" 
        className="text-sm font-medium"
      >
        {payload.name}
      </text>
      <text 
        x={cx} 
        y={cy + 20} 
        textAnchor="middle" 
        fill="#ffffff" 
        className="text-lg font-bold"
      >
        ${value.toLocaleString()}
      </text>
      <text 
        x={cx} 
        y={cy + 40} 
        textAnchor="middle" 
        fill="rgba(255,255,255,0.7)" 
        className="text-xs"
      >
        {(percent * 100).toFixed(0)}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
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
        innerRadius={outerRadius + 8}
        outerRadius={outerRadius + 12}
        fill={fill}
      />
    </g>
  );
};

// Custom tooltip with animations
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="glass-morphism border border-white/10 rounded p-3 text-sm shadow-lg"
      >
        <p className="font-medium text-base mb-1" style={{ color: data.color }}>{data.name}</p>
        <p className="text-white/90 font-bold">${data.value.toLocaleString()}</p>
        <p className="text-white/60 text-xs mt-1">
          {(payload[0].percent * 100).toFixed(1)}% of total
        </p>
      </motion.div>
    );
  }
  return null;
};

// Custom Legend component with animations
const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 pt-2">
      {payload.map((entry: any, index: number) => (
        <motion.div 
          key={`legend-${index}`}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center"
        >
          <div 
            className="w-3 h-3 rounded-full mr-2" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs text-white/80">{entry.value}</span>
        </motion.div>
      ))}
    </div>
  );
};

const SpendingDistributionChart: React.FC<SpendingDistributionChartProps> = ({ 
  data,
  className = '',
  height = 300,
  showLegend = true,
  animated = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePieEnter = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  }, []);
  
  // Sort data by value in descending order
  const sortedData = [...data].sort((a, b) => b.value - a.value);
  
  // Calculate total spending
  const totalSpending = data.reduce((sum, item) => sum + item.value, 0);

  // Animation variants for the chart container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <motion.div 
      className={`${className} w-full h-full`}
      style={{ minHeight: height }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col h-full">
        <motion.div 
          className="text-center mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold royal-gradient">Spending Distribution</h3>
          <p className="text-white/60 text-sm">Total: ${totalSpending.toLocaleString()}</p>
        </motion.div>
        
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
                isAnimationActive={animated}
                animationBegin={200}
                animationDuration={1000}
                animationEasing="ease-out"
              >
                {sortedData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke="rgba(0,0,0,0.3)"
                    strokeWidth={1}
                  />
                ))}
              </Pie>
              {showLegend && <Legend content={<CustomLegend />} />}
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
};

export default SpendingDistributionChart;
