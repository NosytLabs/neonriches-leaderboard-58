
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { DollarSign, TrendingUp } from 'lucide-react';
import { UserProfile } from '@/types/user';

interface SpendingVisualizerProps {
  user: UserProfile;
  onSpend?: () => void;
}

const SpendingVisualizer: React.FC<SpendingVisualizerProps> = ({ user, onSpend }) => {
  // Generate mock spending data for the last 14 days
  const spendingData = React.useMemo(() => {
    const data = [];
    const now = new Date();
    const totalSpent = user.totalSpent || user.amountSpent || 0;
    const averageDaily = Math.max(1, totalSpent / 30); // Assume 30 days of activity
    
    for (let i = 13; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      // Generate random spending amount with occasional spikes
      const isSpike = Math.random() > 0.85;
      const variance = Math.random() * 0.5 + 0.75; // Between 0.75 and 1.25
      const amount = isSpike 
        ? averageDaily * variance * (Math.random() * 8 + 3) // 3x to 10x spike
        : averageDaily * variance;
      
      data.push({
        date: date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
        amount: Math.round(amount * 100) / 100
      });
    }
    
    return data;
  }, [user.totalSpent, user.amountSpent]);
  
  const maxAmount = Math.max(...spendingData.map(d => d.amount));
  
  return (
    <Card className="glass-morphism border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-royal-gold" />
          Spending Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={spendingData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <XAxis 
                dataKey="date" 
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)"
                tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, 'Amount']}
                contentStyle={{ 
                  backgroundColor: 'rgba(10,10,20,0.8)', 
                  border: '1px solid rgba(255,255,255,0.2)' 
                }}
                labelStyle={{ color: 'rgba(255,255,255,0.8)' }}
              />
              <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                {spendingData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.amount > averageSpending(spendingData) * 2 ? '#FFD700' : '#6366F1'} 
                    fillOpacity={0.8 + (entry.amount / maxAmount) * 0.2}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 bg-white/5 p-4 rounded-md flex items-center">
          <TrendingUp className="h-10 w-10 mr-4 text-green-400" />
          <div>
            <h3 className="font-medium text-lg">Spending Analysis</h3>
            <p className="text-sm text-white/70">
              {getSpendingAnalysis(spendingData)}
            </p>
          </div>
        </div>
        
        {onSpend && (
          <div className="mt-4 text-center">
            <button 
              className="px-4 py-2 bg-royal-purple text-white rounded hover:bg-royal-purple/90 transition-colors"
              onClick={onSpend}
            >
              Spend More
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const averageSpending = (data: Array<{amount: number}>): number => {
  const sum = data.reduce((acc, d) => acc + d.amount, 0);
  return sum / data.length;
};

const getSpendingAnalysis = (data: Array<{date: string; amount: number}>): string => {
  const avg = averageSpending(data);
  const recent = data.slice(-3);
  const recentAvg = averageSpending(recent);
  
  if (recentAvg > avg * 1.5) {
    return "Your recent spending has increased significantly. You're on track to improve your rank!";
  } else if (recentAvg > avg * 1.1) {
    return "Your spending has increased slightly. Keep it up to climb the ranks faster!";
  } else if (recentAvg < avg * 0.7) {
    return "Your spending has decreased recently. Consider increasing your activity to maintain your rank.";
  } else {
    return "Your spending is consistent. Steady spending helps maintain your position in the rankings.";
  }
};

export default SpendingVisualizer;
