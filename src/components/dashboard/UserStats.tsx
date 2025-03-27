
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Activity, TrendingUp, Clock } from 'lucide-react';
import { UserProfile } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface UserStatsProps {
  user: UserProfile;
}

const UserStats: React.FC<UserStatsProps> = ({ user }) => {
  // Sample data for charts - in a real app, this would come from API
  const spendingData = [
    { day: 'Mon', amount: 5 },
    { day: 'Tue', amount: 15 },
    { day: 'Wed', amount: 10 },
    { day: 'Thu', amount: 20 },
    { day: 'Fri', amount: 35 },
    { day: 'Sat', amount: 25 },
    { day: 'Sun', amount: 30 },
  ];
  
  const engagementData = [
    { day: 'Mon', views: 12, clicks: 3 },
    { day: 'Tue', views: 19, clicks: 4 },
    { day: 'Wed', views: 15, clicks: 2 },
    { day: 'Thu', views: 25, clicks: 8 },
    { day: 'Fri', views: 32, clicks: 12 },
    { day: 'Sat', views: 18, clicks: 5 },
    { day: 'Sun', views: 29, clicks: 10 },
  ];
  
  return (
    <Card className="glass-morphism border-purple-400/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-royal flex items-center">
          <Activity className="mr-2 h-5 w-5 text-purple-400" />
          Performance Stats
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="spending">
          <TabsList className="w-full glass-morphism border-white/10 bg-transparent mb-4">
            <TabsTrigger value="spending" className="data-[state=active]:bg-white/10">Spending</TabsTrigger>
            <TabsTrigger value="engagement" className="data-[state=active]:bg-white/10">Engagement</TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-white/10">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="spending" className="mt-0">
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <TrendingUp className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium">Weekly Spending</span>
              </div>
              
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={spendingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30,30,30,0.9)', 
                        borderColor: 'rgba(168,85,247,0.3)',
                        borderRadius: '4px'
                      }} 
                    />
                    <Bar dataKey="amount" fill="#a855f7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="engagement" className="mt-0">
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Activity className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium">Profile Engagement</span>
              </div>
              
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(30,30,30,0.9)', 
                        borderColor: 'rgba(168,85,247,0.3)',
                        borderRadius: '4px'
                      }} 
                    />
                    <Line type="monotone" dataKey="views" stroke="#a855f7" activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="clicks" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-0">
            <div className="glass-morphism border-white/10 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Clock className="h-4 w-4 text-purple-400 mr-2" />
                <span className="text-sm font-medium">Recent Activity</span>
              </div>
              
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center p-3 glass-morphism border-white/10 rounded-md">
                    <Activity className="h-4 w-4 text-purple-400 mr-3" />
                    <div>
                      <div className="text-sm">Profile boosted</div>
                      <div className="text-xs text-white/60">{i} day{i !== 1 ? 's' : ''} ago</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserStats;
