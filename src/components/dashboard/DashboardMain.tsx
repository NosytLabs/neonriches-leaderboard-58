
import React from 'react';
import { UserProfile } from '@/contexts/AuthContext';
import InteractiveLeaderboard from '@/components/dashboard/InteractiveLeaderboard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, CrownIcon, Users, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface DashboardMainProps {
  user: UserProfile | null;
}

const DashboardMain: React.FC<DashboardMainProps> = ({ user }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card className="glass-morphism border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Coins className="mr-2 h-5 w-5 text-royal-gold" />
              Royal Treasury
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="text-sm text-white/70 mb-1">Current Rank</div>
                <div className="text-2xl font-bold flex items-center">
                  <CrownIcon className="h-5 w-5 text-royal-gold mr-2" />
                  #{user?.rank || '??'}
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="text-sm text-white/70 mb-1">Total Spent</div>
                <div className="text-2xl font-bold flex items-center">
                  <Coins className="h-5 w-5 text-royal-gold mr-2" />
                  ${user?.totalSpent?.toFixed(2) || '0.00'}
                </div>
              </div>
              
              <div className="glass-morphism border-white/10 p-4 rounded-lg">
                <div className="text-sm text-white/70 mb-1">Team Rank</div>
                <div className="text-2xl font-bold flex items-center">
                  <Users className="h-5 w-5 text-royal-gold mr-2" />
                  #{user?.teamRank || '??'}
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Tabs defaultValue="activity">
                <TabsList className="w-full glass-morphism border-white/10 bg-transparent">
                  <TabsTrigger value="activity" className="data-[state=active]:bg-white/10">Recent Activity</TabsTrigger>
                  <TabsTrigger value="stats" className="data-[state=active]:bg-white/10">Kingdom Stats</TabsTrigger>
                </TabsList>
                <TabsContent value="activity" className="mt-4">
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center p-3 glass-morphism border-white/10 rounded-md">
                        <TrendingUp className="h-4 w-4 text-green-400 mr-3" />
                        <div>
                          <div className="text-sm">You gained {i} rank positions</div>
                          <div className="text-xs text-white/60">2 days ago</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="stats" className="mt-4">
                  <div className="space-y-3">
                    <div className="p-3 glass-morphism border-white/10 rounded-md">
                      <div className="text-sm font-medium mb-1">Kingdom Total</div>
                      <div className="text-2xl font-bold">$238,456.78</div>
                      <div className="text-xs text-white/60">Total spent by all nobles</div>
                    </div>
                    <div className="p-3 glass-morphism border-white/10 rounded-md">
                      <div className="text-sm font-medium mb-1">This Week</div>
                      <div className="text-2xl font-bold">$12,345.67</div>
                      <div className="text-xs text-white/60">Total spent this week</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-1">
        <InteractiveLeaderboard />
      </div>
    </div>
  );
};

export default DashboardMain;
