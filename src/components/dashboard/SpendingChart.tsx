
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Info } from 'lucide-react';

interface SpendingChartProps {
  data: Array<{
    week: string;
    amount: number;
  }>;
}

const SpendingChart = ({ data }: SpendingChartProps) => {
  return (
    <Card className="glass-morphism border-white/10 lg:col-span-2 transition-all duration-300 hover:border-royal-gold/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Weekly Tributes</CardTitle>
            <CardDescription>Your contributions to the royal treasury</CardDescription>
          </div>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="p-1 rounded-full bg-white/10 cursor-help">
                <Info size={16} className="text-white/70" />
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
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 5, bottom: 20 }}>
              <XAxis dataKey="week" stroke="#ffffff70" />
              <YAxis stroke="#ffffff70" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
                formatter={(value) => [`$${value}`, 'Tribute Amount']}
                labelFormatter={(label) => `Week: ${label}`}
              />
              <Bar 
                dataKey="amount" 
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === data.length - 1 
                      ? '#FFD700' // Royal gold for latest week
                      : index === data.length - 2 
                        ? '#9B26AF80' // Royal purple with transparency for previous week
                        : '#9f9ea150' // Default color for older weeks
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-white/70 text-sm italic">
            {data[data.length - 1].amount > data[data.length - 2].amount 
              ? "Impressive growth! Your wallet must feel so honored to serve the crown." 
              : "Your spending is declining. Are you questioning your loyalty to the throne?"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;
