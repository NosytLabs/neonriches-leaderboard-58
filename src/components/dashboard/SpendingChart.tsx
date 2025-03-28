
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Info, BarChart2, LineChart as LineChartIcon, PieChart } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface SpendingChartProps {
  data: Array<{
    week: string;
    amount: number;
  }>;
}

type ChartType = 'bar' | 'line' | 'area';

const SpendingChart = ({ data }: SpendingChartProps) => {
  const [chartType, setChartType] = useState<ChartType>('bar');
  
  // Ensure data is an array and has values
  const chartData = Array.isArray(data) ? data : [];
  
  const getGradientOffset = () => {
    const max = Math.max(...chartData.map((i) => i.amount));
    const min = Math.min(...chartData.map((i) => i.amount));
    
    if (max <= 0) {
      return 0;
    }
    if (min >= 0) {
      return 1;
    }
    
    return max / (max - min);
  };
  
  const gradientOffset = getGradientOffset();
  
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <LineChart 
            data={chartData} 
            margin={{ top: 20, right: 30, left: 5, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#D4AF37" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="week" stroke="#ffffff70" />
            <YAxis stroke="#ffffff70" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
              formatter={(value) => [`$${value}`, 'Tribute Amount']}
              labelFormatter={(label) => `Week: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="amount" 
              stroke="#D4AF37" 
              strokeWidth={3}
              dot={{ fill: '#D4AF37', r: 6, strokeWidth: 2, stroke: '#1a1f2c' }}
              activeDot={{ r: 8, stroke: '#D4AF37', strokeWidth: 2 }}
              animationDuration={1500}
            />
          </LineChart>
        );
      
      case 'area':
        return (
          <AreaChart 
            data={chartData} 
            margin={{ top: 20, right: 30, left: 5, bottom: 20 }}
          >
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={gradientOffset} stopColor="#D4AF37" stopOpacity={0.8}/>
                <stop offset={gradientOffset} stopColor="#8884d8" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="week" stroke="#ffffff70" />
            <YAxis stroke="#ffffff70" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
              formatter={(value) => [`$${value}`, 'Tribute Amount']}
              labelFormatter={(label) => `Week: ${label}`}
            />
            <Area 
              type="monotone" 
              dataKey="amount" 
              stroke="#D4AF37" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#splitColor)"
              animationDuration={1500}
            />
          </AreaChart>
        );
      
      case 'bar':
      default:
        return (
          <BarChart 
            data={chartData} 
            margin={{ top: 20, right: 30, left: 5, bottom: 20 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFC125" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#D4AF37" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="week" stroke="#ffffff70" />
            <YAxis stroke="#ffffff70" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
              formatter={(value) => [`$${value}`, 'Tribute Amount']}
              labelFormatter={(label) => `Week: ${label}`}
              cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
            />
            <Bar 
              dataKey="amount" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              fill="url(#barGradient)"
            >
              {chartData && chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={`rgba(${255 - (entry.amount / 10)}, ${Math.min(150 + (entry.amount / 5), 255)}, 100, 0.8)`}
                  // Add a shimmering effect to the highest bar
                  className={index === chartData.indexOf(chartData.reduce((prev, current) => (prev.amount > current.amount) ? prev : current)) ? 'animate-pulse-slow' : ''}
                />
              ))}
            </Bar>
          </BarChart>
        );
    }
  };
  
  return (
    <Card className="glass-morphism border-white/10 lg:col-span-2 transition-all duration-300 hover:border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-medieval">Weekly Tributes</CardTitle>
            <CardDescription>Your contributions to the royal treasury</CardDescription>
          </div>
          
          <div className="flex items-center gap-3">
            <ToggleGroup type="single" value={chartType} onValueChange={(value) => value && setChartType(value as ChartType)}>
              <ToggleGroupItem value="bar" aria-label="Toggle bar chart" className="data-[state=on]:bg-royal-gold/20">
                <BarChart2 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="line" aria-label="Toggle line chart" className="data-[state=on]:bg-royal-gold/20">
                <LineChartIcon className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="area" aria-label="Toggle area chart" className="data-[state=on]:bg-royal-gold/20">
                <PieChart className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="p-1.5 rounded-full bg-white/10 cursor-help">
                  <Info size={14} className="text-white/70" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="glass-morphism border-royal-gold/20 w-80">
                <p className="text-sm text-white/70">
                  This chart tracks your spending habits so you can see exactly how effectively
                  we've convinced you to part with your money week after week.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;
