
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { formatCurrency } from '@/utils/formatters';
import { DollarSign, TrendingUp, Calendar, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface Deposit {
  id: string;
  amount: number;
  date: string;
  formattedDate?: string;
}

interface DepositTrackerProps {
  deposits: Deposit[];
  totalSpent: number;
  streak: number;
  lastDepositDate?: string;
  className?: string;
}

const DepositTracker: React.FC<DepositTrackerProps> = ({ 
  deposits, 
  totalSpent, 
  streak,
  lastDepositDate,
  className
}) => {
  // Format deposit data for the chart
  const chartData = deposits.map(deposit => ({
    ...deposit,
    formattedDate: new Date(deposit.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }));
  
  // Calculate metrics
  const depositCount = deposits.length;
  const averageDeposit = depositCount > 0 
    ? totalSpent / depositCount
    : 0;
  
  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-morphism border-white/10 p-2 text-xs">
          <p className="font-medium">{payload[0].payload.formattedDate}</p>
          <p className="text-royal-gold">{formatCurrency(payload[0].value as number)}</p>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <Card className={`glass-morphism border-white/10 ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <DollarSign className="h-5 w-5 mr-2 text-royal-gold" />
          Deposit History
        </CardTitle>
        <CardDescription>
          Track your spending contributions and deposit streak
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-xs text-white/60 mb-1 flex items-center">
              <DollarSign className="h-3 w-3 mr-1 text-royal-gold" />
              Total Spent
            </div>
            <div className="text-xl font-mono font-bold">
              {formatCurrency(totalSpent)}
            </div>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-xs text-white/60 mb-1 flex items-center">
              <Flame className="h-3 w-3 mr-1 text-red-400" />
              Spend Streak
            </div>
            <motion.div 
              className="text-xl font-bold flex items-baseline"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
            >
              {streak} {streak === 1 ? 'day' : 'days'}
              {streak >= 7 && (
                <span className="text-xs ml-2 text-red-400">🔥 On fire!</span>
              )}
            </motion.div>
          </div>
          
          <div className="glass-morphism border-white/10 p-4 rounded-lg">
            <div className="text-xs text-white/60 mb-1 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-400" />
              Average Deposit
            </div>
            <div className="text-xl font-mono font-bold">
              {formatCurrency(averageDeposit)}
            </div>
          </div>
        </div>
        
        <div className="h-60 mt-4">
          {deposits.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="formattedDate" 
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fontSize: 10 }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#E2C48C" 
                  strokeWidth={2}
                  activeDot={{ r: 6, fill: '#E2C48C' }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-white/50">
                <Calendar className="h-12 w-12 mx-auto mb-2 opacity-25" />
                <p>No deposit history yet</p>
                <p className="text-sm mt-1">Make your first deposit to start tracking</p>
              </div>
            </div>
          )}
        </div>
        
        {lastDepositDate && (
          <div className="mt-4 text-xs text-white/60 text-center">
            Last deposit: {new Date(lastDepositDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DepositTracker;
