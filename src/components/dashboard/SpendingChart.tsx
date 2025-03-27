
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface SpendingChartProps {
  data: Array<{
    week: string;
    amount: number;
  }>;
}

const SpendingChart = ({ data }: SpendingChartProps) => {
  return (
    <Card className="glass-morphism border-white/10 lg:col-span-2">
      <CardHeader>
        <CardTitle>Weekly Spending</CardTitle>
        <CardDescription>Your contributions over the last 7 weeks</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 5, bottom: 20 }}>
              <XAxis dataKey="week" stroke="#ffffff70" />
              <YAxis stroke="#ffffff70" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1f2c', border: '1px solid rgba(255,255,255,0.1)' }}
                formatter={(value) => [`$${value}`, 'Amount']}
              />
              <Bar 
                dataKey="amount" 
                radius={[4, 4, 0, 0]}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === data.length - 1 ? '#00FF8B' : '#9f9ea150'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingChart;
