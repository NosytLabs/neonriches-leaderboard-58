
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, PieChart, LineChart, Users, Crown, Target, Calendar } from 'lucide-react';
import usePageTracking from '@/hooks/usePageTracking';

const StatsPage = () => {
  // Track page view
  usePageTracking();
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <PageHeader 
          title="Royal Statistics" 
          description="Detailed insights and analysis of the kingdom's dynamics"
          icon={<BarChart3 className="h-8 w-8 text-royal-gold" />}
        />
        
        <Tabs defaultValue="overview" className="w-full mt-6">
          <TabsList className="w-full grid grid-cols-4 mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <PieChart className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="spending" className="flex items-center gap-2">
              <LineChart className="h-4 w-4" />
              Spending Trends
            </TabsTrigger>
            <TabsTrigger value="mockery" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              Mockery Stats
            </TabsTrigger>
            <TabsTrigger value="demographics" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Demographics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Crown className="h-5 w-5 mr-2 text-royal-gold" />
                    Top Spenders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="flex items-center p-3 rounded-md bg-background/50 border border-white/10">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-royal-gold to-royal-crimson mr-3 flex items-center justify-center text-black font-bold">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">Royal User {String.fromCharCode(65 + i)}</h3>
                          <div className="w-full h-2 bg-white/10 rounded-full mt-1 overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-royal-gold to-royal-crimson" 
                              style={{ width: `${100 - i * 15}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">${(5000 - i * 750).toLocaleString()}</p>
                          <p className="text-xs text-white/60">total spent</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-royal-gold" />
                    Monthly Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between px-2">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const height = 30 + Math.random() * 70;
                      return (
                        <div key={i} className="w-full max-w-[8%] mx-1">
                          <div 
                            className="bg-gradient-to-t from-royal-gold to-royal-crimson rounded-t-sm" 
                            style={{ height: `${height}%` }}
                          ></div>
                          <p className="text-xs text-center mt-1">{String.fromCharCode(65 + i).substring(0, 1)}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/70">Monthly spending patterns across the kingdom</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Target className="h-5 w-5 mr-2 text-royal-crimson" />
                    Mockery Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex">
                    <div className="w-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-royal-crimson/20 to-royal-crimson/60 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-royal-crimson/30 to-royal-crimson/80 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-royal-crimson/60 to-royal-crimson flex items-center justify-center text-white font-bold">
                              75%
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-white/70 px-4">
                        <span>Rotten Tomatoes</span>
                        <span>Jester Hat</span>
                        <span>Royal Mockery</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/70">Most popular forms of mockery used in the kingdom</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-morphism border-white/10">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-royal-gold" />
                    User Tiers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-24 text-sm">Royal</div>
                          <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-royal-gold" style={{ width: '5%' }}></div>
                          </div>
                          <div className="w-12 text-right text-sm">5%</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm">Premium</div>
                          <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-royal-purple" style={{ width: '15%' }}></div>
                          </div>
                          <div className="w-12 text-right text-sm">15%</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm">Plus</div>
                          <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-royal-crimson" style={{ width: '30%' }}></div>
                          </div>
                          <div className="w-12 text-right text-sm">30%</div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-24 text-sm">Basic</div>
                          <div className="flex-1 h-6 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-white/50" style={{ width: '50%' }}></div>
                          </div>
                          <div className="w-12 text-right text-sm">50%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/70">Distribution of users across subscription tiers</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="spending">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Spending Trends & Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/70 py-12">
                  Detailed spending trends visualization will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="mockery">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">Mockery Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/70 py-12">
                  Mockery statistics and trends will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="demographics">
            <Card className="glass-morphism border-white/10">
              <CardHeader>
                <CardTitle className="text-lg">User Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/70 py-12">
                  User demographic data will appear here
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default StatsPage;
