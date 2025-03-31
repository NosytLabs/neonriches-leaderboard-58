import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserProfile } from '@/types/user';
import { formatCurrency, formatNumber } from '@/utils/formatters';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRight, ChevronsUp, Crown, TrendingUp, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formatDate, getRelativeTimeString } from '@/utils/dateUtils';

const generateMockSpendData = () => {
  return Array.from({ length: 14 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return {
      date: date.toISOString().split('T')[0],
      amount: Math.floor(Math.random() * 100) + 5,
    };
  });
};

const generateMockRankData = () => {
  // Start from a high number and generally go down (with some fluctuations)
  return Array.from({ length: 14 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return {
      date: date.toISOString().split('T')[0],
      rank: Math.max(1, Math.floor(100 - i * 5 + (Math.random() * 10 - 5))),
    };
  });
};

interface UserStatsProps {
  user: UserProfile;
}

const UserStats: React.FC<UserStatsProps> = ({ user }) => {
  const [spendData, setSpendData] = useState(generateMockSpendData());
  const [rankData, setRankData] = useState(generateMockRankData());
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    // In a real implementation, you would fetch this data from an API
    setSpendData(generateMockSpendData());
    setRankData(generateMockRankData());
  }, [user.id]);
  
  return (
    <div className="space-y-4">
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="spending">Spending</TabsTrigger>
          <TabsTrigger value="rank">Rank</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="glass-morphism border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(user.totalSpent || user.amountSpent || 0)}</div>
                <p className="text-xs text-white/60 mt-1">Joined {formatDate(user.joinDate)} ({getRelativeTimeString(user.joinDate)})</p>
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">#{formatNumber(user.rank)}</div>
                {user.previousRank && user.previousRank !== user.rank && (
                  <div className={cn("text-xs mt-1 flex items-center", 
                    user.previousRank > user.rank ? "text-green-500" : "text-red-500"
                  )}>
                    {user.previousRank > user.rank ? (
                      <>
                        <ChevronsUp className="h-3 w-3 mr-1" />
                        Improved by {user.previousRank - user.rank} positions
                      </>
                    ) : (
                      <>
                        <ChevronsUp className="h-3 w-3 mr-1 rotate-180" />
                        Dropped by {user.rank - user.previousRank} positions
                      </>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card className="glass-morphism border-white/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{formatCurrency(user.walletBalance || 0)}</div>
                <p className="text-xs text-white/60 mt-1">Available for spending</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Spending Overview</CardTitle>
              <CardDescription>Your spending over the last 14 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={spendData}>
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(value) => new Date(value).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                    tick={{ fontSize: 12, fill: 'rgba(255, 255, 255, 0.6)' }}
                    axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                    tickLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Amount']}
                    labelFormatter={(label) => new Date(label).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}
                    contentStyle={{ background: 'rgba(15, 15, 15, 0.9)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '6px' }}
                  />
                  <Bar 
                    dataKey="amount" 
                    fill="rgba(147, 51, 234, 0.7)" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
              
              <div className="flex justify-end mt-4">
                <Button variant="ghost" size="sm" className="text-xs">
                  View Full History
                  <ArrowUpRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="spending" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Spending History</CardTitle>
              <CardDescription>Your detailed spending history</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Detailed spending history will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rank" className="space-y-4">
          <Card className="glass-morphism border-white/10">
            <CardHeader>
              <CardTitle>Rank History</CardTitle>
              <CardDescription>How your rank has changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Detailed rank history will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserStats;
