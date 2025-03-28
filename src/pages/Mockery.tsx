
import React, { useEffect } from 'react';
import { PageContainer } from '@/components/layout/PageContainer';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Target, Egg, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/auth';
import RoyalMockeryFestival from '@/components/mockery/RoyalMockeryFestival';
import MockeryLeaderboard from '@/components/mockery/MockeryLeaderboard';
import MockeryRules from '@/components/mockery/MockeryRules';
import usePageTitle from '@/hooks/use-page-title';

const Mockery: React.FC = () => {
  const { user } = useAuth();
  
  usePageTitle('Mockery Festival');
  
  return (
    <PageContainer>
      <PageHeader
        title="Royal Mockery Festival"
        description="A time-honored tradition where nobles can ridicule each other for a small fee"
        breadcrumbs={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'Mockery Festival', link: '/mockery' }
        ]}
      />
      
      <div className="glass-morphism border-royal-crimson/20 p-4 rounded-lg mb-6">
        <div className="flex items-start">
          <AlertTriangle className="text-royal-crimson mt-1 mr-3 h-5 w-5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-medium mb-1">Mockery Festival Notice</h3>
            <p className="text-sm text-white/70">
              Participation in mockery costs tokens. Those who are mocked will see these effects on their profile
              for a limited time. All participation is voluntary and in good fun.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <Tabs defaultValue="festival">
            <TabsList className="glass-morphism mb-6">
              <TabsTrigger value="festival" className="flex items-center gap-2">
                <Target size={16} />
                <span>Festival</span>
              </TabsTrigger>
              <TabsTrigger value="leaderboard" className="flex items-center gap-2">
                <Shield size={16} />
                <span>Leaderboard</span>
              </TabsTrigger>
              <TabsTrigger value="rules" className="flex items-center gap-2">
                <Egg size={16} />
                <span>Rules</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="festival">
              <RoyalMockeryFestival />
            </TabsContent>
            
            <TabsContent value="leaderboard">
              <MockeryLeaderboard />
            </TabsContent>
            
            <TabsContent value="rules">
              <MockeryRules />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-4">
          <Card className="glass-morphism border-royal-crimson/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Target className="h-5 w-5 text-royal-crimson mr-2" />
                Mockery Highlights
              </CardTitle>
              <CardDescription>
                Notable mockery moments from this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="glass-morphism border-royal-crimson/10 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-bold text-sm">BejewledQueen</div>
                    <Badge variant="outline" className="text-[10px] border-red-500/30 text-red-400 bg-red-950/30">
                      Most Mocked
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70">Received 24 mockery actions this week</p>
                </div>
                
                <div className="glass-morphism border-royal-crimson/10 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-bold text-sm">DarkKnight</div>
                    <Badge variant="outline" className="text-[10px] border-purple-500/30 text-purple-400 bg-purple-950/30">
                      Vengeful
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70">Spent $45 mocking GoldenEmperor</p>
                </div>
                
                <div className="glass-morphism border-royal-crimson/10 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <div className="font-bold text-sm">RoyalJester</div>
                    <Badge variant="outline" className="text-[10px] border-green-500/30 text-green-400 bg-green-950/30">
                      Protected
                    </Badge>
                  </div>
                  <p className="text-sm text-white/70">Maintained protection for 14 days straight</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default Mockery;
